import CardGrid from "./components/CardGrid";
import FilterTabs from "./components/FilterTabs";
import Header from "./components/Header";

function App() {
  return (
    <div className="from-light-grad-start to-light-grad-end dark:from-dark-grad-start dark:to-dark-grad-end h-dvh bg-linear-to-b">
      <div className="mx-auto max-w-[1440px] px-4 py-5">
        <Header />
        <main className="space-y-10">
          <FilterTabs />
          <CardGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
