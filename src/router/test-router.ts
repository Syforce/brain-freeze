import { AbstractRouter } from "waterfall-gate";

export class TestRouter extends AbstractRouter {
    protected initRoutes() {
        this.get({
            url: '/api/test',
            callback: this.sayHello.bind(this)
        });
    }

    private sayHello() {
        return 'yo';
    }
}