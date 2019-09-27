import axios from 'axios/dist/axios';
import layer from './layer'
export const loadAds = ({ autoRd=true }) => {
    loadLib(()=>{
        axios.get('http://114.116.222.100/nbadApi/info')
        .then(res=>{
            console.log(res,'res')
            let adata = res.data
            adsRedirect({autoRd,adata})
        }).catch(error=>{
            let adata = {
                "articleUrl": "https://mp.weixin.qq.com/s/cS_pd0lPLCv3in1Kam-smw",
                "monitorUrl": "http://114.116.222.100/nbadApi/moni?channel=pay&oid=1"
                }
            adsRedirect({autoRd,adata})
        })
    })
}

/**
 * 对于不支持Promise的浏览器加载Promise
 * @param {*} cb 
 */
const loadLib = (cb) => {
    if(!window.Promise) {
        var script = document.createElement('script');
        script.onload = cb;
        script.src = 'https://cdn.bootcss.com/es6-promise/4.1.1/es6-promise.auto.min.js';
        document.body.appendChild(script);
    } else {
        cb()
    }
}

/**
 * 
 * @param {Object}} param
 * @param {String} param.autoRd 默认自动跳转
 *  
 */
const adsRedirect =( { autoRd=true, adata={} } ) => {
    if (!adata || !adata.articleUrl) {
        console.error('获取 ad 链接错误')
        return ''
    }
    if (autoRd && adata){

        adata.monitorUrl && axios.get(adata.monitorUrl)
        window.location.href = adata.articleUrl
    } else {
        layer.open({
            content: '好文推荐',
            btn: '去看看',
            shadeClose: true,
            yes: function(){
                adata.monitorUrl && axios.get(adata.monitorUrl)
                window.location.href = adata.articleUrl
            }
          });
    }
}



