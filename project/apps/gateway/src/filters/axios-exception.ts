import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { AxiosError } from 'axios';

interface ServiceResponseData {
    statusCode: number;
    message: string;
}

@Catch(AxiosError)
export class AxiosExceptionFilter implements ExceptionFilter {
    catch(exception: AxiosError<ServiceResponseData>, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const data = exception.response?.data;

        const status = data?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
        const message = data?.message || 'Internal server error';

        response.status(status).json({ statusCode: status, message });
    }
}
