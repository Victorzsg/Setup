<template>
    <el-header class="activity-header">
        <el-row>
            <el-col :span="24">
                <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                    <el-menu-item index="1">高级插件</el-menu-item>
                    <el-menu-item index="2">在线商城</el-menu-item>
                    <el-menu-item index="3">客户管理</el-menu-item>
                    <el-menu-item index="4">系统设置</el-menu-item>
                    <el-menu-item index="5">活动发布</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <div style="position: relative;height: 60px;width: 100%;"></div>
    </el-header>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped lang="scss">
    body {
        margin: 0;
    }

    /* 头部导航 */
    .activity-header {
        z-index: 1000;
        min-width: 1200px;
        transition: all 0.5s ease;
        border-top: solid 4px #3091F2;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        .el-menu-demo {
            padding-left: 300px !important;
        }
    }
</style>
