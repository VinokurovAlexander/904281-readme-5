import { MessageCard } from './card-message';
import { IconMessage } from './icon-message';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const Error = () => (
    <MessageCard
        icon={<IconMessage icon={<ErrorOutlineIcon />} color="error.main" />}
        title="Ошибка сервера"
        message="Произошла непредвиденная ошибка на сервере. Пожалуйста, попробуйте ещё раз позже."
    />
);
