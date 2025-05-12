import { useExtensionStore } from '@/store/useExtensionStore'
import ExtensionCard from './ExtensionCard'

const CardGrid = () => {
  const extensions = useExtensionStore((state) => state.extensions)
  const filter = useExtensionStore((state) => state.filter)

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'Active') return ext.isActive
    if (filter === 'Inactive') return !ext.isActive
    return true // 'All'
  })

  return (
    <section className="grid-row-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredExtensions.map((item) => (
        <ExtensionCard key={item.name} data={item} />
      ))}
    </section>
  )
}

export default CardGrid
