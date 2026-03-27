import { profileData } from "../data/cms";

export default function Resume() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="flex justify-center">
          <div className="relative w-[1000px] max-w-3xl h-[1000px]">
            <object data={profileData.resumeUrl + "#navpanes=0"} type="application/pdf" width="100%" height="100%">
              <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
          </div>
        </div>
      </section>
    </main>
  );
}
