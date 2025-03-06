import {
    Container,
    Typography,
    Box,
    CardContent,
    Card,
    IconButton,
    Avatar,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Layout } from '../../components';
import { useEffect, useState } from 'react';
import { PostWithUser } from '@project/types';
import { getPosts } from '../../api';
import { Link } from 'react-router-dom';

export const Popular = () => {
    const [posts, setPosts] = useState<PostWithUser[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPosts()
            .then((response) => {
                if (response.statusCode === 200) {
                    setPosts(response.data);
                } else {
                    setError(response.message);
                }
            })
            .catch((e) => setError(e.message));
    }, []);

    if (error) {
        return (
            <Layout>
                <Container sx={{ mt: 4 }}>
                    <Typography variant="h6" color="error" align="center">
                        Ошибка: {error}
                    </Typography>
                </Container>
            </Layout>
        );
    }

    if (posts.length === 0) {
        return (
            <Layout>
                <Container sx={{ mt: 4 }}>
                    <Typography variant="h5" align="center">
                        Нет постов для отображения
                    </Typography>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <Container sx={{ mt: 4 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 3,
                    }}
                >
                    {posts.map((post) => (
                        <Link
                            to={`/detail/${post.id}`}
                            style={{ textDecoration: 'none' }}
                            key={post.id}
                        >
                            <Card>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{ mb: 2 }}
                                    >
                                        {post.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {post.content}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2,
                                        }}
                                    >
                                        <Avatar
                                            src={post.user.photo}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                mr: 2,
                                            }}
                                        />
                                        <Typography variant="body1">
                                            {`${post.user.firstname} ${post.user.lastname}`}
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {/*<IconButton aria-label="likes" disabled>*/}
                                        {/*    <FavoriteIcon sx={{ mr: 1 }} />*/}
                                        {/*    <Typography variant="body2">*/}
                                        {/*        {post.likes.length}*/}
                                        {/*    </Typography>*/}
                                        {/*</IconButton>*/}

                                        <IconButton
                                            aria-label="comments"
                                            disabled
                                        >
                                            <CommentIcon sx={{ mr: 1 }} />
                                            <Typography variant="body2">
                                                {post.comments.length}
                                            </Typography>
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </Box>
            </Container>
        </Layout>
    );
};
