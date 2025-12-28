export default function ServiceAreasPage() {
  const areas = [
    "Bend",
    "Redmond",
    "Sisters",
    "Tumalo",
    "Sunriver",
    "La Pine",
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Service Areas</h1>
        <p className="text-zinc-700">
          Clean My Gutters Bend serves Bend and nearby Central Oregon
          communities. Not sure if you’re in range? Call or text and we’ll tell
          you quickly.
        </p>
      </header>

      <section className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold mb-3">Areas we serve</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-700">
          {areas.map((a) => (
            <li key={a} className="border rounded-md px-3 py-2">
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-zinc-700">
        <p className="text-sm">
          Tip: If you text for an estimate, include your address and whether
          your home is 1 or 2 stories.
        </p>
      </section>
    </div>
  );
}
