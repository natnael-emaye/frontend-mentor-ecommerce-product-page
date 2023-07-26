import Logo from "../../frontend mentor design/ecommerce-product-page-main/images/logo.svg";
import NavBar from "./NavBar";

export default function Header() {
  const NavBarTitles = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div>
      <div className="flex items-center justify-between ">
        {/* logo */}
        <div>
          <img src={Logo} />
        </div>
        {/* navigation's */}
        <div className="flex items-center space-x-4 ">
          {
            NavBarTitles.map((items,index)=><NavBar key={index} title={items} />)
          }
        </div>
        {/* cart icon */}
        <div>
          <h4>icon</h4>
        </div>
        {/* avatar */}
        <div>
          <h4>avatar</h4>
        </div>
      </div>
    </div>
  );
}
