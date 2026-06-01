import { sanityFetch } from "@/sanity/live";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
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
    description: 'Professional resume and experience in theatre, film, and performance.',
    keywords: ['resume', 'CV', 'experience', 'credits', 'acting', 'theatre', 'film'],
    openGraph: {
      title: siteSettings.title,
      description: 'Professional resume and experience in theatre, film, and performance.',
      type: 'website',
    },
  };
}

const builder = imageUrlBuilder(client);

function getFileUrl(ref: any) {
  const [_file, id, extension] = ref.asset._ref.split('-');
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`;
}

export default async function Resume() {
  const { data: resume } = await sanityFetch({
    query: `*[_type == "resume" && isActive == true] | order(uploadDate desc)[0] {
      resumeFile {
        asset -> {
          _ref,
          url
        }
      },
      version
    }`,
  });

  const resumeUrl = resume?.resumeFile?.asset?.url || getFileUrl(resume?.resumeFile);
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="flex justify-center">
          <div className="relative w-[1000px] max-w-3xl h-[1000px]">
            <object data={resumeUrl + "#navpanes=0"} type="application/pdf" width="100%" height="100%">
              <p>Unable to display PDF. <a href={resumeUrl} download>Download the resume</a></p>
            </object>
          </div>
        </div>
      </section>
    </main>
  );
}
