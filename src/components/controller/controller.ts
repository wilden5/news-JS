import AppLoader from './appLoader';
import { Callback } from '../../interfaces/loader';
import { INewsResponse } from '../../interfaces/news';
import { ISourcesResponse } from '../../interfaces/sources';

class AppController extends AppLoader {
    public getSources(callback: Callback<ISourcesResponse>): void {
        super.getResp<ISourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: PointerEvent, callback: Callback<INewsResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id')!;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId!);
                    super.getResp<INewsResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
