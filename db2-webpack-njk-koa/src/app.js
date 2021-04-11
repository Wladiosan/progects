const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const views = require('koa-views')
const globalRouter = require('./router')

const app = new Koa();
const router = new Router()

const render = views(path.join(__dirname, './templates'),
    {
        extension: 'njk',
        map: {
            njk: 'nunjucks'
        }
    }
)

app.use(render)

router.use('/', globalRouter.router.routes())

app.use(router.routes())

app.listen(3001);