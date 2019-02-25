import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

module.exports = function(app) {
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
}