import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
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
    description: 'Get in touch for bookings, inquiries, and professional opportunities.',
    keywords: ['contact', 'booking', 'agent', 'inquiries', 'representation'],
    openGraph: {
      title: siteSettings.title,
      description: 'Get in touch for bookings, inquiries, and professional opportunities.',
      type: 'website',
    },
  };
}

type ContactInfo = {
  contactEmail?: string;
  contactPhone?: string;
  instagram?: string;
  agentName?: string;
  agentBuilding?: string;
  agentAddress?: string;
  agentCity?: string;
  agentState?: string;
  agentZip?: string;
  agentCountry?: string;
  agentPhone?: string;
  agentFax?: string;
};

const contactInfoQuery = defineQuery(`*[_type == "contactInfo"][0] {
  contactEmail,
  contactPhone,
  instagram,
  agentName,
  agentBuilding,
  agentAddress,
  agentCity,
  agentState,
  agentZip,
  agentCountry,
  agentPhone,
  agentFax
}`);

export default async function Contact() {
  const { data } = await sanityFetch({
    query: contactInfoQuery,
  });

  const contactInfo = data as ContactInfo | null;

  if (!contactInfo) {
    return (
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Contact
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Contact information is not available yet.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Personal Contact
            </h2>
            <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
              {contactInfo.contactEmail && (
                <p>
                  <a href={`mailto:${contactInfo.contactEmail}`} className="hover:text-zinc-900 dark:hover:text-zinc-50">
                    {contactInfo.contactEmail}
                  </a>
                </p>
              )}
              {contactInfo.contactPhone && (
                <p>
                  <a href={`tel:${contactInfo.contactPhone}`} className="hover:text-zinc-900 dark:hover:text-zinc-50">
                    {contactInfo.contactPhone}
                  </a>
                </p>
              )}
              {contactInfo.instagram && (
                <p>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                    {contactInfo.instagram}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Agent Information
            </h2>
            <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
              {contactInfo.agentName && (
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">{contactInfo.agentName}</p>
              )}
              {contactInfo.agentBuilding && <p>{contactInfo.agentBuilding}</p>}
              {contactInfo.agentAddress && <p>{contactInfo.agentAddress}</p>}
              {(contactInfo.agentCity || contactInfo.agentState || contactInfo.agentZip || contactInfo.agentCountry) && (
                <p>
                  {contactInfo.agentCity}{contactInfo.agentCity && contactInfo.agentState ? ', ' : ''}{contactInfo.agentState} {contactInfo.agentZip} {contactInfo.agentCountry}
                </p>
              )}
              {contactInfo.agentPhone && <p className="mt-3">Phone: {contactInfo.agentPhone}</p>}
              {contactInfo.agentFax && <p>Fax: {contactInfo.agentFax}</p>}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
