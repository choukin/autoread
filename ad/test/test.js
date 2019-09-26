var expect = require('expect.js')

// js 测试源文件
var base = require('../src/index.js')
// ts 测试编译后文件
// var base = require('../src/index.ts');

describe('单元测试', function () {
  this.timeout(1000)
  describe('获取用户信息', function () {
    it('监听', function (done) {
      base.featch()
      window.$publisher.on('userreaday', function (data) {
        expect(data.token).to.equal('1234')
        done()
      })
    })
  })

  describe('版本号判断', function () {
    it('相等', function () {
      console.log(base.versio)
      expect(base.version).to.equal('1.0.0')
    })
  })

  describe('功能2', function () {
    it('不相等', function () {
      expect(base.version).not.to.equal(1)
    })
  })
})
