const Router = require('koa-router')

const controllers = require('./controllers.js')

const router = new Router()

router.get('home', controllers.profile)

module.exports = {
    router
}