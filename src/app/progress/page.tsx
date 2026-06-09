import Link from "next/link";
import { ProgressForm } from "@/components/ProgressForm";
import { requireUser } from "@/lib/auth";
import {
  buildProgressMap,
  getCurrentDay,
  getDayCompletion,
  getProgressForUser,
  getTotalCompletedMeals,
} from "@/lib/progress";
import type { MealType } from "@/data/meal-plan";

type SearchParams = Promise<{
  type?: string;
  meal?: string;
}>;

export default async function TrackPage({ searchParams }: { searchParams: SearchParams }) {
  const user = await requireUser();
  const rows = await getProgressForUser(user.id);
  const map = buildProgressMap(rows);
  const completedMeals = getTotalCompletedMeals(rows);
  const currentDay = getCurrentDay(rows);
  const daysLogged = rows.filter((r) => getDayCompletion(r) > 0).length;
  const pct = Math.round((completedMeals / 42) * 100);
  const days = Array.from({ length: 14 }, (_, i) => i + 1);

  const { type: prefillType, meal: prefillMeal } = await searchParams;
  const validTypes: MealType[] = ["breakfast", "lunch", "dinner"];
  const prefill =
    prefillType && prefillMeal && validTypes.includes(prefillType as MealType)
      ? { type: prefillType as MealType, meal: decodeURIComponent(prefillMeal) }
      : undefined;

  return (
    <div className="shell stack-lg">

      {/* Header */}
      <div className="between">
        <div>
          <p className="eyebrow">Your Reset Journey</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", marginTop: ".3rem" }}>
            Hi, {user.name.split(" ")[0]} 👋
          </h1>
          <p className="muted t-sm" style={{ marginTop: ".4rem" }}>
            Log your meals, water, and how you feel each session.{" "}
            <Link href="/meals" className="text-link">Browse recipes →</Link>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="stat-grid">
        <div className="stat-card">
          <p className="stat-val">{completedMeals}</p>
          <p className="stat-lbl">Meals done</p>
          <div className="progress-bar-wrap">
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="stat-card">
          <p className="stat-val">{pct}%</p>
          <p className="stat-lbl">Reset progress</p>
        </div>
        <div className="stat-card">
          <p className="stat-val">{daysLogged}</p>
          <p className="stat-lbl">Sessions logged</p>
        </div>
      </div>

      {/* Active session */}
      <section>
        <div className="section-head" style={{ marginBottom: "1rem" }}>
          <div>
            <p className="eyebrow">Current Session</p>
            <h2 style={{ fontSize: "1.3rem" }}>Session {currentDay} of 14</h2>
            {prefill && (
              <p className="muted t-sm" style={{ marginTop: ".3rem" }}>
                Pre-filled from recipe: <strong style={{ color: "var(--accent)" }}>{prefill.meal}</strong>
              </p>
            )}
          </div>
          <Link href="/meals" className="btn btn-outline btn-sm">Find a recipe</Link>
        </div>

        <div className="card card-p">
          <ProgressForm day={currentDay} progress={map.get(currentDay)} prefill={prefill} />
        </div>
      </section>

      {/* Other sessions */}
      {days.some((d) => d !== currentDay) && (
        <section>
          <p className="eyebrow" style={{ marginBottom: ".85rem" }}>All Sessions</p>
          <div className="stack-sm">
            {days
              .filter((d) => d !== currentDay)
              .map((day) => {
                const row = map.get(day);
                const done = getDayCompletion(row);

                return (
                  <details key={day} className="session-item">
                    <summary className="session-summary">
                      <div className="flow" style={{ gap: ".6rem" }}>
                        <span className="session-name">Session {day}</span>
                        {done === 3 && <span className="badge badge-l">complete</span>}
                        {done > 0 && done < 3 && (
                          <span
                            className="badge"
                            style={{
                              background: "rgba(212,168,64,.14)",
                              color: "var(--warn)",
                              border: "1px solid rgba(212,168,64,.22)",
                            }}
                          >
                            {done}/3 done
                          </span>
                        )}
                      </div>
                      <div className="session-dots">
                        <span className={`session-dot${row?.breakfast_complete ? " done" : ""}`} title="Breakfast" />
                        <span className={`session-dot${row?.lunch_complete ? " done" : ""}`} title="Lunch" />
                        <span className={`session-dot${row?.dinner_complete ? " done" : ""}`} title="Dinner" />
                      </div>
                    </summary>
                    <div className="session-body">
                      <ProgressForm day={day} progress={row} />
                    </div>
                  </details>
                );
              })}
          </div>
        </section>
      )}

    </div>
  );
}
