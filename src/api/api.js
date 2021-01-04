import request from '@/untils/request'
export function qrcode(data) {
    return request({
        url: '/login/login',
        method: 'post',
        data
    })
}
