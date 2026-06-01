import Image from "next/image";
import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const { data: siteSettings } = await sanityFetch({
    query: `*[_type == "siteSettings"][0] {
      title,
      profileName,
      bio,
      headshot
    }`,
  });

  return {
    title: siteSettings.title,
    description: siteSettings.bio,
    keywords: ['actor', 'performer', 'theatre', 'film', 'portfolio', siteSettings.profileName],
    authors: [{ name: siteSettings.profileName }],
    openGraph: {
      title: siteSettings.title,
      description: siteSettings.bio,
      type: 'website',
      images: [
        {
          url: urlFor(siteSettings.headshot).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: siteSettings.profileName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteSettings.title,
      description: siteSettings.bio,
      images: [urlFor(siteSettings.headshot).width(1200).height(630).url()],
    },
  };
}

export default async function Home() {
  const { data: siteSettings } = await sanityFetch({
    query: `*[_type == "siteSettings"][0] {
      profileName,
      headshot,
      bio,
      title
    }`,
  });
  return (
    <main className="flex-1 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={urlFor(siteSettings.headshot).width(1920).height(1080).url()}
          alt={siteSettings.profileName}
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/30" />
      </div>
      
      <section className="relative z-10 py-24 sm:py-32 min-h-[calc(100vh-73px)] flex items-center">
        <div className="text-left ml-20">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {siteSettings.profileName}
          </h1>
          <p className="mt-6 text-2xl leading-8 text-zinc-200">
            {siteSettings.bio}
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="/resume"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100"
            >
              View Resume
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-white hover:text-zinc-200"
            >
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
