import { FC, FormEvent, useState } from 'react';
import { signup } from '../../api';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
    setIsAuth: (isAuth: boolean) => void;
}

export const Signup: FC<SignupProps> = ({ setIsAuth }) => {
    const [mail, setMail] = useState('');
    const [login, setLogin] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setError(null);

        if (!mail || !login || !firstPassword || !secondPassword) {
            setError('Не все поля заполнены');
            return;
        }

        if (firstPassword !== secondPassword) {
            setError('Пароли не совпадают');
            return;
        }

        signup({ mail, login, password: firstPassword })
            .then((result) => {
                if (result.statusCode && result.statusCode !== 200) {
                    setError(result.message);
                } else {
                    setIsAuth(true);
                    navigate('/popular');
                }
            })
            .catch(() => setError('Что-то пошло не так'));
    };

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
                                        className="header__page-link"
                                        href="popular.html"
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
                                <li className="header__authorization">
                                    <a
                                        className="header__user-button header__authorization-button button"
                                        href="login.html"
                                    >
                                        Вход
                                    </a>
                                </li>
                                <li>
                                    <a className="header__user-button header__user-button--active header__register-button button">
                                        Регистрация
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--registration">
                <div className="container">
                    <h1 className="page__title page__title--registration">
                        Регистрация
                    </h1>
                </div>
                <section className="registration container">
                    <h2 className="visually-hidden">Форма регистрации</h2>
                    <form
                        className="registration__form form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form__text-inputs-wrapper">
                            <div className="form__text-inputs">
                                <div className="registration__input-wrapper form__input-wrapper">
                                    <label
                                        className="registration__label form__label"
                                        htmlFor="registration-email"
                                    >
                                        Электронная почта{' '}
                                        <span className="form__input-required">
                                            *
                                        </span>
                                    </label>
                                    <div className="form__input-section">
                                        <input
                                            className="registration__input form__input"
                                            id="registration-email"
                                            type="email"
                                            name="email"
                                            placeholder="Укажите эл.почту"
                                            onChange={(e) =>
                                                setMail(e.target.value)
                                            }
                                            value={mail}
                                        />
                                        <button
                                            className="form__error-button button"
                                            type="button"
                                        >
                                            !
                                            <span className="visually-hidden">
                                                Информация об ошибке
                                            </span>
                                        </button>
                                        <div className="form__error-text">
                                            <h3 className="form__error-title">
                                                Заголовок сообщения
                                            </h3>
                                            <p className="form__error-desc">
                                                Текст сообщения об ошибке,
                                                подробно объясняющий, что не
                                                так.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="registration__input-wrapper form__input-wrapper">
                                    <label
                                        className="registration__label form__label"
                                        htmlFor="registration-login"
                                    >
                                        Логин{' '}
                                        <span className="form__input-required">
                                            *
                                        </span>
                                    </label>
                                    <div className="form__input-section">
                                        <input
                                            className="registration__input form__input"
                                            id="registration-login"
                                            type="text"
                                            name="login"
                                            placeholder="Укажите логин"
                                            onChange={(e) =>
                                                setLogin(e.target.value)
                                            }
                                            value={login}
                                        />
                                        <button
                                            className="form__error-button button"
                                            type="button"
                                        >
                                            !
                                            <span className="visually-hidden">
                                                Информация об ошибке
                                            </span>
                                        </button>
                                        <div className="form__error-text">
                                            <h3 className="form__error-title">
                                                Заголовок сообщения
                                            </h3>
                                            <p className="form__error-desc">
                                                Текст сообщения об ошибке,
                                                подробно объясняющий, что не
                                                так.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="registration__input-wrapper form__input-wrapper">
                                    <label
                                        className="registration__label form__label"
                                        htmlFor="registration-password"
                                    >
                                        Пароль
                                        <span className="form__input-required">
                                            *
                                        </span>
                                    </label>
                                    <div className="form__input-section">
                                        <input
                                            className="registration__input form__input"
                                            id="registration-password"
                                            type="password"
                                            name="password"
                                            placeholder="Придумайте пароль"
                                            onChange={(e) =>
                                                setFirstPassword(e.target.value)
                                            }
                                            value={firstPassword}
                                        />
                                        <button
                                            className="form__error-button button"
                                            type="button"
                                        >
                                            !
                                            <span className="visually-hidden">
                                                Информация об ошибке
                                            </span>
                                        </button>
                                        <div className="form__error-text">
                                            <h3 className="form__error-title">
                                                Заголовок сообщения
                                            </h3>
                                            <p className="form__error-desc">
                                                Текст сообщения об ошибке,
                                                подробно объясняющий, что не
                                                так.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="registration__input-wrapper form__input-wrapper">
                                    <label
                                        className="registration__label form__label"
                                        htmlFor="registration-password-repeat"
                                    >
                                        Повтор пароля
                                        <span className="form__input-required">
                                            *
                                        </span>
                                    </label>
                                    <div className="form__input-section">
                                        <input
                                            className="registration__input form__input"
                                            id="registration-password-repeat"
                                            type="password"
                                            name="password-repeat"
                                            placeholder="Повторите пароль"
                                            onChange={(e) =>
                                                setSecondPassword(
                                                    e.target.value,
                                                )
                                            }
                                            value={secondPassword}
                                        />
                                        <button
                                            className="form__error-button button"
                                            type="button"
                                        >
                                            !
                                            <span className="visually-hidden">
                                                Информация об ошибке
                                            </span>
                                        </button>
                                        <div className="form__error-text">
                                            <h3 className="form__error-title">
                                                Заголовок сообщения
                                            </h3>
                                            <p className="form__error-desc">
                                                Текст сообщения об ошибке,
                                                подробно объясняющий, что не
                                                так.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form__invalid-block">
                                <b className="form__invalid-slogan">
                                    Пожалуйста, исправьте следующие ошибки:
                                </b>
                                {error && <h3>{error}</h3>}
                                {/*<ul className="form__invalid-list">*/}
                                {/*    <li className="form__invalid-item">*/}
                                {/*        Заголовок. Это поле должно быть*/}
                                {/*        заполнено.*/}
                                {/*    </li>*/}
                                {/*    <li className="form__invalid-item">*/}
                                {/*        Цитата. Она не должна превышать 70*/}
                                {/*        знаков.*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                        {/*<div className="registration__input-file-container form__input-container form__input-container--file">*/}
                        {/*    <div className="registration__input-file-wrapper form__input-file-wrapper">*/}
                        {/*        <div className="registration__file-zone form__file-zone dropzone">*/}
                        {/*            <input*/}
                        {/*                className="registration__input-file form__input-file"*/}
                        {/*                id="userpic-file"*/}
                        {/*                type="file"*/}
                        {/*                name="userpic-file"*/}
                        {/*                title=" "*/}
                        {/*            />*/}
                        {/*            <div className="form__file-zone-text">*/}
                        {/*                <span>Перетащите фото сюда</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <button*/}
                        {/*            className="registration__input-file-button form__input-file-button button"*/}
                        {/*            type="button"*/}
                        {/*        >*/}
                        {/*            <span>Выбрать фото</span>*/}
                        {/*            <svg*/}
                        {/*                className="registration__attach-icon form__attach-icon"*/}
                        {/*                width="10"*/}
                        {/*                height="20"*/}
                        {/*            >*/}
                        {/*                <use xlink:href="#icon-attach"></use>*/}
                        {/*            </svg>*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    <div className="registration__file form__file dropzone-previews"></div>*/}
                        {/*</div>*/}
                        <button
                            className="registration__submit button button--main"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </section>
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
