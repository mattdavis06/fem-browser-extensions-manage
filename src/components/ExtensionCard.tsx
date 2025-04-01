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
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

export default ExtensionCard
