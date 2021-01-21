<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="bucketName">
        <el-input v-model="form.bucketName" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit"> Create </el-button>
        <el-button @click="onCancel"> Cancel </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { createBucket } from '@/api/test'

@Component({
  name: 'Form'
})
export default class extends Vue {
  private form = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    bucketName: '',
    desc: ''
  }

  private onSubmit() {
    let bucketName = this.form.bucketName
    console.log(
      '------------------------------------------------------',
      bucketName
    )
    createBucket({ bucketName }).then((response) => {
      console.log('------------------', response)
    })
    this.$message('提交成功!')
  }

  private onCancel() {
    this.$message({
      message: 'cancel!',
      type: 'warning'
    })
  }
}
</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}
</style>
