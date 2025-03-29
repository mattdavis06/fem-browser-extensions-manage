type FilterBtnProps = {
  btnText: string;
};

const FilterBtn = ({ btnText }: FilterBtnProps) => {
  return (
    <button className="font-base cursor-pointer rounded-3xl border border-neutral-100 bg-white px-6 py-2 text-lg text-neutral-900 shadow-sm transition hover:translate-y-[0.5px] hover:opacity-75">
      {btnText}
    </button>
  );
};

export default FilterBtn;
