// 导入axios实例
import httpRequest from '@/request/index'

// 定义接口的传参
const param =  {
	userID: 1111,
	userName: "sxsxs"
}

// 获取用户信息
export function apiGetUserInfo(param) {
    return httpRequest({
		url: 'your api url',
		method: 'post',
		data: param,
	})
}
