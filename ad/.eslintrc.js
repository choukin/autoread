module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": false
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "parser": 'babel-eslint',
        "sourceType": "module"
    },
    "globals": { // 设置全局变量
        "Vue":true,
        "$": true,
        "Navigation":true,
        "closeWebView": true,
        "TDAPP":true,
        "jiuFuWallet": true,
        "Swiper" : true,
        "Context" : true,
        "Tool": true,
        "toast": true,
        "messageBox": true,
        "gio": true,
        "sa": true,
        "wx": true,
        "channel": true,
        "isQBChannel": true,
        "isWKChannel": true,
        "isAppEnv": true,
        "isQBApp": true,
        "isWKApp": true,
        "appName": true,
        "isWeChat": true
      },     
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": "off",
        "max-classes-per-file": ["error", 2],
    }
};
