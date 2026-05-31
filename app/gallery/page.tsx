import Image from "next/image";
import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Gallery() {
  const { data: galleryItems } = await sanityFetch({
    query: `*[_type == "galleryItem"] | order(order asc) {
      _id,
      title,
      description,
      image,
      order
    }`,
  });
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {galleryItems.map((item: any) => (
            <article
              key={item._id}
              className="flex flex-col items-start justify-between rounded-2xl border border-zinc-200 overflow-hidden dark:border-zinc-800"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={urlFor(item.image).width(800).height(600).url()}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
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
