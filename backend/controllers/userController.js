const User = require('../models/User');

exports.linkUser = function (request, response) {
    let id = request.params.id;
    User.findById(id, function (err, doc) {
        if (err)  console.log(err);
        response.json(doc);
    })
}
exports.deleteUser = function (request, response) {
    let id=request.params.id;
    User.findByIdAndDelete(id,function(err,doc){
        if(err)  console.log(err);
        response.json(doc);
    })
}
exports.changeUser = function (request,response){
    let id=request.params.id;
    User.findByIdAndUpdate(id, request.body,function(err,doc){
        if(err)  console.log(err);
        response.json(doc);
    })
}
exports.addUser = function (request, response){
    var user = new User();
    user.name = request.body.user.name;
    user.age = request.body.user.age;
    user.weight = request.body.user.weight;
    user.save(function (err) {
        if (err) {
            response.json(false);
        } else {
            console.log("Сохранен объект user", user);
            response.json(true);
        }
    });
}
