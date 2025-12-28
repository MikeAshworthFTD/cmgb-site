export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="text-zinc-700">
          Straightforward gutter cleaning focused on protecting your home and
          keeping water flowing where it should.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Gutter Cleaning</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Hand removal of leaves, needles, and debris</li>
          <li>Bag and remove debris from your property</li>
          <li>Cleanup of work area before we leave</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Downspout Flushing</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Flush downspouts to restore proper drainage</li>
          <li>Identify obvious clogs and flow issues</li>
        </ul>
      </section>

      <section className="rounded-lg border p-5 space-y-2">
        <h2 className="text-lg font-semibold">Pricing</h2>
        <p className="text-zinc-700">
          Pricing depends on home height, roofline complexity, access, and how
          long it’s been since the last cleaning. You’ll always get a clear
          estimate before scheduling.
        </p>
      </section>
    </div>
  );
}
