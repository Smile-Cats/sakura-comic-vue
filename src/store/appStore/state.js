function haveToken() {
    const value = window.localStorage.getItem('token')
    if (value) {
        return true
    } else {
        return false
    }
}


export default {
    countVuex: 0,
    type_names: {
        1: ['电影', '动作片','喜剧片','爱情片','科幻片' ,'恐怖片' ,'剧情片' ,'战争片' ,'犯罪片','纪录片','动画电影','伦理片'],
        2: ['连续剧','国产剧','香港剧','台湾剧','韩国剧','日本剧','欧美剧','海外剧'],
        3: ['综艺' ,'大陆综艺','日韩综艺','港台综艺','欧美综艺'],
        4: ['动漫','动画电影','国产动漫','日本动漫','欧美动漫','海外动漫'],
        5: ['资讯','公告','头条'],
        0: ['电影','连续剧','综艺','动漫','资讯']
    },
    isLogining: haveToken(),
    user: {}
}