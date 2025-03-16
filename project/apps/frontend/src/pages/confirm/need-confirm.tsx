import { Layout } from '../../components';
import { EmailConfirmation } from './email-confirmaiton';
import { IconMessage } from './icon-message';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const NeedConfirm = () => {
    return (
        <Layout>
            <EmailConfirmation
                defaultIcon={<IconMessage icon={<MailOutlineIcon />} />}
                successIcon={
                    <IconMessage
                        icon={<CheckCircleOutlineIcon />}
                        color="success.main"
                    />
                }
                errorIcon={
                    <IconMessage
                        icon={<ErrorOutlineIcon />}
                        color="error.main"
                    />
                }
                defaultTitle="Подтвердите ваш email"
                successTitle="Письмо отправлено!"
                errorTitle="Ошибка отправки"
                defaultMessage={`
                    Мы отправили письмо с ссылкой для активации вашего аккаунта на вашу
                    почту. Пожалуйста, перейдите по ссылке, чтобы завершить регистрацию.

                    Если вы не получили письмо, проверьте папку "Спам" или запросите
                    повторную отправку письма.
                `}
                successMessage="Новое письмо с ссылкой для активации успешно отправлено на вашу почту."
                errorMessage="Произошла ошибка при отправке письма. Пожалуйста, попробуйте ещё раз."
                buttonLabel="Отправить письмо повторно"
            />
        </Layout>
    );
};
