import { Request, Response } from 'express';
import { VideosService } from '../services/videosService';

class VideosController {
    private _service: VideosService;

    constructor() {
        this._service = new VideosService();
    }

    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page): 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 1;
            let result = await this._service.getAll(page, qtd);
            response.status(200).json({ result });
        } catch (error: any) {
            response.status(500).json({ error: error.message || error.toString()})
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            let result = await this._service.get(_id);
            response.status(200).json({ result });
        } catch (error: any) {
            response.status(500).json({ error: error.message || error.toString() });
            }
        }
}

export default new VideosController;