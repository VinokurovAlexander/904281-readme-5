import logoUrl from '../../../markup/img/logo.svg';
import { Posts } from './posts';

export const Popular = () => {
    return (
        <>
            <header className="header">
                <div className="header__wrapper container">
                    <div className="header__logo-wrapper">
                        <a className="header__logo-link" href="main.html">
                            <img
                                className="header__logo"
                                src={logoUrl}
                                alt="Логотип readme"
                                width="128"
                                height="24"
                            />
                        </a>
                        <p className="header__topic">micro blogging</p>
                    </div>
                    <form
                        className="header__search-form form"
                        action="#"
                        method="get"
                    >
                        <div className="header__search">
                            <label className="visually-hidden">Поиск</label>
                            <input
                                className="header__search-input form__input"
                                type="search"
                            />
                            <button
                                className="header__search-button button"
                                type="submit"
                            >
                                {/*<svg className="header__search-icon" width="18" height="18">*/}
                                {/*    <use xlink:href="#icon-search"></use>*/}
                                {/*</svg>*/}
                                <span className="visually-hidden">
                                    Начать поиск
                                </span>
                            </button>
                        </div>
                    </form>
                    <div className="header__nav-wrapper">
                        <nav className="header__nav">
                            <ul className="header__my-nav">
                                <li className="header__my-page header__my-page--popular">
                                    <a
                                        className="header__page-link header__page-link--active"
                                        title="Популярный контент"
                                    >
                                        <span className="visually-hidden">
                                            Популярный контент
                                        </span>
                                    </a>
                                </li>
                                <li className="header__my-page header__my-page--feed">
                                    <a
                                        className="header__page-link"
                                        href="feed.html"
                                        title="Моя лента"
                                    >
                                        <span className="visually-hidden">
                                            Моя лента
                                        </span>
                                    </a>
                                </li>
                                <li className="header__my-page header__my-page--messages">
                                    <a
                                        className="header__page-link"
                                        href="messages.html"
                                        title="Личные сообщения"
                                    >
                                        <span className="visually-hidden">
                                            Личные сообщения
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="header__user-nav">
                                <li className="header__profile">
                                    <a
                                        className="header__profile-link"
                                        href="#"
                                    >
                                        <div className="header__avatar-wrapper">
                                            <img
                                                className="header__profile-avatar"
                                                src="img/userpic-medium.jpg"
                                                alt="Аватар профиля"
                                            />
                                        </div>
                                        <div className="header__profile-name">
                                            <span>Антон Глуханько</span>
                                            {/*<svg className="header__link-arrow" width="10" height="6">*/}
                                            {/*    <use xlink:href="#icon-arrow-right-ad"></use>*/}
                                            {/*</svg>*/}
                                        </div>
                                    </a>
                                    <div className="header__tooltip-wrapper">
                                        <div className="header__profile-tooltip">
                                            <ul className="header__profile-nav">
                                                <li className="header__profile-nav-item">
                                                    <a
                                                        className="header__profile-nav-link"
                                                        href="#"
                                                    >
                                                        <span className="header__profile-nav-text">
                                                            Мой профиль
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="header__profile-nav-item">
                                                    <a
                                                        className="header__profile-nav-link"
                                                        href="#"
                                                    >
                                                        <span className="header__profile-nav-text">
                                                            Сообщения
                                                            <i className="header__profile-indicator">
                                                                2
                                                            </i>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="header__profile-nav-item">
                                                    <a
                                                        className="header__profile-nav-link"
                                                        href="#"
                                                    >
                                                        <span className="header__profile-nav-text">
                                                            Выход
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        className="header__post-button button button--transparent"
                                        href="adding-post.html"
                                    >
                                        Пост
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

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
                    <div className="popular__page-links">
                        <a
                            className="popular__page-link popular__page-link--prev button button--gray"
                            href="#"
                        >
                            Предыдущая страница
                        </a>
                        <a
                            className="popular__page-link popular__page-link--next button button--gray"
                            href="#"
                        >
                            Следующая страница
                        </a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__container container">
                        <div className="footer__site-info">
                            <div className="footer__site-nav">
                                <ul className="footer__info-pages">
                                    <li className="footer__info-page">
                                        <a
                                            className="footer__page-link"
                                            href="#"
                                        >
                                            О проекте
                                        </a>
                                    </li>
                                    <li className="footer__info-page">
                                        <a
                                            className="footer__page-link"
                                            href="#"
                                        >
                                            Реклама
                                        </a>
                                    </li>
                                    <li className="footer__info-page">
                                        <a
                                            className="footer__page-link"
                                            href="#"
                                        >
                                            О разработчиках
                                        </a>
                                    </li>
                                    <li className="footer__info-page">
                                        <a
                                            className="footer__page-link"
                                            href="#"
                                        >
                                            Работа в Readme
                                        </a>
                                    </li>
                                    <li className="footer__info-page">
                                        <a
                                            className="footer__page-link"
                                            href="#"
                                        >
                                            Соглашение пользователя
                                        </a>
                                    </li>
                                    <li className="footer__info-page">
                                        <a
                                            className="footer__page-link"
                                            href="#"
                                        >
                                            Политика конфиденциальности
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className="footer__license">
                                При использовании любых материалов с сайта
                                обязательно указание Readme в качестве
                                источника. Все авторские и исключительные права
                                в рамках проекта защищены в соответствии с
                                положениями 4 части Гражданского Кодекса
                                Российской Федерации.
                            </p>
                        </div>
                        <div className="footer__my-info">
                            <ul className="footer__my-pages">
                                <li className="footer__my-page footer__my-page--feed">
                                    <a
                                        className="footer__page-link"
                                        href="feed.html"
                                    >
                                        Моя лента
                                    </a>
                                </li>
                                <li className="footer__my-page footer__my-page--popular">
                                    <a
                                        className="footer__page-link"
                                        href="popular.html"
                                    >
                                        Популярный контент
                                    </a>
                                </li>
                                <li className="footer__my-page footer__my-page--messages">
                                    <a
                                        className="footer__page-link"
                                        href="messages.html"
                                    >
                                        Личные сообщения
                                    </a>
                                </li>
                            </ul>
                            <div className="footer__copyright">
                                <a
                                    className="footer__copyright-link"
                                    href="https://htmlacademy.ru"
                                >
                                    <span>Разработано HTML Academy</span>
                                    {/*<svg className="footer__copyright-logo" width="27" height="34">*/}
                                    {/*    <use xlink:href="#icon-htmlacademy"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
