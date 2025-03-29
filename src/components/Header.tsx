import Logo from "../assets/images/logo.svg";
import ToggleBtn from "./shared/ToggleBtn";

const Header = () => {
  return (
    <header className="bg-neutral-0 mb-10 flex h-16 w-full items-center justify-between rounded-xl border border-neutral-100 p-2 shadow-sm">
      <div>
        <img src={Logo} alt="logo" className="aspect-video" />
      </div>
      <div>
        <ToggleBtn />
      </div>
    </header>
  );
};

export default Header;
