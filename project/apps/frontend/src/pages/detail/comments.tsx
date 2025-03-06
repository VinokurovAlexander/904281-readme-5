import {
    Avatar,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { FC } from 'react';
import { Comment } from '@project/types';

interface Comments {
    data: Comment[];
}

export const Comments: FC<Comments> = ({ data }) => {
    return (
        <List>
            {data.map((comment) => (
                <ListItem key={comment.id} alignItems="flex-start">
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
    );
};
