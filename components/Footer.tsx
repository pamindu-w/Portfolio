import DotGlobe from "./DotGlobe";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="label-tag mb-4">Get in touch</p>
          <h2 className="max-w-[24ch] font-display text-4xl font-bold text-white text-balance md:text-5xl">
            Have a system worth building? I&apos;d like to hear about it.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal variant="fadeLeft" className="order-2 flex flex-col items-center gap-8 md:order-1">
            <div className="glass !rounded-3xl p-8 w-full flex flex-col items-center shadow-[0_0_40px_rgba(79,214,196,0.04)]">
              <DotGlobe />
              <div className="mt-8 flex flex-col gap-1 text-center text-sm text-mist">
                <span className="font-medium text-white/80">0764226252</span>
                <span>Bandaragama, Sri Lanka</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeRight" className="order-1 md:order-2">
            <ContactForm />
          </Reveal>
        </div>

        <div className="glass !rounded-2xl mt-20 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:pamindupiyumaka@gmail.com"
            className="text-sm font-medium text-white/80 transition-colors hover:text-signal"
          >
            pamindupiyumaka@gmail.com
          </a>
          <p className="label-tag">© {new Date().getFullYear()} Pamindu Welikada</p>
        </div>
      </div>
    </footer>
  );
}
