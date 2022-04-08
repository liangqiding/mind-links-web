<template>
  <div class="app-container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="账号">
        <el-input v-model="formData.user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          type="index"
          label="#"
          width="50">
      </el-table-column>
      <el-table-column
          prop="name"
          label="名称"
          width="180">
      </el-table-column>
      <el-table-column
          prop="username"
          label="账号">
      </el-table-column>
      <el-table-column
          prop="date"
          label="创建日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="clientTotal"
          label="当前在线客户端"
          width="180">
      </el-table-column>
      <el-table-column
          prop="clientTotal"
          label="允许最大在线数量"
          width="180">
      </el-table-column>
      <el-table-column
          prop="auth"
          label="权限">
      </el-table-column>
      <el-table-column
          prop="auth"
          label="管理">
        <template v-slot="scope">
          <el-button
              size="mini"
              type="danger">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 10px">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        username: 'admin',
        clientTotal: 10,
        auth: "发布/订阅",
      }, {
        date: '2016-05-02',
        name: '王小虎',
        username: 'admin',
        clientTotal: 10,
        auth: "禁止",
      }, {
        date: '2016-05-02',
        name: '王小虎',
        username: 'admin',
        clientTotal: 10,
        auth: "发布",
      }, {
        date: '2016-05-02',
        name: '王小虎',
        username: 'admin',
        clientTotal: 10,
        auth: "发布/订阅",
      }],
      formData: {}
    };
  }
  ,
  created() {
  }
  ,
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
  ,
}
;
</script>
