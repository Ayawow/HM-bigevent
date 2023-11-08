import instance from '@/utils/request.js'

//获取文章分类
export const artGetChannelsService = () => instance.get('/my/cate/list')

//添加文章分类

export const artAddChannelService = (data) =>
  instance.post('/my/cate/add', data)

//编辑文章分类

export const artEditChannelService = (data) => {
  instance.put('/my/cate/info', data)
}
