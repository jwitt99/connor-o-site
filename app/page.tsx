import Image from "next/image";
import { profileData } from "./data/cms";

export default function Home() {
  return (
    <main className="flex-1 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={profileData.headshotUrl}
          alt={profileData.name}
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/30" />
      </div>
      
      <section className="relative z-10 py-24 sm:py-32 min-h-[calc(100vh-73px)] flex items-center">
        <div className="text-left ml-20">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {profileData.name}
          </h1>
          <p className="mt-6 text-2xl leading-8 text-zinc-200">
            {profileData.bio}
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
