module.exports = (app) => {

	// Catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	// No stacktraces leaked to user unless in development environment
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
	});
}