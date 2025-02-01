import { useState, FC } from 'react';
import { FormEvent } from 'react';
import { login } from '../../../api';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
    setIsAuth: (isAuth: boolean) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ setIsAuth }) => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        login()
            .then((result) => {
                if (result.statusCode === 200) {
                    setIsAuth(true);
                    navigate('/popular');
                } else {
                    setError(result.message);
                }
            })
            .catch(() => setError('Something went wrong'));
    };

    return (
        <div>
            <form className="authorization__form form" onSubmit={handleSubmit}>
                <div className="authorization__input-wrapper form__input-wrapper">
                    <input
                        className="authorization__input authorization__input--login form__input"
                        type="text"
                        name="login"
                        placeholder="Логин"
                    />
                    {/*<svg*/}
                    {/*    className="form__input-icon"*/}
                    {/*    width="19"*/}
                    {/*    height="18"*/}
                    {/*>*/}
                    {/*    <use xlink:href="#icon-input-user"></use>*/}
                    {/*</svg>*/}
                    <label className="visually-hidden">Логин</label>
                    <span className="form__error-label form__error-label--login">
                        Неверный логин
                    </span>
                </div>
                <div className="authorization__input-wrapper form__input-wrapper">
                    <input
                        className="authorization__input authorization__input--password form__input"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    {/*<svg*/}
                    {/*    className="form__input-icon"*/}
                    {/*    width="16"*/}
                    {/*    height="20"*/}
                    {/*>*/}
                    {/*    <use xlink:href="#icon-input-password"></use>*/}
                    {/*</svg>*/}
                    <label className="visually-hidden">Пароль</label>
                    <span className="form__error-label">
                        Пароли не совпадают
                    </span>
                </div>
                <a className="authorization__recovery" href="#">
                    Восстановить пароль
                </a>
                <button
                    className="authorization__submit button button--main"
                    type="submit"
                >
                    Войти
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};
