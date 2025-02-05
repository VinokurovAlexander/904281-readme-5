import { useEffect, useState } from 'react';
import { getPosts } from '../../api';
import { Post } from '@project/types';
import iconHeartUrl from './icon-heart.svg';
import iconCommentUrl from './icon-comment.svg';

export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts()
            .then(setPosts)
            .catch((e) => console.log('something went wrong', e.message));
    }, []);

    return (
        <>
            {posts.map((post) => (
                <article className="popular__post post post-text" id={post.id}>
                    <header className="post__header">
                        <h2>
                            <a href="#">{post.title}</a>
                        </h2>
                    </header>
                    <div className="post__main">
                        <p>{post.content}</p>
                        {/*<div className="post-text__more-link-wrapper">*/}
                        {/*    <a className="post-text__more-link" href="#">*/}
                        {/*        Читать далее*/}
                        {/*    </a>*/}
                        {/*</div>*/}
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
                                    <img
                                        src={iconHeartUrl}
                                        className="post__indicator-icon"
                                        width="20"
                                        height="17"
                                    />
                                    {/*<svg className="post__indicator-icon" width="20" height="17">*/}
                                    {/*    <use xlink:href="#icon-heart"></use>*/}
                                    {/*</svg>*/}
                                    {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                    {/*     height="17">*/}
                                    {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                    {/*</svg>*/}
                                    <span>{post.likes.length}</span>
                                    <span className="visually-hidden">
                                        количество лайков
                                    </span>
                                </a>
                                <a
                                    className="post__indicator post__indicator--comments button"
                                    href="#"
                                    title="Комментарии"
                                >
                                    <img
                                        src={iconCommentUrl}
                                        className="post__indicator-icon"
                                        width="19"
                                        height="17"
                                    />
                                    {/*<svg className="post__indicator-icon" width="19" height="17">*/}
                                    {/*    <use xlink:href="#icon-comment"></use>*/}
                                    {/*</svg>*/}
                                    <span>{post.comments.length}</span>
                                    <span className="visually-hidden">
                                        количество комментариев
                                    </span>
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>
            ))}
            {/*<article className="popular__post post post-quote">*/}
            {/*    <header className="post__header">*/}
            {/*        <h2>*/}
            {/*            <a href="#">Цитата дня</a>*/}
            {/*        </h2>*/}
            {/*    </header>*/}
            {/*    <div className="post__main">*/}
            {/*        <blockquote>*/}
            {/*            <p>*/}
            {/*                Тысячи людей живут без любви, но никто — без воды.*/}
            {/*            </p>*/}
            {/*            <cite>Xью Оден</cite>*/}
            {/*        </blockquote>*/}
            {/*    </div>*/}
            {/*    <footer className="post__footer">*/}
            {/*        <div className="post__author">*/}
            {/*            <a className="post__author-link" href="#" title="Автор">*/}
            {/*                <div className="post__avatar-wrapper">*/}
            {/*                    <img*/}
            {/*                        className="post__author-avatar"*/}
            {/*                        src="img/userpic-larisa-small.jpg"*/}
            {/*                        alt="Аватар пользователя"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div className="post__info">*/}
            {/*                    <b className="post__author-name">*/}
            {/*                        Лариса Роговая*/}
            {/*                    </b>*/}
            {/*                    <time*/}
            {/*                        className="post__time"*/}
            {/*                        dateTime="2019-03-30"*/}
            {/*                    >*/}
            {/*                        Месяц назад*/}
            {/*                    </time>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="post__indicators">*/}
            {/*            <div className="post__buttons">*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--likes button"*/}
            {/*                    href="#"*/}
            {/*                    title="Лайк"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="20" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    /!*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*!/*/}
            {/*                    /!*     height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart-active"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>250</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество лайков*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--comments button"*/}
            {/*                    href="#"*/}
            {/*                    title="Комментарии"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="19" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-comment"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>25</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество комментариев*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
            {/*</article>*/}

            {/*<article className="popular__post post ">*/}
            {/*    <header className="post__header">*/}
            {/*        <h2>*/}
            {/*            <a href="#">Полезный пост про Байкал</a>*/}
            {/*        </h2>*/}
            {/*    </header>*/}
            {/*    <div className="post__main">*/}
            {/*        <div className="post-video__block">*/}
            {/*            <div className="post-video__preview">*/}
            {/*                <img*/}
            {/*                    src="img/coast-medium.jpg"*/}
            {/*                    alt="Превью к видео"*/}
            {/*                    width="360"*/}
            {/*                    height="188"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <a*/}
            {/*                href="post-details.html"*/}
            {/*                className="post-video__play-big button"*/}
            {/*            >*/}
            {/*                /!*<svg className="post-video__play-big-icon" width="14" height="14">*!/*/}
            {/*                /!*    <use xlink:href="#icon-video-play-big"></use>*!/*/}
            {/*                /!*</svg>*!/*/}
            {/*                <span className="visually-hidden">*/}
            {/*                    Запустить проигрыватель*/}
            {/*                </span>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <footer className="post__footer">*/}
            {/*        <div className="post__author">*/}
            {/*            <a className="post__author-link" href="#" title="Автор">*/}
            {/*                <div className="post__avatar-wrapper">*/}
            {/*                    <img*/}
            {/*                        className="post__author-avatar"*/}
            {/*                        src="img/userpic-larisa-small.jpg"*/}
            {/*                        alt="Аватар пользователя"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div className="post__info">*/}
            {/*                    <b className="post__author-name">*/}
            {/*                        Лариса Роговая*/}
            {/*                    </b>*/}
            {/*                    <time*/}
            {/*                        className="post__time"*/}
            {/*                        dateTime="2019-03-30"*/}
            {/*                    >*/}
            {/*                        Месяц назад*/}
            {/*                    </time>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="post__indicators">*/}
            {/*            <div className="post__buttons">*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--likes button"*/}
            {/*                    href="#"*/}
            {/*                    title="Лайк"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="20" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    /!*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*!/*/}
            {/*                    /!*     height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart-active"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>250</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество лайков*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--comments button"*/}
            {/*                    href="#"*/}
            {/*                    title="Комментарии"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="19" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-comment"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>25</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество комментариев*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
            {/*</article>*/}

            {/*<article className="popular__post post post-text">*/}
            {/*    <header className="post__header">*/}
            {/*        <h2>*/}
            {/*            <a href="#">Полезный пост про Байкал</a>*/}
            {/*        </h2>*/}
            {/*    </header>*/}
            {/*    <div className="post__main">*/}
            {/*        <p>*/}
            {/*            Озеро Байкал – огромное древнее озеро в горах Сибири к*/}
            {/*            северу от монгольской границы. Байкал считается самым*/}
            {/*            глубоким озером в мире. Он окружен сетью пешеходных*/}
            {/*            маршрутов, называемых Большой байкальской тропой.*/}
            {/*            Деревня Листвянка, расположенная на западном берегу*/}
            {/*            озера, – популярная отправная точка для летних*/}
            {/*            экскурсий. Зимой здесь можно кататься на коньках и*/}
            {/*            собачьих упряжках.*/}
            {/*        </p>*/}
            {/*        <div className="post-text__more-link-wrapper">*/}
            {/*            <a className="post-text__more-link" href="#">*/}
            {/*                Читать далее*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <footer className="post__footer">*/}
            {/*        <div className="post__author">*/}
            {/*            <a className="post__author-link" href="#" title="Автор">*/}
            {/*                <div className="post__avatar-wrapper">*/}
            {/*                    <img*/}
            {/*                        className="post__author-avatar"*/}
            {/*                        src="img/userpic-larisa-small.jpg"*/}
            {/*                        alt="Аватар пользователя"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div className="post__info">*/}
            {/*                    <b className="post__author-name">*/}
            {/*                        Лариса Роговая*/}
            {/*                    </b>*/}
            {/*                    <time*/}
            {/*                        className="post__time"*/}
            {/*                        dateTime="2019-03-30"*/}
            {/*                    >*/}
            {/*                        Месяц назад*/}
            {/*                    </time>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="post__indicators">*/}
            {/*            <div className="post__buttons">*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--likes button"*/}
            {/*                    href="#"*/}
            {/*                    title="Лайк"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="20" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    /!*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*!/*/}
            {/*                    /!*     height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart-active"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>250</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество лайков*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--comments button"*/}
            {/*                    href="#"*/}
            {/*                    title="Комментарии"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="19" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-comment"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>25</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество комментариев*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
            {/*</article>*/}

            {/*<article className="popular__post post post-link">*/}
            {/*    <header className="post__header">*/}
            {/*        <h2>*/}
            {/*            <a href="#">Делюсь с вами ссылочкой</a>*/}
            {/*        </h2>*/}
            {/*    </header>*/}
            {/*    <div className="post__main">*/}
            {/*        <div className="post-link__wrapper">*/}
            {/*            <a*/}
            {/*                className="post-link__external"*/}
            {/*                href="http://www.vitadental.ru"*/}
            {/*                title="Перейти по ссылке"*/}
            {/*            >*/}
            {/*                <div className="post-link__info-wrapper">*/}
            {/*                    <div className="post-link__icon-wrapper">*/}
            {/*                        <img*/}
            {/*                            src="https://www.google.com/s2/favicons?domain=vitadental.ru"*/}
            {/*                            alt="Иконка"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="post-link__info">*/}
            {/*                        <h3>Стоматология «Вита»</h3>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <span>www.vitadental.ru</span>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <footer className="post__footer">*/}
            {/*        <div className="post__author">*/}
            {/*            <a className="post__author-link" href="#" title="Автор">*/}
            {/*                <div className="post__avatar-wrapper">*/}
            {/*                    <img*/}
            {/*                        className="post__author-avatar"*/}
            {/*                        src="img/userpic-larisa-small.jpg"*/}
            {/*                        alt="Аватар пользователя"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div className="post__info">*/}
            {/*                    <b className="post__author-name">*/}
            {/*                        Лариса Роговая*/}
            {/*                    </b>*/}
            {/*                    <time*/}
            {/*                        className="post__time"*/}
            {/*                        dateTime="2019-03-30"*/}
            {/*                    >*/}
            {/*                        Месяц назад*/}
            {/*                    </time>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="post__indicators">*/}
            {/*            <div className="post__buttons">*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--likes button"*/}
            {/*                    href="#"*/}
            {/*                    title="Лайк"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="20" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    /!*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*!/*/}
            {/*                    /!*     height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart-active"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>250</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество лайков*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--comments button"*/}
            {/*                    href="#"*/}
            {/*                    title="Комментарии"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="19" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-comment"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>25</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество комментариев*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
            {/*</article>*/}

            {/*<article className="popular__post post post-photo">*/}
            {/*    <header className="post__header">*/}
            {/*        <h2>*/}
            {/*            <a href="#">Наконец, обработал фотки!</a>*/}
            {/*        </h2>*/}
            {/*    </header>*/}
            {/*    <div className="post__main">*/}
            {/*        <div className="post-photo__image-wrapper">*/}
            {/*            <img*/}
            {/*                src="img/rock-medium.jpg"*/}
            {/*                alt="Фото от пользователя"*/}
            {/*                width="360"*/}
            {/*                height="240"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <footer className="post__footer">*/}
            {/*        <div className="post__author">*/}
            {/*            <a className="post__author-link" href="#" title="Автор">*/}
            {/*                <div className="post__avatar-wrapper">*/}
            {/*                    <img*/}
            {/*                        className="post__author-avatar"*/}
            {/*                        src="img/userpic-larisa-small.jpg"*/}
            {/*                        alt="Аватар пользователя"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div className="post__info">*/}
            {/*                    <b className="post__author-name">*/}
            {/*                        Лариса Роговая*/}
            {/*                    </b>*/}
            {/*                    <time*/}
            {/*                        className="post__time"*/}
            {/*                        dateTime="2019-03-30"*/}
            {/*                    >*/}
            {/*                        Месяц назад*/}
            {/*                    </time>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="post__indicators">*/}
            {/*            <div className="post__buttons">*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--likes button"*/}
            {/*                    href="#"*/}
            {/*                    title="Лайк"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="20" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    /!*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*!/*/}
            {/*                    /!*     height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart-active"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>250</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество лайков*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--comments button"*/}
            {/*                    href="#"*/}
            {/*                    title="Комментарии"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="19" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-comment"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>25</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество комментариев*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
            {/*</article>*/}

            {/*<article className="popular__post post post-quote">*/}
            {/*    <header className="post__header">*/}
            {/*        <h2>*/}
            {/*            <a href="#">Цитата дня</a>*/}
            {/*        </h2>*/}
            {/*    </header>*/}
            {/*    <div className="post__main">*/}
            {/*        <blockquote>*/}
            {/*            <p>*/}
            {/*                Тысячи людей живут без любви, но никто — без воды.*/}
            {/*            </p>*/}
            {/*            <cite>Xью Оден</cite>*/}
            {/*        </blockquote>*/}
            {/*    </div>*/}
            {/*    <footer className="post__footer">*/}
            {/*        <div className="post__author">*/}
            {/*            <a className="post__author-link" href="#" title="Автор">*/}
            {/*                <div className="post__avatar-wrapper">*/}
            {/*                    <img*/}
            {/*                        className="post__author-avatar"*/}
            {/*                        src="img/userpic-larisa-small.jpg"*/}
            {/*                        alt="Аватар пользователя"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div className="post__info">*/}
            {/*                    <b className="post__author-name">*/}
            {/*                        Лариса Роговая*/}
            {/*                    </b>*/}
            {/*                    <time*/}
            {/*                        className="post__time"*/}
            {/*                        dateTime="2019-03-30"*/}
            {/*                    >*/}
            {/*                        Месяц назад*/}
            {/*                    </time>*/}
            {/*                </div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        <div className="post__indicators">*/}
            {/*            <div className="post__buttons">*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--likes button"*/}
            {/*                    href="#"*/}
            {/*                    title="Лайк"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="20" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    /!*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*!/*/}
            {/*                    /!*     height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-heart-active"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>250</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество лайков*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    className="post__indicator post__indicator--comments button"*/}
            {/*                    href="#"*/}
            {/*                    title="Комментарии"*/}
            {/*                >*/}
            {/*                    /!*<svg className="post__indicator-icon" width="19" height="17">*!/*/}
            {/*                    /!*    <use xlink:href="#icon-comment"></use>*!/*/}
            {/*                    /!*</svg>*!/*/}
            {/*                    <span>25</span>*/}
            {/*                    <span className="visually-hidden">*/}
            {/*                        количество комментариев*/}
            {/*                    </span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </footer>*/}
            {/*</article>*/}
        </>
    );
};
