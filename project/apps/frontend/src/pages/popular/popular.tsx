import logoUrl from '../../../markup/img/logo.svg';

export const Popular = () => (
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
                                <a className="header__profile-link" href="#">
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
                <h1 className="page__title page__title--popular">Популярное</h1>
            </div>
            <div className="popular container">
                <div className="popular__filters-wrapper">
                    <div className="popular__sorting sorting">
                        <b className="popular__sorting-caption sorting__caption">
                            Сортировка:
                        </b>
                        <ul className="popular__sorting-list sorting__list">
                            <li className="sorting__item sorting__item--popular">
                                <a
                                    className="sorting__link sorting__link--active"
                                    href="#"
                                >
                                    <span>Популярность</span>
                                    {/*<svg className="sorting__icon" width="10" height="12">*/}
                                    {/*    <use xlink:href="#icon-sort"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="sorting__item">
                                <a className="sorting__link" href="#">
                                    <span>Лайки</span>
                                    {/*<svg className="sorting__icon" width="10" height="12">*/}
                                    {/*    <use xlink:href="#icon-sort"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="sorting__item">
                                <a className="sorting__link" href="#">
                                    <span>Дата</span>
                                    {/*<svg className="sorting__icon" width="10" height="12">*/}
                                    {/*    <use xlink:href="#icon-sort"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="popular__filters filters">
                        <b className="popular__filters-caption filters__caption">
                            Тип контента:
                        </b>
                        <ul className="popular__filters-list filters__list">
                            <li className="popular__filters-item popular__filters-item--all filters__item filters__item--all">
                                <a
                                    className="filters__button filters__button--ellipse filters__button--all filters__button--active"
                                    href="#"
                                >
                                    <span>Все</span>
                                </a>
                            </li>
                            <li className="popular__filters-item filters__item">
                                <a
                                    className="filters__button filters__button--photo button"
                                    href="/"
                                >
                                    <span className="visually-hidden">
                                        Фото
                                    </span>
                                    {/*<svg className="filters__icon" width="22" height="18">*/}
                                    {/*    <use xlink:href="#icon-filter-photo"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="popular__filters-item filters__item">
                                <a
                                    className="filters__button filters__button--video button"
                                    href="/"
                                >
                                    <span className="visually-hidden">
                                        Видео
                                    </span>
                                    {/*<svg className="filters__icon" width="24" height="16">*/}
                                    {/*    <use xlink:href="#icon-filter-video"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="popular__filters-item filters__item">
                                <a
                                    className="filters__button filters__button--text button"
                                    href="/"
                                >
                                    <span className="visually-hidden">
                                        Текст
                                    </span>
                                    {/*<svg className="filters__icon" width="20" height="21">*/}
                                    {/*    <use xlink:href="#icon-filter-text"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="popular__filters-item filters__item">
                                <a
                                    className="filters__button filters__button--quote button"
                                    href="/"
                                >
                                    <span className="visually-hidden">
                                        Цитата
                                    </span>
                                    {/*<svg className="filters__icon" width="21" height="20">*/}
                                    {/*    <use xlink:href="#icon-filter-quote"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                            <li className="popular__filters-item filters__item">
                                <a
                                    className="filters__button filters__button--link button"
                                    href="#"
                                >
                                    <span className="visually-hidden">
                                        Ссылка
                                    </span>
                                    {/*<svg className="filters__icon" width="21" height="18">*/}
                                    {/*    <use xlink:href="#icon-filter-link"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="popular__posts">
                    <article className="popular__post post post-quote">
                        <header className="post__header">
                            <h2>
                                <a href="#">Цитата дня</a>
                            </h2>
                        </header>
                        <div className="post__main">
                            <blockquote>
                                <p>
                                    Тысячи людей живут без любви, но никто — без
                                    воды.
                                </p>
                                <cite>Xью Оден</cite>
                            </blockquote>
                        </div>
                        <footer className="post__footer">
                            <div className="post__author">
                                <a
                                    className="post__author-link"
                                    href="#"
                                    title="Автор"
                                >
                                    <div className="post__avatar-wrapper">
                                        <img
                                            className="post__author-avatar"
                                            src="img/userpic-larisa-small.jpg"
                                            alt="Аватар пользователя"
                                        />
                                    </div>
                                    <div className="post__info">
                                        <b className="post__author-name">
                                            Лариса Роговая
                                        </b>
                                        <time
                                            className="post__time"
                                            dateTime="2019-03-30"
                                        >
                                            Месяц назад
                                        </time>
                                    </div>
                                </a>
                            </div>
                            <div className="post__indicators">
                                <div className="post__buttons">
                                    <a
                                        className="post__indicator post__indicator--likes button"
                                        href="#"
                                        title="Лайк"
                                    >
                                        {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                        {/*    <use xlink:href="#icon-heart"></use>*/}
                                        {/*</svg>*/}
                                        {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                        {/*     height="17">*/}
                                        {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                        {/*</svg>*/}
                                        <span>250</span>
                                        <span className="visually-hidden">
                                            количество лайков
                                        </span>
                                    </a>
                                    <a
                                        className="post__indicator post__indicator--comments button"
                                        href="#"
                                        title="Комментарии"
                                    >
                                        {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                        {/*    <use xlink:href="#icon-comment"></use>*/}
                                        {/*</svg>*/}
                                        <span>25</span>
                                        <span className="visually-hidden">
                                            количество комментариев
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </article>

                    <article className="popular__post post ">
                        <header className="post__header">
                            <h2>
                                <a href="#">Полезный пост про Байкал</a>
                            </h2>
                        </header>
                        <div className="post__main">
                            <div className="post-video__block">
                                <div className="post-video__preview">
                                    <img
                                        src="img/coast-medium.jpg"
                                        alt="Превью к видео"
                                        width="360"
                                        height="188"
                                    />
                                </div>
                                <a
                                    href="post-details.html"
                                    className="post-video__play-big button"
                                >
                                    {/*<svg className="post-video__play-big-icon" width="14" height="14">*/}
                                    {/*    <use xlink:href="#icon-video-play-big"></use>*/}
                                    {/*</svg>*/}
                                    <span className="visually-hidden">
                                        Запустить проигрыватель
                                    </span>
                                </a>
                            </div>
                        </div>
                        <footer className="post__footer">
                            <div className="post__author">
                                <a
                                    className="post__author-link"
                                    href="#"
                                    title="Автор"
                                >
                                    <div className="post__avatar-wrapper">
                                        <img
                                            className="post__author-avatar"
                                            src="img/userpic-larisa-small.jpg"
                                            alt="Аватар пользователя"
                                        />
                                    </div>
                                    <div className="post__info">
                                        <b className="post__author-name">
                                            Лариса Роговая
                                        </b>
                                        <time
                                            className="post__time"
                                            dateTime="2019-03-30"
                                        >
                                            Месяц назад
                                        </time>
                                    </div>
                                </a>
                            </div>
                            <div className="post__indicators">
                                <div className="post__buttons">
                                    <a
                                        className="post__indicator post__indicator--likes button"
                                        href="#"
                                        title="Лайк"
                                    >
                                        {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                        {/*    <use xlink:href="#icon-heart"></use>*/}
                                        {/*</svg>*/}
                                        {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                        {/*     height="17">*/}
                                        {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                        {/*</svg>*/}
                                        <span>250</span>
                                        <span className="visually-hidden">
                                            количество лайков
                                        </span>
                                    </a>
                                    <a
                                        className="post__indicator post__indicator--comments button"
                                        href="#"
                                        title="Комментарии"
                                    >
                                        {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                        {/*    <use xlink:href="#icon-comment"></use>*/}
                                        {/*</svg>*/}
                                        <span>25</span>
                                        <span className="visually-hidden">
                                            количество комментариев
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </article>

                    <article className="popular__post post post-text">
                        <header className="post__header">
                            <h2>
                                <a href="#">Полезный пост про Байкал</a>
                            </h2>
                        </header>
                        <div className="post__main">
                            <p>
                                Озеро Байкал – огромное древнее озеро в горах
                                Сибири к северу от монгольской границы. Байкал
                                считается самым глубоким озером в мире. Он
                                окружен сетью пешеходных маршрутов, называемых
                                Большой байкальской тропой. Деревня Листвянка,
                                расположенная на западном берегу озера, –
                                популярная отправная точка для летних экскурсий.
                                Зимой здесь можно кататься на коньках и собачьих
                                упряжках.
                            </p>
                            <div className="post-text__more-link-wrapper">
                                <a className="post-text__more-link" href="#">
                                    Читать далее
                                </a>
                            </div>
                        </div>
                        <footer className="post__footer">
                            <div className="post__author">
                                <a
                                    className="post__author-link"
                                    href="#"
                                    title="Автор"
                                >
                                    <div className="post__avatar-wrapper">
                                        <img
                                            className="post__author-avatar"
                                            src="img/userpic-larisa-small.jpg"
                                            alt="Аватар пользователя"
                                        />
                                    </div>
                                    <div className="post__info">
                                        <b className="post__author-name">
                                            Лариса Роговая
                                        </b>
                                        <time
                                            className="post__time"
                                            dateTime="2019-03-30"
                                        >
                                            Месяц назад
                                        </time>
                                    </div>
                                </a>
                            </div>
                            <div className="post__indicators">
                                <div className="post__buttons">
                                    <a
                                        className="post__indicator post__indicator--likes button"
                                        href="#"
                                        title="Лайк"
                                    >
                                        {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                        {/*    <use xlink:href="#icon-heart"></use>*/}
                                        {/*</svg>*/}
                                        {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                        {/*     height="17">*/}
                                        {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                        {/*</svg>*/}
                                        <span>250</span>
                                        <span className="visually-hidden">
                                            количество лайков
                                        </span>
                                    </a>
                                    <a
                                        className="post__indicator post__indicator--comments button"
                                        href="#"
                                        title="Комментарии"
                                    >
                                        {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                        {/*    <use xlink:href="#icon-comment"></use>*/}
                                        {/*</svg>*/}
                                        <span>25</span>
                                        <span className="visually-hidden">
                                            количество комментариев
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </article>

                    <article className="popular__post post post-link">
                        <header className="post__header">
                            <h2>
                                <a href="#">Делюсь с вами ссылочкой</a>
                            </h2>
                        </header>
                        <div className="post__main">
                            <div className="post-link__wrapper">
                                <a
                                    className="post-link__external"
                                    href="http://www.vitadental.ru"
                                    title="Перейти по ссылке"
                                >
                                    <div className="post-link__info-wrapper">
                                        <div className="post-link__icon-wrapper">
                                            <img
                                                src="https://www.google.com/s2/favicons?domain=vitadental.ru"
                                                alt="Иконка"
                                            />
                                        </div>
                                        <div className="post-link__info">
                                            <h3>Стоматология «Вита»</h3>
                                        </div>
                                    </div>
                                    <span>www.vitadental.ru</span>
                                </a>
                            </div>
                        </div>
                        <footer className="post__footer">
                            <div className="post__author">
                                <a
                                    className="post__author-link"
                                    href="#"
                                    title="Автор"
                                >
                                    <div className="post__avatar-wrapper">
                                        <img
                                            className="post__author-avatar"
                                            src="img/userpic-larisa-small.jpg"
                                            alt="Аватар пользователя"
                                        />
                                    </div>
                                    <div className="post__info">
                                        <b className="post__author-name">
                                            Лариса Роговая
                                        </b>
                                        <time
                                            className="post__time"
                                            dateTime="2019-03-30"
                                        >
                                            Месяц назад
                                        </time>
                                    </div>
                                </a>
                            </div>
                            <div className="post__indicators">
                                <div className="post__buttons">
                                    <a
                                        className="post__indicator post__indicator--likes button"
                                        href="#"
                                        title="Лайк"
                                    >
                                        {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                        {/*    <use xlink:href="#icon-heart"></use>*/}
                                        {/*</svg>*/}
                                        {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                        {/*     height="17">*/}
                                        {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                        {/*</svg>*/}
                                        <span>250</span>
                                        <span className="visually-hidden">
                                            количество лайков
                                        </span>
                                    </a>
                                    <a
                                        className="post__indicator post__indicator--comments button"
                                        href="#"
                                        title="Комментарии"
                                    >
                                        {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                        {/*    <use xlink:href="#icon-comment"></use>*/}
                                        {/*</svg>*/}
                                        <span>25</span>
                                        <span className="visually-hidden">
                                            количество комментариев
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </article>

                    <article className="popular__post post post-photo">
                        <header className="post__header">
                            <h2>
                                <a href="#">Наконец, обработал фотки!</a>
                            </h2>
                        </header>
                        <div className="post__main">
                            <div className="post-photo__image-wrapper">
                                <img
                                    src="img/rock-medium.jpg"
                                    alt="Фото от пользователя"
                                    width="360"
                                    height="240"
                                />
                            </div>
                        </div>
                        <footer className="post__footer">
                            <div className="post__author">
                                <a
                                    className="post__author-link"
                                    href="#"
                                    title="Автор"
                                >
                                    <div className="post__avatar-wrapper">
                                        <img
                                            className="post__author-avatar"
                                            src="img/userpic-larisa-small.jpg"
                                            alt="Аватар пользователя"
                                        />
                                    </div>
                                    <div className="post__info">
                                        <b className="post__author-name">
                                            Лариса Роговая
                                        </b>
                                        <time
                                            className="post__time"
                                            dateTime="2019-03-30"
                                        >
                                            Месяц назад
                                        </time>
                                    </div>
                                </a>
                            </div>
                            <div className="post__indicators">
                                <div className="post__buttons">
                                    <a
                                        className="post__indicator post__indicator--likes button"
                                        href="#"
                                        title="Лайк"
                                    >
                                        {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                        {/*    <use xlink:href="#icon-heart"></use>*/}
                                        {/*</svg>*/}
                                        {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                        {/*     height="17">*/}
                                        {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                        {/*</svg>*/}
                                        <span>250</span>
                                        <span className="visually-hidden">
                                            количество лайков
                                        </span>
                                    </a>
                                    <a
                                        className="post__indicator post__indicator--comments button"
                                        href="#"
                                        title="Комментарии"
                                    >
                                        {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                        {/*    <use xlink:href="#icon-comment"></use>*/}
                                        {/*</svg>*/}
                                        <span>25</span>
                                        <span className="visually-hidden">
                                            количество комментариев
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </article>

                    <article className="popular__post post post-quote">
                        <header className="post__header">
                            <h2>
                                <a href="#">Цитата дня</a>
                            </h2>
                        </header>
                        <div className="post__main">
                            <blockquote>
                                <p>
                                    Тысячи людей живут без любви, но никто — без
                                    воды.
                                </p>
                                <cite>Xью Оден</cite>
                            </blockquote>
                        </div>
                        <footer className="post__footer">
                            <div className="post__author">
                                <a
                                    className="post__author-link"
                                    href="#"
                                    title="Автор"
                                >
                                    <div className="post__avatar-wrapper">
                                        <img
                                            className="post__author-avatar"
                                            src="img/userpic-larisa-small.jpg"
                                            alt="Аватар пользователя"
                                        />
                                    </div>
                                    <div className="post__info">
                                        <b className="post__author-name">
                                            Лариса Роговая
                                        </b>
                                        <time
                                            className="post__time"
                                            dateTime="2019-03-30"
                                        >
                                            Месяц назад
                                        </time>
                                    </div>
                                </a>
                            </div>
                            <div className="post__indicators">
                                <div className="post__buttons">
                                    <a
                                        className="post__indicator post__indicator--likes button"
                                        href="#"
                                        title="Лайк"
                                    >
                                        {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                        {/*    <use xlink:href="#icon-heart"></use>*/}
                                        {/*</svg>*/}
                                        {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                        {/*     height="17">*/}
                                        {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                        {/*</svg>*/}
                                        <span>250</span>
                                        <span className="visually-hidden">
                                            количество лайков
                                        </span>
                                    </a>
                                    <a
                                        className="post__indicator post__indicator--comments button"
                                        href="#"
                                        title="Комментарии"
                                    >
                                        {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                        {/*    <use xlink:href="#icon-comment"></use>*/}
                                        {/*</svg>*/}
                                        <span>25</span>
                                        <span className="visually-hidden">
                                            количество комментариев
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </article>
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
                                    <a className="footer__page-link" href="#">
                                        О проекте
                                    </a>
                                </li>
                                <li className="footer__info-page">
                                    <a className="footer__page-link" href="#">
                                        Реклама
                                    </a>
                                </li>
                                <li className="footer__info-page">
                                    <a className="footer__page-link" href="#">
                                        О разработчиках
                                    </a>
                                </li>
                                <li className="footer__info-page">
                                    <a className="footer__page-link" href="#">
                                        Работа в Readme
                                    </a>
                                </li>
                                <li className="footer__info-page">
                                    <a className="footer__page-link" href="#">
                                        Соглашение пользователя
                                    </a>
                                </li>
                                <li className="footer__info-page">
                                    <a className="footer__page-link" href="#">
                                        Политика конфиденциальности
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="footer__license">
                            При использовании любых материалов с сайта
                            обязательно указание Readme в качестве источника.
                            Все авторские и исключительные права в рамках
                            проекта защищены в соответствии с положениями 4
                            части Гражданского Кодекса Российской Федерации.
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
