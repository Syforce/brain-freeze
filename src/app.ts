import { WaterfallGateService } from 'waterfall-gate'

class App {
    private waterfallGateService: WaterfallGateService;

    constructor() {
        this.waterfallGateService = WaterfallGateService.getInstance();

        this.init();
    }

    private init() {
        this.initServer();
    }

    private initServer() {
        this.waterfallGateService.init({
            port: +process.env.PORT || 8081
        });
    }
}

export default new App();