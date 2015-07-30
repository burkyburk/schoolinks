var Info = require('./models/info');

function getInfos(res){
	Info.find(function(err, infos) {

			if (err)
				res.send(err)

			res.json(infos);
		});
};

module.exports = function(app) {


	app.get('/api/infos', function(req, res) {

		getInfos(res);
	});

	app.post('/api/infos', function(req, res) {

		Info.create({
			text : req.body.text,
			done : false
		}, function(err, info) {
			if (err)
				res.send(err);

			getInfos(res);
		});

	});

	app.delete('/api/infos/:info_id', function(req, res) {
		Info.remove({
			_id : req.params.info_id
		}, function(err, info) {
			if (err)
				res.send(err);

			getInfos(res);
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); 
	});
};
