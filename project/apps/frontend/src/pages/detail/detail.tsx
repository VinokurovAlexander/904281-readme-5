import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Comment, Post } from '@project/types';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { getPostById } from '../../api';
import { Layout } from '../../components';
import { Comments } from './comments';
import { AddComment } from './add-comment';
import { selectUser, useAppSelector } from '../../store';

export const Detail = () => {
    const [post, setPost] = useState<Post | null>(null);
    const user = useAppSelector(selectUser);

    const { id } = useParams();

    const handleCommentAdd = (newComment: Comment) => {
        if (!post) {
            return;
        }

        const commentWithUserData = {
            ...newComment,
            user,
        };

        const newComments = [...post.comments, commentWithUserData];

        setPost({ ...post, comments: newComments });
    };

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
            {post ? (
                <Box sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
                    <Card>
                        <CardContent>
                            {/* Заголовок поста */}
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                            >
                                {post.title}
                            </Typography>

                            {/* Содержимое поста */}
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ minHeight: '150px', mb: 2 }}
                            >
                                {post.content}
                            </Typography>

                            {/* Разделитель */}
                            <Divider sx={{ my: 3 }} />

                            {/* Лайки, комментарии, репосты */}
                            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                                {/*<Box*/}
                                {/*    sx={{*/}
                                {/*        display: 'flex',*/}
                                {/*        alignItems: 'center',*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    <FavoriteIcon*/}
                                {/*        sx={{ mr: 1, color: 'red' }}*/}
                                {/*    />*/}
                                {/*    <Typography variant="body2">*/}
                                {/*        {post.likes.length}*/}
                                {/*    </Typography>*/}
                                {/*</Box>*/}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <CommentIcon
                                        sx={{ mr: 1, color: 'primary.main' }}
                                    />
                                    <Typography variant="body2">
                                        {post.comments.length}
                                    </Typography>
                                </Box>
                                {/*<Box*/}
                                {/*    sx={{*/}
                                {/*        display: 'flex',*/}
                                {/*        alignItems: 'center',*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    <RepeatIcon sx={{ mr: 1 }} />*/}
                                {/*    <Typography variant="body2">*/}
                                {/*        {post.reposts.length}*/}
                                {/*    </Typography>*/}
                                {/*</Box>*/}
                            </Box>

                            {/* Комментарии */}
                            <Typography variant="h6" gutterBottom>
                                Комментарии
                            </Typography>
                            <Comments data={post.comments} />
                            <AddComment
                                postId={post.id}
                                onAddComment={handleCommentAdd}
                            />
                        </CardContent>
                    </Card>
                </Box>
            ) : (
                <h2>nothing to display</h2>
            )}
        </Layout>
    );
};
