import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'navy'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

const styles: Record<Variant, string> = {
  primary:
    'bg-amber-400 text-navy hover:bg-amber-300 shadow-[0_8px_20px_rgba(245,158,11,0.28)]',
  secondary:
    'bg-white text-navy border-2 border-navy hover:bg-slate-50',
  navy: 'bg-navy text-white hover:bg-navy-soft',
  ghost: 'bg-white/10 text-white border border-white/25 hover:bg-white/20',
}

export function Button({ variant = 'primary', className = '', children, type = 'button', ...props }: Props) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-[13px] font-extrabold uppercase leading-tight tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:text-sm ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
