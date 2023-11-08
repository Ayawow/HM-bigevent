<script setup>
import { artGetChannelsService } from '@/api/article.js'
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ChannelEdit from '@/components/ChannelEdit.vue'

//列表数据
const channelList = ref([])

//加载
const loading = ref(false)

const dialog = ref()

//弹层

const onAddChannel = () => {
  dialog.value.open({})
}

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onDelChannel = (row) => {
  console.log(row)
}

getChannelList()

const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column label="序号" width="100" type="index"> </el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <!-- 弹层 -->
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped></style>
