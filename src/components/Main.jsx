import LargeProductImage from "./LargeProductImage";
import image from "../../frontend mentor design/ecommerce-product-page-main/images/image-product-1.jpg";
import ThumbnailImagesContainer from "./ThumbnailImagesContainer";

export default function Main() {
  return (
    <div className="w-full  mx-auto flex items-center justify-around  flex-1 ">
      <div className="w-[370px] flex flex-col gap-y-5">
        <LargeProductImage image={image} />
        <ThumbnailImagesContainer/>
      </div>
      <div className="flex flex-col w-[40%] space-y-5 ">
        <h4 className="text-orange uppercase text-xs font-semibold " >Sneaker Company</h4>
        <h1 className="text-4xl font-bold text-verydarkblue " >Fall Limited Edition Sneakers</h1>
        <p className="text-darkgrayishblue ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="space-y-1">
          <div className="space-x-3 flex items-center ">
            <h2 className="text-2xl font-semibold text-verydarkblue">$125.00</h2>
            <span className="text-orange text-sm font-bold  px-2 bg-lightgrayishblue " >50%</span>
          </div>
          <h4 className="text-gray-400 text-sm font-semibold"><s>$250.00</s></h4>
        </div>
        <div className="flex w-full">
          <div className="bg-lightgrayishblue flex items-center ">
            <button className="w-14 h-full flex justify-center items-center ">
              <img className="h-1 w-4 " src="../../frontend mentor design/ecommerce-product-page-main/images/icon-minus.svg" alt="icon" />
            </button>
            <h2 className="text-verydarkblue font-semibold w-14 flex items-center justify-center ">0</h2>
            <button className="w-14 h-full items-center flex justify-center ">
              <img className="w-4" src="../../frontend mentor design/ecommerce-product-page-main/images/icon-plus.svg" alt="icon" />
            </button>
          </div>
          <button className="bg-orange text-white w-full py-3 shadow-2xl rounded-lg flex justify-center items-center space-x-4">
            <img className="h-4" src="../../frontend mentor design/ecommerce-product-page-main/images/icon-cart-white.svg" alt="icon" />
            <h5 className="text-sm font-semibold" >Add to cart</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
