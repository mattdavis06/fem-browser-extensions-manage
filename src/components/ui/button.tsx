import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-primary-red-500 focus-visible:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-3xl transition cursor-pointer focus-visible:ring-offset-2 focus-visible:border-neutral-100',
  {
    variants: {
      variant: {
        default:
          'dark:text-neutral-0 border border-neutral-100 bg-white  text-neutral-900 hover:translate-y-[0.5px] hover:opacity-75 dark:border-neutral-200 dark:bg-neutral-700 shadow-sm',
        destructive:
          'dark:text-neutral-0 border border-neutral-100 bg-white  text-neutral-900 hover:translate-y-[0.5px] dark:border-neutral-200 dark:bg-neutral-700 hover:bg-primary-red-500 hover:text-neutral-0 hover:border-transparent'
      },
      size: {
        default: 'h-12 px-6 py-2 text-lg',
        sm: 'h-8 px-4 py-2 text-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
