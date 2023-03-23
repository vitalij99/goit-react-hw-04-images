import PropTypes from 'prop-types';
import style from './Button.module.css';

export function ButtonLodeMore({ getSearchLoad, children }) {
    return (
        <button
            className={style.LoadeMore}
            onClick={() => {
                getSearchLoad();
            }}
        >
            {children}
        </button>
    );
}

ButtonLodeMore.propTypes = {
    getSearchLoad: PropTypes.func,
};
