import Logo from "../../frontend mentor design/ecommerce-product-page-main/images/logo.svg";
import Avatar from "../../frontend mentor design/ecommerce-product-page-main/images/image-avatar.png";
import cartIcon from "../../frontend mentor design/ecommerce-product-page-main/images/icon-cart.svg";
import NavBar from "./NavBar";

export default function Header() {
  const NavBarTitles = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div className="py-5 border-b ">
      <div className="flex items-center justify-between ">
        {/* logo */}
        <div>
          <img src={Logo} />
        </div>
        {/* navigation's */}
        <div className="pl-20 flex flex-1 items-center space-x-10 ">
          {NavBarTitles.map((items, index) => (
            <NavBar key={index} title={items} />
          ))}
        </div>
        <div className="space-x-12 items-center flex  ">
          <button>
            <img src={cartIcon} />
          </button>
          <div>
            <img className="w-14 h-14" src={Avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
