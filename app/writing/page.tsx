import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const { data: siteSettings } = await sanityFetch({
    query: `*[_type == "siteSettings"][0] {
      title
    }`,
  });

  return {
    title: siteSettings.title,
    description: 'Original plays, scripts, and theatrical writing works.',
    keywords: ['writing', 'playwright', 'scripts', 'plays', 'theatre', 'original works'],
    openGraph: {
      title: siteSettings.title,
      description: 'Original plays, scripts, and theatrical writing works.',
      type: 'website',
    },
  };
}

function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default async function Writing() {
  const { data: writings } = await sanityFetch({
    query: `*[_type == "writing"] | order(order asc) {
      _id,
      title,
      writers,
      extraInfo,
      description,
      link {
        linkType,
        url,
        image
      },
      order
    }`,
  });

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="space-y-8">
          {writings.map((writing: any) => (
            <article
              key={writing._id}
              className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
            >
              <h1 className="mt-4 text-4xl font-semibold text-zinc-900 dark:text-zinc-50">
                {writing.title}
              </h1>
               {writing.writers && (
                  <h2 className="mt-2">
                    {writing.writers}
                  </h2>
                )}
                {writing.extraInfo && (
                  <h2 className="mt-2 italic">
                    {writing.extraInfo}
                  </h2>
                )}
              {writing.description && (
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                  {writing.description}
                </p>
              )}
              
              {writing.link && (
                <div className="mt-6">
                  {writing.link.linkType === "url" && writing.link.url && (() => {
                    const videoId = getYouTubeVideoId(writing.link.url);
                    if (videoId) {
                      return (
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={writing.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      );
                    }
                    return (
                      <a
                        href={writing.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400"
                      >
                        Read more <span aria-hidden="true">→</span>
                      </a>
                    );
                  })()}
                  {writing.link.linkType === "image" && writing.link.image && (
                    <img
                      src={urlFor(writing.link.image).width(600).url()}
                      alt={writing.title}
                      className="rounded-lg w-full"
                    />
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
