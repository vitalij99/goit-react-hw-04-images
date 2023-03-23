import { ButtonLodeMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export function ImageGallery({
    images,
    onImageClick,
    getSearchLoad,
    loadeMore,
}) {
    return (
        <>
            <ul className={style.ImageGallery}>
                {images.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        onImageClick={onImageClick}
                    />
                ))}
            </ul>
            {loadeMore && (
                <ButtonLodeMore getSearchLoad={getSearchLoad}>
                    Loade More
                </ButtonLodeMore>
            )}
        </>
    );
}
ImageGallery.propTypes = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
    getSearchLoad: PropTypes.func,
    loadMore: PropTypes.bool,
};
