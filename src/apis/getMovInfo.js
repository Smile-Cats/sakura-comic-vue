// 导入axios实例
import httpRequest from '../request/index'


// 获取mov信息
export default function apiGetMovList(param) {
    return httpRequest({
		url: '/vod_list',
		method: 'get',
		params: param,
	})
}
