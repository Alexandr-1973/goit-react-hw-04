import css from "./ImageCard.module.css";

const ImageCard = ({ item, setFoto }) => {
  const handleClick = () => {
    setFoto(item.urls.regular);
  };

  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={css.foto}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
