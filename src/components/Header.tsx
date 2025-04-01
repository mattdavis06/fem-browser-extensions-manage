import Logo from '../assets/icons/logo.svg?react'
import ToggleBtn from './shared/ToggleBtn'

const Header = () => {
  return (
    <header className="bg-neutral-0 mb-10 flex h-16 w-full items-center justify-between rounded-xl border border-neutral-100 p-2 shadow-sm dark:border-transparent dark:bg-neutral-800">
      <div>
        <Logo className="dark:text-neutral-0 text-neutral-900" />
      </div>
      <div>
        <ToggleBtn />
      </div>
    </header>
  )
}

export default Header
