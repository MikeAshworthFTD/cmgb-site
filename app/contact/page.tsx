"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMemo, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgveokg";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

useEffect(() => {
  if (status === "success") {
    /*
    router.push("/thanks");
    */
  }
}, [status, router]);

  const isDisabled = useMemo(() => status === "sending", [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      // try to parse error message
      const data = await res.json().catch(() => null);
      setStatus("error");
      setErrorMsg(
        data?.error ||
          "Something went wrong sending your request. Please call or text instead."
      );
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please call or text instead.");
    }
  }

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-zinc-700">
          Call or text for a free estimate, or use the form below to request a
          quote.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {/* Contact card */}
        <div className="rounded-lg border p-6 space-y-3">
          <p className="text-lg font-semibold">Call/Text</p>
          <a className="underline text-lg" href="tel:+15038901595">
            (503) 890-1595
          </a>
          <p className="text-sm text-zinc-600">
            Typical reply time: same day.
          </p>

          <div className="pt-3 border-t text-sm text-zinc-700 space-y-1">
            <p className="font-medium">For the fastest quote, include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Address + city</li>
              <li>1 story or 2 story</li>
              <li>Any overflow spots/problem areas</li>
              <li>Last cleaned (if you know)</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Request a Quote</h2>

          {status === "success" ? (
            <div className="rounded-md border p-4 bg-white">
              <p className="font-semibold">Request sent ✅</p>
              <p className="text-sm text-zinc-700 mt-1">
                Thanks — we’ll reply as soon as we can.
              </p>
              <button
                className="mt-4 underline text-sm"
                onClick={() => setStatus("idle")}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot (spam trap) */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Subject line for email */}
              <input
                type="hidden"
                name="_subject"
                value="CMGB Quote Request"
              />

              {/* Optional: where replies go */}
              <input type="hidden" name="_replyto" value="" />

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border px-3 py-2"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="phone">
                  Phone (for text/call back)
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-md border px-3 py-2"
                  placeholder="(###) ###-####"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="address">
                  Address (or neighborhood)
                </label>
                <input
                  id="address"
                  name="address"
                  className="w-full rounded-md border px-3 py-2"
                  placeholder="Bend, OR (or full address)"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="stories">
                  Home height
                </label>
                <select
                  id="stories"
                  name="stories"
                  className="w-full rounded-md border px-3 py-2"
                  defaultValue="1 story"
                >
                  <option>1 story</option>
                  <option>2 story</option>
                  <option>3+ story</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="message">
                  Notes (overflow spots, last cleaned, etc.)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-md border px-3 py-2"
                  placeholder="Anything we should know?"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={isDisabled}
                className="rounded-md border px-4 py-2 font-medium"
              >
                {status === "sending" ? "Sending..." : "Request Quote"}
              </button>

              <p className="text-xs text-zinc-500">
                By submitting, you’re requesting a quote for gutter cleaning.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
