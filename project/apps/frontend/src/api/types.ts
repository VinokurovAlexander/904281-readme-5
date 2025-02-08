type ErrorCodes = 401 | 403;

export interface ErrorResponse {
    statusCode: ErrorCodes;
    message: string;
    error: string;
}

export interface SuccessfullyResponse<T> {
    statusCode: 200;
    data: T;
}
