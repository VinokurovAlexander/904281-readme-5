import { useState, FC } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { addComment } from '../../api';
import { selectUser, useAppSelector } from '../../store';
import { Comment } from '@project/types';

interface AddCommentProps {
    postId: string;
    onAddComment: (comment: Comment) => void;
}

type State = 'idle' | 'loading' | 'error' | 'fulfilled';

export const AddComment: FC<AddCommentProps> = ({ onAddComment, postId }) => {
    const [state, setState] = useState<State>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [newComment, setNewComment] = useState('');

    const user = useAppSelector(selectUser);

    const setError = (text: string) => {
        setState('error');
        setErrorMessage(text);
    };

    const handleClick = () => {
        if (!user) {
            return;
        }

        if (newComment.trim().length > 500) {
            setError('Комментарий не должен превышать 500 символов'); // Установка ошибки
            return;
        }

        setState('loading');

        addComment({ userId: user.id, text: newComment, postId })
            .then((response) => {
                if (response.statusCode === 200) {
                    onAddComment(response.data);
                    setState('fulfilled');
                    setNewComment('');
                } else {
                    setError(response.message);
                }
            })
            .catch((e) => {
                setError(e.message);
            });
    };

    return (
        <>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Добавить комментарий..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleClick}
                    disabled={!newComment.trim() || state === 'loading'}
                >
                    Отправить
                </Button>
            </Box>
            {errorMessage && (
                <Typography variant="body2" color="error" sx={{ mt: 1, ml: 1 }}>
                    {errorMessage}
                </Typography>
            )}
        </>
    );
};
