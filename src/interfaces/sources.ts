export interface INewsSource {
    id: string | null;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISourcesResponse {
    status: 'ok' | 'error';
    sources: INewsSource[];
}
