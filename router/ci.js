const ci = require("miniprogram-ci");
/**
 * @param {object} params - 小程序的一些参数
 * @param {string} params.appId - appId.
 * @param {string} params.type - 类型.
 * @param {string} params.project - 文件路径(代码的文件路路径).
 * @param {string} params.key - .key 文件的路径.
 * @param {string} params.version - 提审版本号.
 * @param {string} params.desc - 提审备注.
 */
class Ci {
  static deploy(params, fn) {
    return new Promise(async (reslove, reject) => {
      let project = new ci.Project({
        appid: params.appId,
        type: params.type,
        projectPath: params.project,
        privateKeyPath: params.key,
        // appid: 'appid',
        // type: 'miniProgram',
        // projectPath: "D:\\daima\\xxx\\unpackage\\dist\\build\\mp-weixin" 这是uniapp编译的地址,
        // privateKeyPath: "D:\\daima\\key\\appid.key",// 微信公众平台下载
      });

      let res;
      try {
        const option = {
          project,
          version: params.version,
          desc: params.desc,
          // version: '1.0.58',
          // desc: '备注信息',
          setting: {
            es6: true,
            minify: true, // 代码大于2m是否压缩代码
          },
        };
        res = await ci.upload(option);
      } catch (e) {
        return reject(e);
      }
      return reslove(res);
    });
  }
}

module.exports = Ci;
