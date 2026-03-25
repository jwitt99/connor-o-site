export default function Gallery() {
  const galleryItems = [
    { id: 1, title: "Project 1", description: "Description of project 1" },
    { id: 2, title: "Project 2", description: "Description of project 2" },
    { id: 3, title: "Project 3", description: "Description of project 3" },
    { id: 4, title: "Project 4", description: "Description of project 4" },
    { id: 5, title: "Project 5", description: "Description of project 5" },
    { id: 6, title: "Project 6", description: "Description of project 6" },
  ];

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A collection of my work and projects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-start justify-between rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
            >
              <div className="flex h-48 w-full items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900">
                <span className="text-4xl font-bold text-zinc-400 dark:text-zinc-600">
                  {item.id}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
