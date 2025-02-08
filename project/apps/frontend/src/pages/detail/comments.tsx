import { Comment } from '@project/types';

interface CommentsProps {
    comments: Comment[];
}

export const Comments = ({ comments }: CommentsProps) => (
    <ul className="comments__list">
        {comments.map((comment) => (
            <li className="comments__item user">
                {/*<div className="comments__avatar">*/}
                {/*    <a className="user__avatar-link" href="#">*/}
                {/*        <img*/}
                {/*            className="comments__picture"*/}
                {/*            src="img/userpic-larisa.jpg"*/}
                {/*            alt="Аватар пользователя"*/}
                {/*        />*/}
                {/*    </a>*/}
                {/*</div>*/}
                <div className="comments__info">
                    {/*<div className="comments__name-wrapper">*/}
                    {/*    <a className="comments__user-name" href="#">*/}
                    {/*        <span>Лариса Роговая</span>*/}
                    {/*    </a>*/}
                    {/*    <time className="comments__time" dateTime="2019-03-20">*/}
                    {/*        1 ч назад*/}
                    {/*    </time>*/}
                    {/*</div>*/}
                    <p className="comments__text">{comment.text}</p>
                </div>
            </li>
        ))}
        {/*<li className="comments__item user">*/}
        {/*    <div className="comments__avatar">*/}
        {/*        <a className="user__avatar-link" href="#">*/}
        {/*            <img*/}
        {/*                className="comments__picture"*/}
        {/*                src="img/userpic-larisa.jpg"*/}
        {/*                alt="Аватар пользователя"*/}
        {/*            />*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*    <div className="comments__info">*/}
        {/*        <div className="comments__name-wrapper">*/}
        {/*            <a className="comments__user-name" href="#">*/}
        {/*                <span>Лариса Роговая</span>*/}
        {/*            </a>*/}
        {/*            <time className="comments__time" dateTime="2019-03-20">*/}
        {/*                1 ч назад*/}
        {/*            </time>*/}
        {/*        </div>*/}
        {/*        <p className="comments__text">Красота!!!1!</p>*/}
        {/*    </div>*/}
        {/*</li>*/}
        {/*<li className="comments__item user">*/}
        {/*    <div className="comments__avatar">*/}
        {/*        <a className="user__avatar-link" href="#">*/}
        {/*            <img*/}
        {/*                className="comments__picture"*/}
        {/*                src="img/userpic-larisa.jpg"*/}
        {/*                alt="Аватар пользователя"*/}
        {/*            />*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*    <div className="comments__info">*/}
        {/*        <div className="comments__name-wrapper">*/}
        {/*            <a className="comments__user-name" href="#">*/}
        {/*                <span>Лариса Роговая</span>*/}
        {/*            </a>*/}
        {/*            <time className="comments__time" dateTime="2019-03-18">*/}
        {/*                2 дня назад*/}
        {/*            </time>*/}
        {/*        </div>*/}
        {/*        <p className="comments__text">*/}
        {/*            Озеро Байкал – огромное древнее озеро в горах Сибири к*/}
        {/*            северу от монгольской границы. Байкал считается самым*/}
        {/*            глубоким озером в мире. Он окружен сетью пешеходных*/}
        {/*            маршрутов, называемых Большой байкальской тропой. Деревня*/}
        {/*            Листвянка, расположенная на западном берегу озера, –*/}
        {/*            популярная отправная точка для летних экскурсий. Зимой здесь*/}
        {/*            можно кататься на коньках и собачьих упряжках.*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*</li>*/}
    </ul>
);
