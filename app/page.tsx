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
          {/* Call Michael (Owner) */}
          <a
           href="tel:+15412246928"
           className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium bg-[var(--accent)] text-white"
          >
            Call / Text Michael (541) 224 6928
          </a>

          {/* Request Quote */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border px-5 py-3 font-medium"
          >
           Request a Quote
          </Link>
        </div>
        <p className="text-sm text-zinc-600 text-center sm:text-left">
        Or email:{" "}
        <a
          href="mailto:cleanmyguttersbend@gmail.com"
          className="underline hover:text-[var(--accent)]"
        >
           cleanmyguttersbend@gmail.com
          </a>
        </p>
        <p className="text-sm text-zinc-600">
  Fully insured • Fast replies • Clear estimates • No mess left behind
</p>
        <p className="text-sm text-zinc-600 text-center sm:text-left">
          Locally owned and operated in Bend, Oregon
        </p>
      </section>

      {/* Services summary */}
<section className="grid gap-4 md:grid-cols-3">
  <section className="rounded-md border border-zinc-300 bg-white p-4 shadow-sm">
    <h2 className="font-semibold mb-2 text-zinc-900">
      Debris Removal
    </h2>
    <p className="text-sm text-zinc-800">
      Leaves, pine needles, and buildup removed by hand and hauled away.
    </p>
  </section>

  <section className="rounded-md border border-zinc-300 bg-white p-4 shadow-sm">
    <h2 className="font-semibold mb-2 text-zinc-900">
      Downspout Flushing
    </h2>
    <p className="text-sm text-zinc-800">
      Restore proper flow and reduce overflow issues.
    </p>
  </section>

  <section className="rounded-md border border-zinc-300 bg-white p-4 shadow-sm">
    <h2 className="font-semibold mb-2 text-zinc-900">
      Clean Finish
    </h2>
    <p className="text-sm text-zinc-800">
      Work areas blown off and left clean before we go.
    </p>
  </section>
</section>

      {/* CTA */}
      <section className="rounded-lg border p-6 space-y-2">
        <h2 className="text-xl font-semibold">
          Get a free estimate
        </h2>   
        <p className="text-zinc-800">
         Call or text Michael directly for a quick estimate or questions. We’ll follow up promptly.
        </p>
        <Link href="/contact" className="underline">
          Go to Contact →
        </Link>
      </section>

      {/* FAQ */}
<section className="rounded-lg border p-6 space-y-4">
  <h2 className="text-xl font-semibold">FAQ</h2>

  <div className="space-y-3 text-zinc-700">
    <div>
      <h3 className="font-medium text-zinc-900">How much does gutter cleaning cost?</h3>
      <p className="text-sm">
        Pricing depends on the home size, gutter height, and how much buildup is present. Most homes fall
        between $150–$350. Send your address for a quick estimate.
      </p>
    </div>

    <div>
      <h3 className="font-medium text-zinc-900">Do you do 2-story homes?</h3>
      <p className="text-sm">
        Yes. Let us know if your home is 1 or 2 stories (or if access is tight) and we’ll quote accurately.
      </p>
    </div>

    <div>
      <h3 className="font-medium text-zinc-900">Do you flush downspouts?</h3>
      <p className="text-sm">
        Yes. We can flush downspouts to confirm proper flow and reduce overflow issues.
      </p>
    </div>

    <div>
      <h3 className="font-medium text-zinc-900">Do you clean up afterward?</h3>
      <p className="text-sm">
        Always. Debris is bagged/removed and the work area is blown off so it looks clean when we’re done.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}
