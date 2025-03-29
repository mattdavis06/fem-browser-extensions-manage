import Moon from "../../assets/images/icon-moon.svg?react";
// import Sun from '../../assets/images/icon-sun.svg?react'

const ToggleBtn = () => {
  return (
    <div className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-neutral-100 transition-colors hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-100">
      <Moon className="group-hover:text-neutral-0 dark:text-neutral-0 text-neutral-900 transition-colors dark:group-hover:text-neutral-900" />
    </div>
  );
};

export default ToggleBtn;
