import ThumbnailImages from "./ThumbnailImages";

export default function ThumbnailImagesContainer() {
  return (
    <div className="flex space-x-6" >
        <ThumbnailImages image="../../frontend mentor design/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg"  />
        <ThumbnailImages image="../../frontend mentor design/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg"  />
        <ThumbnailImages image="../../frontend mentor design/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg"  />
        <ThumbnailImages image="../../frontend mentor design/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg"  />
    </div>
  )
}
