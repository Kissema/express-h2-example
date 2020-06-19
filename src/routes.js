//const usersRoutes = require('./users.routes');

module.exports = (app)=>{
    app.get('/test', (req, res)=>{
        res.json('test route is working!')
    })
 // app.use('/users/', usersRoutes)
}