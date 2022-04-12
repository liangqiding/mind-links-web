<template>
  <div class="app-container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="客户端id">
        <el-input v-model="formData.user" placeholder="clientId"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
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
          label="客户端id"
          width="180">
      </el-table-column>
      <el-table-column
          prop="username"
          label="账号">
      </el-table-column>
      <el-table-column
          prop="date"
          label="连接日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="clientTotal"
          label="连接时长"
          width="180">
      </el-table-column>
      <el-table-column
          prop="clientTotal"
          label="每小时消息量"
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
              type="info">断开
          </el-button>
          <el-button
              size="mini"
              type="info">拉黑
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
    <el-dialog
        title="提示"
        :z-index="1000"
        :visible.sync="dialogVisible"
        width="30%"
    >
      <span>这是一段信息</span>
      <el-button @click="test">测试通知</el-button>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import messageUtils from "../../utils/messageUtils"
export default {
  data() {
    return {
      dialogVisible: true,
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
    test(){
      messageUtils.message("操作成功")
    },
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
