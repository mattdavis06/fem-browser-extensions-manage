import { useExtensionStore } from '@/store/useExtensionStore'
import RemoveBtn from './shared/RemoveBtn'
import ToggleSwitch from './shared/ToggleSwitch'
import { Card, CardFooter, CardHeader } from './ui/card'

type ExtensionCardProps = {
  data: {
    logo: string
    name: string
    description: string
    isActive: boolean
  }
}

const ExtensionCard = ({ data }: ExtensionCardProps) => {
  const toggleActive = useExtensionStore((state) => state.toggleActive)
  const removeExtension = useExtensionStore((state) => state.removeExtension)

  return (
    <Card>
      <CardHeader>
        <div>
          <img src={data.logo} alt={data.name} className="aspect-square" />
        </div>
        <div className="space-y-1.5">
          <h2 className="dark:text-neutral-0 text-2xl font-bold text-neutral-900">
            {data.name}
          </h2>
          <p className="text-lg text-pretty text-neutral-400">
            {data.description}
          </p>
        </div>
      </CardHeader>

      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <RemoveBtn onClick={() => removeExtension(data.name)} />
          <ToggleSwitch
            toggleActive={() => toggleActive(data.name)}
            isActive={data.isActive}
          />
        </div>
      </CardFooter>
    </Card>
  )
}

export default ExtensionCard
