export default function Resume() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Resume
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            My professional experience and qualifications.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Job Title
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Company Name • 2020 - Present
                </p>
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                  Description of responsibilities and achievements in this role.
                </p>
              </div>
              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Previous Job Title
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Previous Company • 2018 - 2020
                </p>
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                  Description of responsibilities and achievements in this role.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Education
            </h2>
            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Degree Name
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                University Name • Graduated 2018
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
