import { NewsService } from "../services/newsService";
import { Request, Response } from "express";

class NewsController {
    private _service: NewsService;

    constructor() {
        this._service = new NewsService();
    }

    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            let result = await this._service.getAll(page, qtd);
            response.status(200).json({ result });
        } catch (error: any) {
            response.status(500).json({ error: error.message || error.toString() })
        }
    }
}

export default new NewsController();