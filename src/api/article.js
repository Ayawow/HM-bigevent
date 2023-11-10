import instance from '@/utils/request.js'

//获取文章分类
export const artGetChannelsService = () => instance.get('/my/cate/list')

//添加文章分类

export const artAddChannelService = (data) =>
  instance.post('/my/cate/add', data)

//编辑文章分类

export const artEditChannelService = (data) =>
  instance.put('/my/cate/info', data)

//删除文章分类

export const artDelChannelService = (id) =>
  instance.delete('/my/cate/del', {
    params: { id }
  })

//获取文章列表

export const artGetListService = (params) =>
  instance.get('/my/article/list', {
    params
  })

//发布文章

export const artPublishService = (data) =>
  instance.post('/my/article/add', data)

//获取文章内容

export const artGetArticleService = (id) =>
  instance.get('/my/article/info', {
    params: { id }
  })

//编辑文章

export const artEditArticleService = (data) =>
  instance.put('/my/article/info', data)

//删除文章

export const artDelArticleService = (id) =>
  instance.delete('/my/article/info', {
    params: { id }
  })
