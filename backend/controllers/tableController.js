const User = require('../models/User');

exports.getUser = function(request, response){
    let users=[];
    User.find({}, function (err, docs) {
        if (err) return console.log(err);
        users = docs;
        response.json(users);
    })
}