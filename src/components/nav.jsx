import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
function Nav() {
  return (
    <nav className="navbar fixed flex justify-between   z-10 w-full  px-12 border-b border-b-zinc-500 s">
      <div className=" py-4  flex justify-between items-center w-full">
        <div>
          <Menu color="white" size={32} />
        </div>
        <div className="logo-center flex items-center  ">
          <img src={logo} alt="logo" className="h-16 " />
        </div>
        <div className="navbar-right flex items-center w-fit  ">
          <p className="text-lg">Watch Now</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
