// 导入axios实例
import httpRequest from '../request/index'

// 注册
export function postComments(vod_id, data) {
    var url = '/publish/comment/' + vod_id
	return httpRequest({
		url: url,
		method: 'post',
		data: data,
	})
}

export function showComments(vod_id) {
    var url = '/show/comment/' + vod_id
	return httpRequest({
		url: url,
		method: 'get',
	})
}

export function replyComment(comment_id, data) {
    var url = '/reply/comment/' + comment_id
	return httpRequest({
		url: url,
		method: 'post',
        data: data
	})
}