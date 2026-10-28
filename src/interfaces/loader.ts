export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
}

export interface IOptions {
    [key: string]: string;
}

export interface IRequestOptions {
    endpoint: string;
    options?: IOptions;
}

export type Callback<T> = (data: T) => void;
