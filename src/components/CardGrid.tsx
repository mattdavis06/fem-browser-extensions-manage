import data from '../data/data.json'
import ExtensionCard from './ExtensionCard'

const CardGrid = () => {
  return (
    <section className="grid-row-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, idx) => (
        <ExtensionCard key={idx} data={item} />
      ))}
    </section>
  )
}

export default CardGrid
