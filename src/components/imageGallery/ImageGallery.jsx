import ImageCard from "../imageCard/ImageCard";
import s from "../imageGallery/ImageGallery.module.css"

const ImageGallery = ({images, onImageClick}) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
          <li className={s.imageGalleryItem} key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        ))}
    </ul>
  );
};
export default ImageGallery;