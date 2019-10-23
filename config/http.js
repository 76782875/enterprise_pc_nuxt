//axios 封装
import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'
import { Loading, Message } from 'element-ui'
import Mock from 'mockjs';
//引入api 全局配置
import apiConfig from './api.config'

var tenantId = 0;
var auth;
var isOnline = false;

var  fire_globalKey = "fire_";

axios.interceptors.request.use(config => {
    // if(config.url == "/remoteApi/tool/record/uploadExcel"){
    //     config.headers["Content-Type"] = "multipart/form-data"
    // }
    return config
}, error => {
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    //响应拦截
    return response
}, error => {
    Message.error({
        message: '请求失败'
    })
    return Promise.resolve(error.response)
})

function checkStatus(response) {
    if (response && response.data) {
        return response.data
    }
    if (response && response.data.code == "success") {
        return response
    }
}

function checkCode(error) {
    //==============  错误处理  ====================
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '请求错误(400)';
                break;
            case 401:
                error.message = '未授权，请重新登录(401)';
                break;
            case 403:
                error.message = '拒绝访问(403)';
                break;
            case 404:
                error.message = '请求出错(404)';
                break;
            case 408:
                error.message = '请求超时(408)';
                break;
            case 500:
                error.message = '服务器错误(500)';
                break;
            case 501:
                error.message = '服务未实现(501)';
                break;
            case 502:
                error.message = '网络错误(502)';
                break;
            case 503:
                error.message = '服务不可用(503)';
                break;
            case 504:
                error.message = '网络超时(504)';
                break;
            case 505:
                error.message = 'HTTP版本不受支持(505)';
                break;
            default:
                error.message = `连接出错(${error.response.status})!`;
        }
        Message.error({
            message: error.message
        })
    } else {
        error.message = '连接服务器失败!';
    }
    return error
}

export default {
    upData(url,params,timeout){
        let token = Cookie.getJSON("auth") ? Cookie.getJSON("auth") : "";
        let time = timeout ? timeout : 60000;
        let param = new FormData();
        for (var key in params) {
            param.append(key, params[key])
        }
        console.log(99998888,params)
        return axios({
            method: 'post',
            url: url,
            data: params,
            timeout: time,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'multipart/form-data',
                'JSESSIONID': token.accessToken
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).catch(
            (res) => {
                return checkCode(res)
            }
        )
    },
    post(url, params, timeout) {
        let token = Cookie.getJSON("auth") ? Cookie.getJSON("auth") : "";
        let time = timeout ? timeout : 60000;
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(params),
            timeout: time,
            contentType: false,
            processData: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'JSESSIONID': token.accessToken
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).catch(
            (res) => {
                return checkCode(res)
            }
        )
    },
    newPost(url, params, timeout) {
        let token = Cookie.getJSON("auth") ? Cookie.getJSON("auth") : "";
        let time = timeout ? timeout : 60000;
        return axios({
            method: 'post',
            url: url,
            data:params,
            timeout: time,
            contentType: false,
            processData: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'JSESSIONID': token.accessToken
            },
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).catch(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get(url, params, timeout) {
        let token = Cookie.getJSON("auth") ? Cookie.getJSON("auth") : "";
        var timeout = timeout ? timeout : 60000;
        return axios({
            method: 'get',
            url: url,
            params, // get 请求时带的参数
            timeout: timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'JSESSIONID': token.accessToken
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).catch(
            (res) => {
                return checkCode(res)
            }
        )
    },
    isOnline: isOnline,
    url: 'http://60.174.207.208:7024/gsafety-cloud/',
    imgUrl: 'http://112.27.198.15/',
    auth: Cookie.getJSON("auth"),
    ajaxUrl: apiConfig.forent_api.ajaxUrl,
    getGlobalVal(key) {
        return Cookie.getJSON(fire_globalKey + key);
    },
    setGlobalVal(key, value) {
        return Cookie.set(fire_globalKey + key, value);
    },
    removeGlobalVal(key, value) {
        return Cookie.remove(fire_globalKey + key, value);
    },
    //日期截取
    changeDate(date) {
        var arr = []
        for (var i = 0; i < date.length; i++) {
            arr.push(date[i].slice(5))
        }
        return arr;
    },
    apiConfig,
    forent_url: apiConfig.forent_api,
    fire_globalKey: fire_globalKey,
    fire_manager_role: {
        qyglyRoleId: '2c91a663648ddd0d0164abc26071000c', //企业管理员角色id 新增
        qyglyRoleName: '集团超级管理员',
        zglyRoleId: '2c91a663648ddd0d0164abc39405000d', //子管理员 角色id 新增
        zglyRoleName: '企业超级管理员',
        qyaqglyRoleId: 'ff808081614234ef0161427539250022', //现有
        qyaqglyRoleName: '企业安全管理员',
        qyaqzyRoleId: '2c91a66364b0ad890164d62c02b102d9', //新增
        qyaqzyRoleName: '企业安全专员',
        snzyjsRoleId: '2c91a663653c8582016589bd393803a9', //苏宁专用角色
        snzyjsRoleName: '苏宁专用角色',
        kdlaRoleId: '2c9078b1669a97a50166f0e320e901bc', //科大立安角色
        kdlaRoleName: '科大立安',
        lyzyjsRoleId: '2c938c5966a9c72e01673f98569d00bd', //临沂专用角色
        lyzyjsRoleName: '临沂专用角色'
    }

    //http://192.168.90.241:8055/upmsPlatform/swagger-ui.html
}