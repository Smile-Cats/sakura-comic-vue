// 导入axios实例
import httpRequest from '../request/index'


// 获取视频收藏信息
export  function showCollectVideo(param) {
    return httpRequest({
		url: '/collection/show',
		method: 'get',
		params: param,
	})
}


// 添加视频收藏
export  function addCollectVideo(param) {
    return httpRequest({
		url: '/collection/add',
		method: 'get',
		params: param,
	})
}

// 删除视频收藏
export  function removeCollectVideo(param) {
    return httpRequest({
		url: '/collection/remove',
		method: 'get',
		params: param,
	})
}


// 该视频是否已被收藏
export function isCollectVideo(param) {
    return httpRequest({
		url: '/collection/is_collection',
		method: 'get',
		params: param,
	})
}