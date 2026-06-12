"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Login failed.");
      }

      const next = searchParams.get("next") ?? "/admin/";
      router.push(next);
      router.refresh();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-md space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-violet-300">GameZone</p>
        <h1 className="mt-2 text-2xl font-semibold">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-400">Sign in to manage ads, site info, and homepage settings.</p>
      </div>
      <label className="block space-y-2 text-sm">
        <span>Username</span>
        <input
          type="text"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none ring-violet-500 focus:ring-2"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="username"
          required
        />
      </label>
      <label className="block space-y-2 text-sm">
        <span>Password</span>
        <input
          type="password"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none ring-violet-500 focus:ring-2"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />
      </label>
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <Suspense fallback={<div className="text-sm text-slate-400">Loading...</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
