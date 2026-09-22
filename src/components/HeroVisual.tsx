export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-amber-300/60 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-sky-400/40 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-2 shadow-2xl sm:p-3">
        <picture>
          <source srcSet="/images/hero-service.webp" type="image/webp" />
          <img
            src="/images/hero-service.jpg"
            alt="MSMalabanan technician with a vacuum truck performing septic tank siphoning into an open manhole"
            width={900}
            height={1132}
            fetchPriority="high"
            decoding="async"
            className="h-56 w-full rounded-2xl object-cover object-[50%_22%] sm:h-80 lg:h-auto lg:object-center"
          />
        </picture>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2.5 backdrop-blur">
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">Focus</p>
          <p className="text-sm font-bold text-white">Sipsip pozo negro</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2.5 backdrop-blur">
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">Response</p>
          <p className="text-sm font-bold text-white">Request a quote</p>
        </div>
      </div>
    </div>
  )
}
