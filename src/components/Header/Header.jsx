import Logo from "../Logo";
// import { NavLink } from "react-router-dom";

function Header() {
   let linkTab = [
      { name: "Home", direction: "/", active: true },
      { name: "Product", direction: "/product", active: true },
      { name: "About", direction: "/about", active: true },
      { name: "Contact", direction: "/contact", active: true },
   ];
   return (
      <header className="bg-white h-16 w-full shadow ">
         <nav className="lg:flex ">
            <div className="flex items-center w-full justify-around">
               <div className="mr-4">
                  <Logo />
               </div>
               <ul className="flex gap-x-4 w-fit ">
                  {linkTab.map((item) =>
                     item.active ? (
                        <li
                           key={item.name}
                           className="w-fit font-Inter font-light text-lg"
                        >
                           {item.name}
                        </li>
                     ) : null
                  )}
               </ul>
            </div>
         </nav>
      </header>
   );
}

export default Header;
