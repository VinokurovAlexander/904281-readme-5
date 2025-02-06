import { useParams } from 'react-router-dom';

export const Detail = () => {
    const { id } = useParams();

    return (
        <>
            <header className="header">
                <div className="header__wrapper container">
                    <div className="header__logo-wrapper">
                        <a className="header__logo-link" href="main.html">
                            <img
                                className="header__logo"
                                src="img/logo.svg"
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

            <main className="page__main page__main--publication">
                <div className="container">
                    <h1 className="page__title page__title--publication">
                        Наконец, обработала фотки!
                    </h1>
                    <section className="post-details">
                        <h2 className="visually-hidden">Публикация</h2>
                        <div className="post-details__wrapper post-photo">
                            <div className="post-details__main-block post post--details">
                                <div className="post-details__image-wrapper post-photo__image-wrapper">
                                    <img
                                        src="img/rock-default.jpg"
                                        alt="Фото от пользователя"
                                        width="760"
                                        height="507"
                                    />
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
                                        <a
                                            className="post__indicator post__indicator--repost button"
                                            href="#"
                                            title="Репост"
                                        >
                                            {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                            {/*    <use xlink:href="#icon-repost"></use>*/}
                                            {/*</svg>*/}
                                            <span>5</span>
                                            <span className="visually-hidden">
                                                количество репостов
                                            </span>
                                        </a>
                                    </div>
                                    <span className="post__view">
                                        500 просмотров
                                    </span>
                                </div>
                                <ul className="post__tags">
                                    <li>
                                        <a href="#">#nature</a>
                                    </li>
                                    <li>
                                        <a href="#">#globe</a>
                                    </li>
                                    <li>
                                        <a href="#">#photooftheday</a>
                                    </li>
                                    <li>
                                        <a href="#">#canon</a>
                                    </li>
                                    <li>
                                        <a href="#">#landscape</a>
                                    </li>
                                    <li>
                                        <a href="#">#щикарныйвид</a>
                                    </li>
                                </ul>
                                <div className="comments">
                                    <form
                                        className="comments__form form"
                                        action="#"
                                        method="post"
                                    >
                                        <div className="comments__my-avatar">
                                            <img
                                                className="comments__picture"
                                                src="img/userpic-medium.jpg"
                                                alt="Аватар пользователя"
                                            />
                                        </div>
                                        <div className="form__input-section form__input-section--error">
                                            <textarea
                                                className="comments__textarea form__textarea form__input"
                                                placeholder="Ваш комментарий"
                                            ></textarea>
                                            <label className="visually-hidden">
                                                Ваш комментарий
                                            </label>
                                            <button
                                                className="form__error-button button"
                                                type="button"
                                            >
                                                !
                                            </button>
                                            <div className="form__error-text">
                                                <h3 className="form__error-title">
                                                    Ошибка валидации
                                                </h3>
                                                <p className="form__error-desc">
                                                    Это поле обязательно к
                                                    заполнению
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            className="comments__submit button button--green"
                                            type="submit"
                                        >
                                            Отправить
                                        </button>
                                    </form>
                                    <div className="comments__list-wrapper">
                                        <ul className="comments__list">
                                            <li className="comments__item user">
                                                <div className="comments__avatar">
                                                    <a
                                                        className="user__avatar-link"
                                                        href="#"
                                                    >
                                                        <img
                                                            className="comments__picture"
                                                            src="img/userpic-larisa.jpg"
                                                            alt="Аватар пользователя"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="comments__info">
                                                    <div className="comments__name-wrapper">
                                                        <a
                                                            className="comments__user-name"
                                                            href="#"
                                                        >
                                                            <span>
                                                                Лариса Роговая
                                                            </span>
                                                        </a>
                                                        <time
                                                            className="comments__time"
                                                            dateTime="2019-03-20"
                                                        >
                                                            1 ч назад
                                                        </time>
                                                    </div>
                                                    <p className="comments__text">
                                                        Красота!!!1!
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="comments__item user">
                                                <div className="comments__avatar">
                                                    <a
                                                        className="user__avatar-link"
                                                        href="#"
                                                    >
                                                        <img
                                                            className="comments__picture"
                                                            src="img/userpic-larisa.jpg"
                                                            alt="Аватар пользователя"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="comments__info">
                                                    <div className="comments__name-wrapper">
                                                        <a
                                                            className="comments__user-name"
                                                            href="#"
                                                        >
                                                            <span>
                                                                Лариса Роговая
                                                            </span>
                                                        </a>
                                                        <time
                                                            className="comments__time"
                                                            dateTime="2019-03-18"
                                                        >
                                                            2 дня назад
                                                        </time>
                                                    </div>
                                                    <p className="comments__text">
                                                        Озеро Байкал – огромное
                                                        древнее озеро в горах
                                                        Сибири к северу от
                                                        монгольской границы.
                                                        Байкал считается самым
                                                        глубоким озером в мире.
                                                        Он окружен сетью
                                                        пешеходных маршрутов,
                                                        называемых Большой
                                                        байкальской тропой.
                                                        Деревня Листвянка,
                                                        расположенная на
                                                        западном берегу озера, –
                                                        популярная отправная
                                                        точка для летних
                                                        экскурсий. Зимой здесь
                                                        можно кататься на
                                                        коньках и собачьих
                                                        упряжках.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <a
                                            className="comments__more-link"
                                            href="#"
                                        >
                                            <span>
                                                Показать все комментарии
                                            </span>
                                            <sup className="comments__amount">
                                                45
                                            </sup>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-details__user user">
                                <div className="post-details__user-info user__info">
                                    <div className="post-details__avatar user__avatar">
                                        <a
                                            className="post-details__avatar-link user__avatar-link"
                                            href="#"
                                        >
                                            <img
                                                className="post-details__picture user__picture"
                                                src="img/userpic-elvira.jpg"
                                                alt="Аватар пользователя"
                                            />
                                        </a>
                                    </div>
                                    <div className="post-details__name-wrapper user__name-wrapper">
                                        <a
                                            className="post-details__name user__name"
                                            href="#"
                                        >
                                            <span>Эльвира Хайпулинова</span>
                                        </a>
                                        <time
                                            className="post-details__time user__time"
                                            dateTime="2014-03-20"
                                        >
                                            5 лет на сайте
                                        </time>
                                    </div>
                                </div>
                                <div className="post-details__rating user__rating">
                                    <p className="post-details__rating-item user__rating-item user__rating-item--subscribers">
                                        <span className="post-details__rating-amount user__rating-amount">
                                            1856
                                        </span>
                                        <span className="post-details__rating-text user__rating-text">
                                            подписчиков
                                        </span>
                                    </p>
                                    <p className="post-details__rating-item user__rating-item user__rating-item--publications">
                                        <span className="post-details__rating-amount user__rating-amount">
                                            556
                                        </span>
                                        <span className="post-details__rating-text user__rating-text">
                                            публикаций
                                        </span>
                                    </p>
                                </div>
                                <div className="post-details__user-buttons user__buttons">
                                    <button
                                        className="user__button user__button--subscription button button--main"
                                        type="button"
                                    >
                                        Подписаться
                                    </button>
                                    <a
                                        className="user__button user__button--writing button button--green"
                                        href="#"
                                    >
                                        Сообщение
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

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
