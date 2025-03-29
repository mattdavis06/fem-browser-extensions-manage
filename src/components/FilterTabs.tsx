import FilterBtn from "./shared/FilterBtn";

const FilterTabs = () => {
  return (
    <section className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
      <h1 className="flex-1 text-4xl font-bold text-neutral-900 md:text-3xl">
        Extensions List
      </h1>
      <div className="flex items-center space-x-4">
        <FilterBtn btnText="All" />
        <FilterBtn btnText="Active" />
        <FilterBtn btnText="Inactive" />
      </div>
    </section>
  );
};

export default FilterTabs;
