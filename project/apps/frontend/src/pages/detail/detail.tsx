import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Post } from '@project/types';
import { getPostById } from '../../api';
import { Layout } from '../../components';
import { Comments } from './comments';
import iconHeartUrl from '../../assets/icon-heart.svg';
import iconCommentUrl from '../../assets/icon-comment.svg';
import iconRepostUrl from '../../assets/icon-repost.svg';

export const Detail = () => {
    const [post, setPost] = useState<Post | null>(null);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }

        getPostById(id)
            .then((response) => {
                if (response.statusCode === 200) {
                    setPost(response.data);
                }
            })
            .catch((e) => console.log('error happened', e.message));
    }, [id]);

    return (
        <Layout>
            <main className="page__main page__main--publication">
                <div className="container">
                    {post ? (
                        <>
                            <h1 className="page__title page__title--publication">
                                {post.title}
                            </h1>
                            <section className="post-details">
                                <h2 className="visually-hidden">Публикация</h2>
                                {/*<div className="post-details__wrapper post-photo">*/}
                                <div className="post-details__wrapper">
                                    <div className="post-details__main-block post post--details">
                                        {/*<div className="post-details__image-wrapper post-photo__image-wrapper">*/}
                                        {/*    <img*/}
                                        {/*        src="img/rock-default.jpg"*/}
                                        {/*        alt="Фото от пользователя"*/}
                                        {/*        width="760"*/}
                                        {/*        height="507"*/}
                                        {/*    />*/}
                                        {/*</div>*/}
                                        <div>{post.content}</div>

                                        <div className="post__indicators">
                                            <div className="post__buttons">
                                                <a
                                                    className="post__indicator post__indicator--likes button"
                                                    href="#"
                                                    title="Лайк"
                                                >
                                                    {/*<svg className="post__indicator-icon post__indicator-icon--like-active" width="20"*/}
                                                    {/*     height="17">*/}
                                                    {/*    <use xlink:href="#icon-heart-active"></use>*/}
                                                    {/*</svg>*/}
                                                    <img
                                                        className="post__indicator-icon"
                                                        width="20"
                                                        height="17"
                                                        src={iconHeartUrl}
                                                    />
                                                    <span>
                                                        {post.likes.length}
                                                    </span>
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
                                                    <span>
                                                        {post.comments.length}
                                                    </span>
                                                    <span className="visually-hidden">
                                                        количество комментариев
                                                    </span>
                                                </a>
                                                <a
                                                    className="post__indicator post__indicator--repost button"
                                                    href="#"
                                                    title="Репост"
                                                >
                                                    <img
                                                        src={iconRepostUrl}
                                                        className="post__indicator-icon"
                                                        width="19"
                                                        height="17"
                                                    />
                                                    <span>
                                                        {post.reposts.length}
                                                    </span>
                                                    <span className="visually-hidden">
                                                        количество репостов
                                                    </span>
                                                </a>
                                            </div>
                                            {/*<span className="post__view">*/}
                                            {/*    500 просмотров*/}
                                            {/*</span>*/}
                                        </div>
                                        {/*<ul className="post__tags">*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">#nature</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">#globe</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">#photooftheday</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">#canon</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">#landscape</a>*/}
                                        {/*    </li>*/}
                                        {/*    <li>*/}
                                        {/*        <a href="#">#щикарныйвид</a>*/}
                                        {/*    </li>*/}
                                        {/*</ul>*/}
                                        <div className="comments">
                                            {/*<form*/}
                                            {/*    className="comments__form form"*/}
                                            {/*    action="#"*/}
                                            {/*    method="post"*/}
                                            {/*>*/}
                                            {/*    <div className="comments__my-avatar">*/}
                                            {/*        <img*/}
                                            {/*            className="comments__picture"*/}
                                            {/*            src="img/userpic-medium.jpg"*/}
                                            {/*            alt="Аватар пользователя"*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*    <div className="form__input-section form__input-section--error">*/}
                                            {/*        <textarea*/}
                                            {/*            className="comments__textarea form__textarea form__input"*/}
                                            {/*            placeholder="Ваш комментарий"*/}
                                            {/*        ></textarea>*/}
                                            {/*        <label className="visually-hidden">*/}
                                            {/*            Ваш комментарий*/}
                                            {/*        </label>*/}
                                            {/*        <button*/}
                                            {/*            className="form__error-button button"*/}
                                            {/*            type="button"*/}
                                            {/*        >*/}
                                            {/*            !*/}
                                            {/*        </button>*/}
                                            {/*        <div className="form__error-text">*/}
                                            {/*            <h3 className="form__error-title">*/}
                                            {/*                Ошибка валидации*/}
                                            {/*            </h3>*/}
                                            {/*            <p className="form__error-desc">*/}
                                            {/*                Это поле обязательно*/}
                                            {/*                к заполнению*/}
                                            {/*            </p>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*    <button*/}
                                            {/*        className="comments__submit button button--green"*/}
                                            {/*        type="submit"*/}
                                            {/*    >*/}
                                            {/*        Отправить*/}
                                            {/*    </button>*/}
                                            {/*</form>*/}
                                            <div className="comments__list-wrapper">
                                                <Comments
                                                    comments={post.comments}
                                                />
                                                {/*<a*/}
                                                {/*    className="comments__more-link"*/}
                                                {/*    href="#"*/}
                                                {/*>*/}
                                                {/*    <span>*/}
                                                {/*        Показать все комментарии*/}
                                                {/*    </span>*/}
                                                {/*    <sup className="comments__amount">*/}
                                                {/*        45*/}
                                                {/*    </sup>*/}
                                                {/*</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="post-details__user user">*/}
                                    {/*    <div className="post-details__user-info user__info">*/}
                                    {/*        <div className="post-details__avatar user__avatar">*/}
                                    {/*            <a*/}
                                    {/*                className="post-details__avatar-link user__avatar-link"*/}
                                    {/*                href="#"*/}
                                    {/*            >*/}
                                    {/*                <img*/}
                                    {/*                    className="post-details__picture user__picture"*/}
                                    {/*                    src="img/userpic-elvira.jpg"*/}
                                    {/*                    alt="Аватар пользователя"*/}
                                    {/*                />*/}
                                    {/*            </a>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="post-details__name-wrapper user__name-wrapper">*/}
                                    {/*            <a*/}
                                    {/*                className="post-details__name user__name"*/}
                                    {/*                href="#"*/}
                                    {/*            >*/}
                                    {/*                <span>*/}
                                    {/*                    Эльвира Хайпулинова*/}
                                    {/*                </span>*/}
                                    {/*            </a>*/}
                                    {/*            <time*/}
                                    {/*                className="post-details__time user__time"*/}
                                    {/*                dateTime="2014-03-20"*/}
                                    {/*            >*/}
                                    {/*                5 лет на сайте*/}
                                    {/*            </time>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="post-details__rating user__rating">*/}
                                    {/*        <p className="post-details__rating-item user__rating-item user__rating-item--subscribers">*/}
                                    {/*            <span className="post-details__rating-amount user__rating-amount">*/}
                                    {/*                1856*/}
                                    {/*            </span>*/}
                                    {/*            <span className="post-details__rating-text user__rating-text">*/}
                                    {/*                подписчиков*/}
                                    {/*            </span>*/}
                                    {/*        </p>*/}
                                    {/*        <p className="post-details__rating-item user__rating-item user__rating-item--publications">*/}
                                    {/*            <span className="post-details__rating-amount user__rating-amount">*/}
                                    {/*                556*/}
                                    {/*            </span>*/}
                                    {/*            <span className="post-details__rating-text user__rating-text">*/}
                                    {/*                публикаций*/}
                                    {/*            </span>*/}
                                    {/*        </p>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="post-details__user-buttons user__buttons">*/}
                                    {/*        <button*/}
                                    {/*            className="user__button user__button--subscription button button--main"*/}
                                    {/*            type="button"*/}
                                    {/*        >*/}
                                    {/*            Подписаться*/}
                                    {/*        </button>*/}
                                    {/*        <a*/}
                                    {/*            className="user__button user__button--writing button button--green"*/}
                                    {/*            href="#"*/}
                                    {/*        >*/}
                                    {/*            Сообщение*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </section>
                        </>
                    ) : (
                        <h2>nothing to display</h2>
                    )}
                </div>
            </main>
        </Layout>
    );
};
