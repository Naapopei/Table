module.exports = (app) =>{
    require('./registrationRouter')(app);
    require('./tableRouter')(app);
}