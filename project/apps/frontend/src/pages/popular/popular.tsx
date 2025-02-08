import { Posts } from './posts';
import { Layout } from '../../../components';

export const Popular = () => {
    return (
        <Layout>
            <section className="page__main page__main--popular">
                <div className="container">
                    <h1 className="page__title page__title--popular">
                        Популярное
                    </h1>
                </div>
                <div className="popular container">
                    {/*<div className="popular__filters-wrapper">*/}
                    {/*    <div className="popular__sorting sorting">*/}
                    {/*        <b className="popular__sorting-caption sorting__caption">*/}
                    {/*            Сортировка:*/}
                    {/*        </b>*/}
                    {/*        <ul className="popular__sorting-list sorting__list">*/}
                    {/*            <li className="sorting__item sorting__item--popular">*/}
                    {/*                <a*/}
                    {/*                    className="sorting__link sorting__link--active"*/}
                    {/*                    href="#"*/}
                    {/*                >*/}
                    {/*                    <span>Популярность</span>*/}
                    {/*                    /!*<svg className="sorting__icon" width="10" height="12">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-sort"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="sorting__item">*/}
                    {/*                <a className="sorting__link" href="#">*/}
                    {/*                    <span>Лайки</span>*/}
                    {/*                    /!*<svg className="sorting__icon" width="10" height="12">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-sort"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="sorting__item">*/}
                    {/*                <a className="sorting__link" href="#">*/}
                    {/*                    <span>Дата</span>*/}
                    {/*                    /!*<svg className="sorting__icon" width="10" height="12">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-sort"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*    <div className="popular__filters filters">*/}
                    {/*        <b className="popular__filters-caption filters__caption">*/}
                    {/*            Тип контента:*/}
                    {/*        </b>*/}
                    {/*        <ul className="popular__filters-list filters__list">*/}
                    {/*            <li className="popular__filters-item popular__filters-item--all filters__item filters__item--all">*/}
                    {/*                <a*/}
                    {/*                    className="filters__button filters__button--ellipse filters__button--all filters__button--active"*/}
                    {/*                    href="#"*/}
                    {/*                >*/}
                    {/*                    <span>Все</span>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="popular__filters-item filters__item">*/}
                    {/*                <a*/}
                    {/*                    className="filters__button filters__button--photo button"*/}
                    {/*                    href="/"*/}
                    {/*                >*/}
                    {/*                    <span className="visually-hidden">*/}
                    {/*                        Фото*/}
                    {/*                    </span>*/}
                    {/*                    /!*<svg className="filters__icon" width="22" height="18">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-filter-photo"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="popular__filters-item filters__item">*/}
                    {/*                <a*/}
                    {/*                    className="filters__button filters__button--video button"*/}
                    {/*                    href="/"*/}
                    {/*                >*/}
                    {/*                    <span className="visually-hidden">*/}
                    {/*                        Видео*/}
                    {/*                    </span>*/}
                    {/*                    /!*<svg className="filters__icon" width="24" height="16">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-filter-video"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="popular__filters-item filters__item">*/}
                    {/*                <a*/}
                    {/*                    className="filters__button filters__button--text button"*/}
                    {/*                    href="/"*/}
                    {/*                >*/}
                    {/*                    <span className="visually-hidden">*/}
                    {/*                        Текст*/}
                    {/*                    </span>*/}
                    {/*                    /!*<svg className="filters__icon" width="20" height="21">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-filter-text"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="popular__filters-item filters__item">*/}
                    {/*                <a*/}
                    {/*                    className="filters__button filters__button--quote button"*/}
                    {/*                    href="/"*/}
                    {/*                >*/}
                    {/*                    <span className="visually-hidden">*/}
                    {/*                        Цитата*/}
                    {/*                    </span>*/}
                    {/*                    /!*<svg className="filters__icon" width="21" height="20">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-filter-quote"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <li className="popular__filters-item filters__item">*/}
                    {/*                <a*/}
                    {/*                    className="filters__button filters__button--link button"*/}
                    {/*                    href="#"*/}
                    {/*                >*/}
                    {/*                    <span className="visually-hidden">*/}
                    {/*                        Ссылка*/}
                    {/*                    </span>*/}
                    {/*                    /!*<svg className="filters__icon" width="21" height="18">*!/*/}
                    {/*                    /!*    <use xlink:href="#icon-filter-link"></use>*!/*/}
                    {/*                    /!*</svg>*!/*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="popular__posts">
                        <Posts />
                    </div>
                    {/*<div className="popular__page-links">*/}
                    {/*    <a*/}
                    {/*        className="popular__page-link popular__page-link--prev button button--gray"*/}
                    {/*        href="#"*/}
                    {/*    >*/}
                    {/*        Предыдущая страница*/}
                    {/*    </a>*/}
                    {/*    <a*/}
                    {/*        className="popular__page-link popular__page-link--next button button--gray"*/}
                    {/*        href="#"*/}
                    {/*    >*/}
                    {/*        Следующая страница*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </section>
        </Layout>
    );
};
