const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
import router from "./router/router"

const app = new Koa()

app.use(cors({origin:'*'}));
app.use(bodyParser()); // 解析request的body
app.use(router.routes());

app.use(router.allowedMethods());


// 端口端口端口端口 localhost:端口||127.0.0.1:端口
app.listen(7235);
console.log('app started at port 7235...')
