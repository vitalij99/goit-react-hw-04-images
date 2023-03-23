import { fetchImages } from 'api/api';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useEffect, useState } from 'react';

export const App = () => {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [modal, setModal] = useState({
        openModal: false,
        largeImageURL: '',
    });
    useEffect(() => {
        if (page === 0) return;

        setIsLoading(true);
        loadImages();

        async function loadImages() {
            try {
                const mass = await fetchImages(search, page);
                const maxPage = mass.totalHits / 12;
                setMaxPages(maxPage);

                setImages(prevState => [...prevState, ...mass.hits]);

                if (mass.hits.length === 0)
                    Report.info('Images not found', 'Something went wrong');
            } catch (error) {
                Report.warning('Error', error.message, 'Okay');
            } finally {
                setIsLoading(false);
            }
        }
    }, [page, search]);

    const getSearchToState = search => {
        setPage(1);
        setImages([]);
        setSearch(search);
    };
    const getSearchLoad = async () => {
        setPage(prev => prev + 1);
    };

    const onImageClick = largeImageURL => {
        setModal({ largeImageURL, openModal: true });
    };
    const closeModal = e => {
        setModal({ largeImageURL: '', openModal: false });
    };
    return (
        <>
            <SearchBar getSearchToState={getSearchToState}></SearchBar>
            {isLoading && <Loader />}
            {images.length > 0 && (
                <ImageGallery
                    images={images}
                    loadeMore={maxPage >= page}
                    getSearchLoad={getSearchLoad}
                    onImageClick={onImageClick}
                ></ImageGallery>
            )}
            {modal.openModal && (
                <Modal
                    largeImageURL={modal.largeImageURL}
                    closeModal={closeModal}
                ></Modal>
            )}
        </>
    );
};
