export default function Writing() {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      date: "March 20, 2024",
      excerpt: "This is an excerpt from my first blog post. It gives a preview of what the post is about.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "March 15, 2024",
      excerpt: "This is an excerpt from my second blog post. It provides a brief overview of the content.",
    },
    {
      id: 3,
      title: "Third Blog Post",
      date: "March 10, 2024",
      excerpt: "This is an excerpt from my third blog post. A short description of the article.",
    },
  ];

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Writing
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Thoughts, ideas, and stories I've written.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <time className="text-sm text-zinc-600 dark:text-zinc-400">
                  {post.date}
                </time>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                {post.title}
              </h2>
              <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                {post.excerpt}
              </p>
              <button className="mt-6 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Read more <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
