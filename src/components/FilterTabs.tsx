import { useExtensionStore } from '@/store/useExtensionStore'
import FilterBtn from './shared/FilterBtn'

const FilterTabs = () => {
  const filter = useExtensionStore((state) => state.filter)
  const setFilter = useExtensionStore((state) => state.setFilter)

  const extensions = useExtensionStore((state) => state.extensions)

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'Active') return ext.isActive
    if (filter === 'Inactive') return !ext.isActive
    return true // 'All'
  })

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
        <h1 className="dark:text-neutral-0 flex-1 text-4xl font-bold text-neutral-900 md:text-3xl">
          Extensions List
        </h1>

        <div className="flex items-center space-x-4">
          {['All', 'Active', 'Inactive'].map((text) => (
            <FilterBtn
              key={text}
              btnText={text}
              isActive={filter === text}
              onClick={() => setFilter(text as 'All' | 'Active' | 'Inactive')}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 self-center md:mt-2 md:self-end">
        <p className="text-lg text-neutral-400 md:text-base dark:text-neutral-100">
          Showing:
          <span className="font-bold">
            &nbsp;
            {filteredExtensions.length}
            &nbsp;of&nbsp;
            {extensions.length}
          </span>
        </p>
      </div>
    </section>
  )
}

export default FilterTabs
