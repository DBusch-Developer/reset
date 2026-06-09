import Link from "next/link";
import { getSession } from "@/lib/auth";
import { logoutAction } from "@/app/actions/auth";
import { NavTabs } from "./NavTabs";

export async function Navbar() {
  const user = await getSession();

  return (
    <>
      <header className="site-nav">
        <Link href="/" className="brand">
          <span className="brand-dot">✦</span>
          <span>Reset</span>
        </Link>

        <div className="nav-right">
          <NavTabs variant="desktop" />
          <div className="nav-auth">
            {user ? (
              <form action={logoutAction}>
                <button type="submit" className="nav-action">Sign out</button>
              </form>
            ) : (
              <Link href="/login" className="nav-cta">Sign in</Link>
            )}
          </div>
        </div>
      </header>

      <NavTabs variant="bottom" />
    </>
  );
}
