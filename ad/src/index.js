import axios from 'axios/dist/axios';
import qs from 'qs'
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
            console.log(adata)
            adsRedirect({autoRd,adata})
        })
        let adata = {
            "articleUrl": "https://mp.weixin.qq.com/s/cS_pd0lPLCv3in1Kam-smw",
            "monitorUrl": "http://114.116.222.100/nbadApi/moni?channel=pay&oid=1"
            }
        console.log(adata)
    })
}

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
 * 跳转到文章方式
 * @param {*} param0 
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

    }
}


