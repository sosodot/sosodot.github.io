import { useState, type ReactNode, type FormEvent } from "react";

interface PasswordGateProps {
  children: ReactNode;
}

const STORAGE_KEY = "soso-auth";
const PASSWORD = "sosodoesstuff";

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (authenticated) return <>{children}</>;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      window.scrollTo(0, 0);
      setAuthenticated(true);
    } else {
      setError(true);
    }
  }

  return (
    <>
      {children}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-cream/80 backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 px-8"
        >
          <span className="text-4xl font-semibold tracking-tight text-brown-dark">
            soso.
          </span>

          <div
            className={`flex flex-col items-center gap-3 ${error ? "animate-shake" : ""}`}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter password"
              autoFocus
              className="w-64 rounded-full border border-brown-dark/20 bg-cream px-5 py-2.5 text-center text-brown-dark placeholder:text-brown-dark/40 focus:border-brown-dark/50 focus:outline-none"
            />
            <button
              type="submit"
              className="w-64 rounded-full border border-brown-dark bg-brown-dark px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-80"
            >
              Enter
            </button>
          </div>

          {error && (
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm text-brown-dark/60">
                Incorrect password
              </p>
              <p className="text-xs text-brown-dark/40">
                These are not the droids we are looking for
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
