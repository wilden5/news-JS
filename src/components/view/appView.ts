import News from './news/news';
import Sources from './sources/sources';
import { INewsArticle, INewsResponse } from '../../interfaces/news';
import { INewsSource, ISourcesResponse } from '../../interfaces/sources';

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsResponse): void {
        const values: INewsArticle[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourcesResponse): void {
        const values: INewsSource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
