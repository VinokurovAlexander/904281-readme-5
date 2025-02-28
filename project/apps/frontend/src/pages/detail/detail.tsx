import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Post } from '@project/types';
import { getPostById } from '../../api';
import { Layout } from '../../components';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    ListItem,
    ListItemText,
    Typography,
    List,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';

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
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FavoriteIcon
                                        sx={{ mr: 1, color: 'red' }}
                                    />
                                    <Typography variant="body2">
                                        {post.likes.length}
                                    </Typography>
                                </Box>
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
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <RepeatIcon
                                        sx={{ mr: 1, color: 'green' }}
                                    />
                                    <Typography variant="body2">
                                        {post.reposts.length}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Комментарии */}
                            <Typography variant="h6" gutterBottom>
                                Комментарии
                            </Typography>
                            <List>
                                {post.comments.map((comment) => (
                                    <ListItem
                                        key={comment.id}
                                        alignItems="flex-start"
                                    >
                                        <Avatar
                                            sx={{
                                                bgcolor: 'primary.main',
                                                mr: 2,
                                            }}
                                            //@ts-expect-error
                                            src={comment.user.photo}
                                        />

                                        <ListItemText
                                            //@ts-expect-error
                                            primary={`${comment.user.firstname} ${comment.user.lastname}`}
                                            secondary={
                                                <>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                    >
                                                        {comment.text}
                                                    </Typography>
                                                    {/*<Typography*/}
                                                    {/*    variant="caption"*/}
                                                    {/*    color="text.secondary"*/}
                                                    {/*>*/}
                                                    {/*    {new Date(*/}
                                                    {/*        comment.createdAt,*/}
                                                    {/*    ).toLocaleString()}*/}
                                                    {/*</Typography>*/}
                                                </>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            ) : (
                <h2>nothing to display</h2>
            )}
        </Layout>
    );
};
