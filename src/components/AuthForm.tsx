"use client";

import { useActionState } from "react";
import { requestLoginCodeAction, verifyLoginCodeAction } from "@/app/actions/auth";

function SubmitBtn({ children }: { children: React.ReactNode }) {
  return (
    <button type="submit" className="btn btn-green" style={{ width: "100%" }}>
      {children}
    </button>
  );
}

export function AuthForm() {
  const [requestState, requestFormAction] = useActionState(requestLoginCodeAction, {});
  const [verifyState, verifyFormAction] = useActionState(verifyLoginCodeAction, {});
  const emailForCode = verifyState.email ?? requestState.email ?? "";

  if (requestState.sent) {
    return (
      <div className="stack">
        <div>
          <p className="eyebrow" style={{ marginBottom: ".3rem" }}>Code sent</p>
          <p className="muted t-sm">{requestState.message}</p>
          {requestState.devCode && (
            <div className="dev-hint" style={{ marginTop: ".75rem" }}>
              Dev code: <strong>{requestState.devCode}</strong>
            </div>
          )}
        </div>

        <form action={verifyFormAction} className="auth-form">
          <input type="hidden" name="email" value={emailForCode} />

          <div className="form-group">
            <span className="form-label">6-digit code</span>
            <input
              name="code"
              className="form-input"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              placeholder="123456"
              required
            />
          </div>

          {verifyState?.error && <p className="form-error">{verifyState.error}</p>}

          <SubmitBtn>Verify and enter</SubmitBtn>
        </form>

        <form action={requestFormAction}>
          <input type="hidden" name="email" value={emailForCode} />
          <button type="submit" className="text-link">Send a new code</button>
        </form>
      </div>
    );
  }

  return (
    <form action={requestFormAction} className="auth-form">
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name <span style={{ opacity: .55, fontWeight: 600 }}>(optional)</span></label>
        <input
          id="name"
          name="name"
          className="form-input"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </div>

      {requestState?.error && <p className="form-error">{requestState.error}</p>}

      <SubmitBtn>Email me a login code</SubmitBtn>

      <p className="muted t-sm">
        No password needed — just a 6-digit code sent to your inbox.
      </p>
    </form>
  );
}
