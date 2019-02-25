import { Router } from 'express';
import * as ParserController from './parser.controller';
const router = new Router();

router.route('/parser').post(ParserController.getRawData);

export default router;