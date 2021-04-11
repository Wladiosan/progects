const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const views = require('koa-views')
const globalRouter = require('.')
const app = new Koa();

// response
app.use(ctx => {});

app.listen(3001);