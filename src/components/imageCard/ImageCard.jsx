import s from "../imageCard/ImageCard.module.css";

const ImageCard = ({image, onImageClick}) => {
  return (
      <div className={s.imageCard}>
<img className={s.imageCardItem} src={image.urls.small} alt={image.alt_description} onClick={()=> onImageClick(image.urls.regular)}/>
</div>
);
};

export default ImageCard;