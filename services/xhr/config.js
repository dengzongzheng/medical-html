export const rootPath = process.env.NODE_ENV=="production"?"http://127.0.0.1:7010/":
    process.env.NODE_ENV=="test"?"http://sit.sswjjd.cn/":"http://127.0.0.1:7010/";


