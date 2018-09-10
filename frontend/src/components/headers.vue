<template>
    <el-header class="activity-header">
        <el-row>
            <el-col :span="8">
                <a class="activity-header-left" href="/">
                    <img width="80" :src="logo" alt="SetUp">
                    <img src="/static/img/setup.png" width="67" height="17">
                    <h1>页面搭建系统</h1>
                </a>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped>

</style>
