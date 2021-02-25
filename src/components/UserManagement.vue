<template>
  <div>
    <el-table
        :data="tableData"
        stripe
        border
        style="width: 100%"
        max-height="350">
      <el-table-column
          prop="id"
          label="ID"
          width="70">
      </el-table-column>
      <el-table-column
          prop="userName"
          label="Username"
          width="120">
      </el-table-column>
      <el-table-column
          prop="phone"
          label="Phone"
          width="110">
      </el-table-column>
      <el-table-column
          prop="realName"
          label="Real Name"
          width="120">
      </el-table-column>
      <el-table-column
          prop="email"
          label="Email"
          min-width="140">
      </el-table-column>
      <el-table-column
          prop="role"
          label="Role"
          min-width="110">
      </el-table-column>
      <el-table-column
          fixed="right"
          label=""
          width="60">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="edit(scope.$index, tableData)"
              type="text"
              size="small">
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog id="detail_dialog" title="Details" :visible.sync="dialogFormVisible" center width="70%">
      <el-form :model="edit_form_data" size="mini">
        <el-form-item label="Username" :label-width="formLabelWidth">
          <el-input v-model="edit_form_data.userName" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Real Name" :label-width="formLabelWidth">
          <el-input v-model="edit_form_data.realName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email" :label-width="formLabelWidth">
          <el-input v-model="edit_form_data.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Role" :label-width="formLabelWidth">
          <el-select v-model="edit_form_data.role" placeholder="Select Role">
            <el-option label="ADMIN" value="ROLE_ADMIN"></el-option>
            <el-option label="USER" value="ROLE_USER"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="mini" style="width: 90px">Cancel</el-button>
        <el-button type="primary" @click="submit" size="mini" style="width: 90px">Save</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getUserList()
  },
  name: "UserManagement",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    edit(index, rows) {
      this.dialogFormVisible = !this.dialogFormVisible
      this.edit_form_data = rows[index]
      console.log(rows[index])
    },
    getUserList() {
      this.$axios({
        method: "get",
        url: this.$api.getUserList,
        params: {
          pageNum: 1,
          pageSize: 50
        }
      }).then(res => {
        console.log(res.data)
        this.tableData = res.data.items
      })
    },
    submit() {
      this.updateUserProfile()
      this.dialogFormVisible = false
    },
    updateUserProfile() {
      const data = this.edit_form_data
      this.$axios({
        method: "PUT",
        url: this.$api.updateUserProfile(data.userName),
        data: data
      }).then(res => {
        this.$message.success("SUCCESS")
        console.log(">>>")
        console.log(res)
      }).catch(err => {Promise.resolve(err)})
    }
  },
  data() {
    return {
      tableData: [{
        id: '10001',
        userName: 'user_001',
        phone: '13700101010',
        realName: '王小虎',
        email: 'example@abc.org',
        role: 'ROLE_ADMIN'
      }, {
        id: '10001',
        userName: 'user_001',
        phone: '13700101010',
        realName: '王小虎',
        email: 'example@abc.org',
        role: 'ROLE_ADMIN'
      }, {
        id: '10001',
        userName: 'user_001',
        phone: '13700101010',
        realName: '王小虎',
        email: 'example@abc.org',
        role: 'ROLE_ADMIN'
      }, {
        id: '10001',
        userName: 'user_001',
        phone: '13700101010',
        realName: '王小虎',
        email: 'example@abc.org',
        role: 'ROLE_ADMIN'
      }, {
        id: '10001',
        userName: 'user_001',
        phone: '13700101010',
        realName: '王小虎',
        email: 'example@abc.org',
        role: 'ROLE_ADMIN'
      }, {
        id: '10001',
        userName: 'user_001',
        phone: '13700101010',
        realName: '王小虎',
        email: 'example@abc.org',
        role: 'ROLE_ADMIN'
      },],
      dialogFormVisible: false,
      edit_form_data: {
        id: '',
        userName: '',
        phone: '',
        realName: '',
        email: '',
        role: ''
      },
      formLabelWidth: '100px'
    }
  }
}
</script>

<style scoped>
#detail_dialog >>> .el-dialog__body {
  padding-top: 10px;
  padding-bottom: 0;
}
</style>