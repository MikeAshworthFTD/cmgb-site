export default function ThanksPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-3xl font-bold">Thanks! We got your request.</h1>

      <p className="text-zinc-700">
        We’ll review your info and get back to you shortly with an estimate.
      </p>

      <p className="text-zinc-700">
        If it’s urgent, feel free to call or text us directly.
      </p>

      <a
        href="/"
        className="inline-block underline text-sm"
      >
        ← Back to home
      </a>
    </div>
  );
}
