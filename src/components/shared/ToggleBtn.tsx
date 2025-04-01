import Moon from '../../assets/icons/icon-moon.svg?react'
import Sun from '../../assets/icons/icon-sun.svg?react'
import { useTheme } from '../theme/ThemeProvider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

const ToggleBtn = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-neutral-100 transition-colors hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-100"
      >
        <div>
          <Moon className="group-hover:text-neutral-0 dark:text-neutral-0 block text-neutral-900 transition-all dark:hidden dark:group-hover:text-neutral-900" />
          <Sun className="hidden transition-all group-hover:bg-neutral-100 group-hover:text-neutral-900 dark:block" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleBtn
