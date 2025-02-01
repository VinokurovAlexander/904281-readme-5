import logoUrl from '../../../markup/img/logo.svg';
import { LoginForm } from './components/LoginForm';

export const Main = () => {
    return (
        <div>
            <header className="header page__header">
                <div className="header__wrapper page__header-wrapper container">
                    <div className="header__logo-wrapper page__logo-wrapper">
                        <a className="header__logo-link header__logo-link--active">
                            <img
                                className="header__logo"
                                src={logoUrl}
                                alt="Логотип readme"
                                width="172"
                                height="32"
                            />
                        </a>
                        <p className="header__topic page__header-topic">
                            micro blogging
                        </p>
                    </div>
                    <div className="header__nav-wrapper">
                        <nav className="header__nav">
                            <p className="header__register-slogan">
                                Еще нет аккаунта?
                            </p>
                            <ul className="header__user-nav">
                                <li>
                                    <a className="header__user-button header__register-button button button--transparent">
                                        Регистрация
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <h1 className="visually-hidden">
                    Главная страница сайта по созданию микроблога readme
                </h1>
                <div className="page__main-wrapper page__main-wrapper--intro container">
                    <section className="intro">
                        <h2 className="visually-hidden">Наши преимущества</h2>
                        <b className="intro__slogan">
                            Блог, каким
                            <br /> он должен быть
                        </b>
                        <ul className="intro__advantages-list">
                            <li className="intro__advantage intro__advantage--ease">
                                <p className="intro__advantage-text">
                                    Есть все необходимое для&nbsp;простоты
                                    публикации
                                </p>
                            </li>
                            <li className="intro__advantage intro__advantage--no-excess">
                                <p className="intro__advantage-text">
                                    Нет ничего лишнего, отвлекающего от сути
                                </p>
                            </li>
                        </ul>
                    </section>
                    <section className="authorization">
                        <h2 className="visually-hidden">Авторизация</h2>
                        <LoginForm />
                    </section>
                </div>
            </main>

            <footer className="footer footer--main">
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
                                <a className="footer__copyright-link" href="#">
                                    <span>Разработано HTML Academy</span>
                                    {/*<svg*/}
                                    {/*    className="footer__copyright-logo"*/}
                                    {/*    width="27"*/}
                                    {/*    height="34"*/}
                                    {/*>*/}
                                    {/*    <use xlink:href="#icon-htmlacademy"></use>*/}
                                    {/*</svg>*/}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
