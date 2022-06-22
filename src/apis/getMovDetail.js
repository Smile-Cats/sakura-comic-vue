// 导入axios实例
import httpRequest from '../request/index'


// 获取mov详细信息
export default function apiGetMovDetail(param) {
    return httpRequest({
		url: '/vod_detail',
		method: 'get',
		params: param,
	})
}
