import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as dotenv from 'dotenv';

import * as bodyparser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as json from 'koa-json';

dotenv.config();


const app = new Koa();
const router = new Router();

// Our App
router.get('/',(ctx, next) => {
    ctx.body = {msg : 'Hello Devs'}
    console.log(`ctx = `, ctx.body)
    return "hello Devs"
    // await next();
})
router.get('/test',(ctx, next) => {
    ctx.body = {msg : 'Hello Testers'}
    console.log(`ctx = `, ctx.body)
    // return "hello Devs"
    // await next();
})


// Setting our middleware
app.use(logger());
app.use(json());

// Routes for our application
app.use(router.routes()).use(router.allowedMethods());

// Server
app.listen(3000, () => {
    console.log(`Server running at port 3000`)
})