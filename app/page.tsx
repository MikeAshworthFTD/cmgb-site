import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Clean My Gutters Bend</h1>

        <p className="text-lg text-zinc-700">
          Professional residential gutter cleaning in Bend, Oregon. Hand-cleaned
          debris removal, downspout flushing, and a clean job site when we’re
          done.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+15038901595"
            className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium"
          >
            Call / Text (503) 890-1595
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium"
          >
            Request a Quote
          </Link>
        </div>

        <p className="text-sm text-zinc-600">
          Fast replies • Clear estimates • No mess left behind
        </p>
      </section>

      {/* Services summary */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <h2 className="font-semibold mb-2">Debris Removal</h2>
          <p className="text-sm text-zinc-700">
            Leaves, pine needles, and buildup removed by hand and hauled away.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <h2 className="font-semibold mb-2">Downspout Flushing</h2>
          <p className="text-sm text-zinc-700">
            Restore proper flow and reduce overflow issues.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <h2 className="font-semibold mb-2">Clean Finish</h2>
          <p className="text-sm text-zinc-700">
            Work areas blown off and left clean before we go.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg border p-6 space-y-2">
        <h2 className="text-xl font-semibold">Get a free estimate</h2>
        <p className="text-zinc-700">
          Text your address and whether your home is 1 or 2 stories, or use the
          contact form.
        </p>
        <Link href="/contact" className="underline">
          Go to Contact →
        </Link>
      </section>
    </div>
  );
}
