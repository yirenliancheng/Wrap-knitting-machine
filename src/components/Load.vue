<template>
  <el-dialog title="登录信息" :visible.sync="loadVisible">
  <el-form :model="form" @submit.native.prevent>
    <el-form-item 
    label="账号" 
    :label-width="formLabelWidth"
    hide-required-asterisk="true">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="loadVisible = false">取 消</el-button>
    <el-button type="primary" @click="loadVisible = false">确 定</el-button>
  </div>
</el-dialog>
</template>

<script>
export default {
    name:"Load",
    data(){
        return {
            form:{
              name:"用户名",
              password:"密码",
            },
            formLabelWidth:'40px',
            loadVisible:true,
        }
    }
}
</script>

<style scoped>

</style>