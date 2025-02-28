import {
    CallHandler,
    ExecutionContext,
    Logger,
    NestInterceptor,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';

export class RequestIdInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        const requestId = randomUUID();

        const request = context.switchToHttp().getRequest();
        request.headers['X-Request-Id'] = requestId;

        Logger.log(
            `[${request.method}: ${request.url}]: RequestID is ${requestId}`,
        );

        return next.handle();
    }
}
