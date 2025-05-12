import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

type FilterBtnProps = {
  isActive: boolean
  btnText: string
  onClick: () => void
}

const FilterBtn = ({ isActive, btnText, onClick }: FilterBtnProps) => {
  return (
    <Button
      className={cn(
        'transition-colors',
        isActive
          ? 'bg-primary-red-600 dark:bg-primary-red-400 text-neutral-0 border-0 dark:text-neutral-900'
          : ''
      )}
      onClick={onClick}
    >
      {btnText}
    </Button>
  )
}

export default FilterBtn
