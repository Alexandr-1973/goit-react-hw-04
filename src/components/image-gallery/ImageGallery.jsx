import css from "./ImageGallery.module.css"

const ImageGallery = ({ items }) => {
  
  console.log(items);
  return (
    <ul className={css["fotos-gallery"]}>

      {/* Набір елементів списку із зображеннями */}

      {items.map((item) => {
        
        return (
          <li key={item.id}> 
        <div>
          <img src={item.urls.small} alt={item.alt_description} className={css.foto}/>
        </div>
      </li>
)

      })}
      

    </ul>
  );
};

export default ImageGallery;
