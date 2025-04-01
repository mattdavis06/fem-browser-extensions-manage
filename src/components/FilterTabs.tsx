import { useState } from 'react'
import FilterBtn from './shared/FilterBtn'

const FilterTabs = () => {
  const [activeButton, setActiveButton] = useState<string>('All')

  return (
    <section className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
      <h1 className="dark:text-neutral-0 flex-1 text-4xl font-bold text-neutral-900 md:text-3xl">
        Extensions List
      </h1>

      <div className="flex items-center space-x-4">
        {['All', 'Active', 'Inactive'].map((text) => (
          <FilterBtn
            key={text}
            btnText={text}
            isActive={activeButton === text}
            onClick={() => setActiveButton(text)}
          />
        ))}
      </div>
    </section>
  )
}

export default FilterTabs
