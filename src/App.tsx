import CardGrid from './components/CardGrid'
import FilterTabs from './components/FilterTabs'
import Header from './components/Header'
import { ThemeProvider } from './components/theme/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <div className="mx-auto max-w-7xl px-4 py-5">
        <Header />
        <main className="space-y-10 lg:py-12">
          <FilterTabs />
          <CardGrid />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
