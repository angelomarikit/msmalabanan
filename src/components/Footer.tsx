import { FOOTER_LINKS, SITE } from '../lib/constants'
import { services } from '../data/services'

export function Footer() {
  return (
    <footer className="bg-[#071527] pb-24 pt-14 text-slate-200 lg:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4 md:gap-10">
        <div className="md:col-span-1">
          <img
            src={SITE.logoMark}
            alt=""
            width={220}
            height={265}
            loading="lazy"
            decoding="async"
            className="mb-3 h-12 w-auto"
          />
          <p className="text-base font-extrabold text-white sm:text-lg">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-pretty">
            Professional septic tank siphoning, declogging, drainage, plumbing, grease trap, STP cleaning, and septic
            tank construction services.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-amber-300">Contact</p>
          <a className="mt-3 block font-bold text-white hover:underline" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
          <a className="mt-2 block break-all text-sm hover:underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-amber-300">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a className="hover:text-white hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-wider text-amber-300">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <a className="hover:text-white hover:underline" href="#services">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-sm text-slate-400 sm:px-6">
        © 2026 {SITE.name}. All Rights Reserved.
      </p>
    </footer>
  )
}
