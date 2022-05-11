const router = require("koa-router")();
const Ci = require("./ci");

router.post("/auto", async (ctx) => {
  let postData = ctx.request.body;
  console.log(postData);
  let result = {
    code: "200",
    data: "成功",
    message: "成功",
  };
  const { appId } = postData;
  if (!appId) {
    result = {
      code: "9000",
      data: "",
      message: "appId不存在",
    };
    return (ctx.response.body = result);
  }
  const res = await Ci.deploy(postData).catch((e) => {
    return "失败";
  });
  if (res == "失败") {
    result.code = 9000;
    result.message = "失败";
  }
  result.data = res;
  ctx.response.body = result;
});

export default router;
