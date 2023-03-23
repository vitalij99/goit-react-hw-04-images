import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export function ImageGalleryItem({
    webformatURL,
    largeImageURL,
    onImageClick,
}) {
    return (
        <li className={style.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt=""
                className={style.ImageGalleryItemImage}
                onClick={() => onImageClick(largeImageURL)}
            />
        </li>
    );
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    onImageClick: PropTypes.func,
};
