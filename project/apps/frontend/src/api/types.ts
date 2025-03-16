type ErrorCodes = 400 | 401 | 403 | 404;

export interface ErrorResponse {
    statusCode: ErrorCodes;
    message: string;
    error: string;
}

export interface SuccessfullyResponse<T> {
    statusCode: 200;
    data: T;
}

export type ApiResponse<T> = SuccessfullyResponse<T> | ErrorResponse;
