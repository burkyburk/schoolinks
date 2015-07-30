var mongoose = require('mongoose');

module.exports = mongoose.model('Info', {
	text : {type : String, default: ''}
});
