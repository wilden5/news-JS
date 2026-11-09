export interface INewsArticle {
    source: {
        title: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface INewsResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: INewsArticle[];
}
