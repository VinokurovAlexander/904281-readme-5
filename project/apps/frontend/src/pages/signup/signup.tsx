import { FormEvent, useState } from 'react';
import { signup } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, userActions } from '../../store';
import { Layout } from '../../components';

export const Signup = () => {
    const [mail, setMail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [error, setError] = useState<string | string[] | null>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setError(null);

        if (
            !mail ||
            !firstname ||
            !lastname ||
            !firstPassword ||
            !secondPassword
        ) {
            setError('Не все поля заполнены');
            return;
        }

        if (firstPassword !== secondPassword) {
            setError('Пароли не совпадают');
            return;
        }

        signup({ mail, firstname, lastname, password: firstPassword })
            .then((result) => {
                if (result.statusCode === 200) {
                    dispatch(userActions.setUser(result.data));
                    navigate('/popular');
                } else {
                    setError(result.message);
                }
            })
            .catch(() => setError('Что-то пошло не так'));
    };

    return (
        <Layout>
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
                                        htmlFor="registration-firstname"
                                    >
                                        Имя{' '}
                                        <span className="form__input-required">
                                            *
                                        </span>
                                    </label>
                                    <div className="form__input-section">
                                        <input
                                            className="registration__input form__input"
                                            id="registration-firstname"
                                            type="text"
                                            name="firstname"
                                            placeholder="Укажите имя"
                                            onChange={(e) =>
                                                setFirstname(e.target.value)
                                            }
                                            value={firstname}
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
                                        htmlFor="registration-lastname"
                                    >
                                        Фамилия{' '}
                                        <span className="form__input-required">
                                            *
                                        </span>
                                    </label>
                                    <div className="form__input-section">
                                        <input
                                            className="registration__input form__input"
                                            id="registration-lastname"
                                            type="text"
                                            name="firstname"
                                            placeholder="Укажите фамилию"
                                            onChange={(e) =>
                                                setLastname(e.target.value)
                                            }
                                            value={lastname}
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
                                {error &&
                                    (typeof error === 'string' ? (
                                        <h3>{error}</h3>
                                    ) : (
                                        error.map((item) => <h3>{item}</h3>)
                                    ))}
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
        </Layout>
    );
};
