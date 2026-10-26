import './news.css';
import { INewsArticle } from '../../../interfaces/news';

class News {
    draw(data: INewsArticle[]): void {
        const news: INewsArticle[] =
            data.length >= 10 ? data.filter((_item: INewsArticle, idx: number): boolean => idx < 10) : data;
        const newsContainer = document.querySelector('.news') as HTMLElement;
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: INewsArticle, idx: number): void => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title')!.textContent = item.title;
            newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
            newsClone.querySelector('.news__description-content')!.textContent = item.description;
            newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
