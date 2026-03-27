import { agentData, contactInfo } from "../data/cms";

export default function Contact() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Get in touch with me at any of the following
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Personal Contact
            </h2>
            <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                  {contactInfo.instagram}
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Agent Information
            </h2>
            <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">{agentData.name}</p>
              <p>{agentData.building}</p>
              <p>{agentData.address}</p>
              <p>{agentData.city}, {agentData.state} {agentData.zip} {agentData.country}</p>
              <p className="mt-3">Phone: {agentData.phone}</p>
              <p>Fax: {agentData.fax}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
