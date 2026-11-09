import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsResponse } from '../../interfaces/news';
import { ISourcesResponse } from '../../interfaces/sources';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e: Event): void =>
                this.controller.getNews(e as PointerEvent, (data: INewsResponse): void => this.view.drawNews(data))
            );
        this.controller.getSources((data: ISourcesResponse): void => this.view.drawSources(data));
    }
}

export default App;
