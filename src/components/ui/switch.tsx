import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer dark:data-[state=checked]:bg-primary-red-400 data-[state=checked]:bg-primary-red-600 focus-visible:border-ring focus-visible:ring-primary-red-500 ring- inline-flex h-[1.25rem] w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs ring-offset-2 transition-all outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-neutral-700/25 dark:data-[state=unchecked]:bg-neutral-700',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-neutral-0 pointer-events-none block h-4 w-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-[2px]'
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
