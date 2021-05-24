<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-caret-right"></i>User Management</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <!-- We can use the following way to pass parameters for a route. Notice the ":" right before `to` -->
                <router-link :to="{name:'UserProfile', props: 'username'}">Personal Information</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link :to="{name:'UserList', props: 'username'}">User List</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-caret-right"></i>Content Management</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">Manage by Types</el-menu-item>
              <el-menu-item index="2-2">Content List</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">

          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Personal Information</el-dropdown-item>
              <el-dropdown-item>Log out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Hello, {{ username }}!</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "UserManagement",
  props: ["username"]
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

li a {
  text-decoration: none;
  color: #333333;
}

</style>
