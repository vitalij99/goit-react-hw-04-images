import { useEffect } from 'react';
import PropTypes from 'prop-types';

import style from './Modal.module.css';

import React from 'react';

export const Modal = ({ closeModal, largeImageURL }) => {
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    const handleCloseModal = event => {
        if (event.currentTarget === event.target) {
            closeModal();
        }
    };

    return (
        <div className={style.Overlay} onClick={handleCloseModal}>
            <div className={style.Modal}>
                <img className={style.ModalImage} src={largeImageURL} alt="" />
            </div>
        </div>
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func,
    largeImageURL: PropTypes.string,
};
