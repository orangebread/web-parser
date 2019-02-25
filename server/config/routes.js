import parser from '../components/parser/parser.routes';

module.exports = function(app) {
	app.use('/api', parser);

	// Invalid requests go here
	app.use('*', function(req, res){
		res.status(404)
			.json('This is not the resource you are looking for. See http://localhost:3000 for client');
	});
}