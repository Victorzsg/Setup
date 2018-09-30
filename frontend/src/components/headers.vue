<template>
    <el-header class="activity-header">
        <el-row>
            <el-col :span="24">
                <el-menu default-active="5"
                         class="el-menu-demo"
                         mode="horizontal"
                         @select=""
                         background-color="#374860"
                         text-color="#BDCAD7"
                         active-text-color="#0077FB"
                         :router="false">
                    <el-menu-item index="1">高级插件</el-menu-item>
                    <el-menu-item index="2">在线商城</el-menu-item>
                    <el-menu-item index="3">客户管理</el-menu-item>
                    <el-menu-item index="4">系统设置</el-menu-item>
                    <el-menu-item index="5">活动发布</el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">小工具</template>
                        <el-menu-item index="/activitycate/list">
                            <a href="javascript:;"
                               @click.stop="routeTo('#/activitycate/list')"
                               :target="target">活动分类列表</a>
                        </el-menu-item>
                        <el-menu-item index="/componenttplcate/list">
                            <a href="javascript:;"
                               @click.stop="routeTo('#/componenttplcate/list')"
                               :target="target">组件分类列表</a>
                        </el-menu-item>
                        <el-menu-item index="/component/list"><a href="javascript:;"
                                                                 @click.stop="routeTo('#/component/list')"
                                                                 :target="target">组件列表</a>
                        </el-menu-item>
                        <el-menu-item index="/style/list"><a href="javascript:;" @click.stop="routeTo('#/style/list')"
                                                             :target="target">样式列表</a>
                        </el-menu-item>
                        <el-menu-item index="/componentMenu/list">
                            <a href="javascript:;"
                               @click.stop="routeTo('#/componentMenu/list')"
                               :target="target">组件菜单列表</a>
                        </el-menu-item>
                        <el-menu-item index="/pageTpl/list">
                            <a href="javascript:;"
                               @click.stop="routeTo('#/pageTpl/list')" :target="target">模板列表</a>
                        </el-menu-item>
                        <el-menu-item index="/formPreview">
                            <a href="javascript:;" @click.stop="routeTo('#/formPreview')"
                               :target="target">表单预览</a>
                        </el-menu-item>
                        <el-menu-item index="/stylePreview">
                            <a href="javascript:;"
                               @click.stop="routeTo('#/stylePreview')" :target="target">样式预览</a>
                        </el-menu-item>
                    </el-submenu>
                    <div class="ma-header-user">
            <span>
              ffff
            </span>
                        <a href="/admin/logout">退出</a>
                    </div>
                </el-menu>
            </el-col>
        </el-row>
        <!--<div style="position: relative;height: 60px;width: 100%;"></div>-->
    </el-header>
</template>

<script>
export default {
    name: "headers"
}
</script>

<style scoped lang="scss">

    /* 头部导航 */
    .activity-header {
        z-index: 1000;
        min-width: 1200px;
        transition: all 0.5s ease;
        background: #F5F8FD;
        padding: 0 0;
        .el-menu-demo {
            padding-left: 300px !important;
        }
    }

    .el-menu-item {
        padding: 0 10px;
    }

    .el-menu-item a {
        color: inherit;
        display: block;
        text-decoration: none;
        padding: 0 0;
    }

    .el-menu-item.is-disabled {
        opacity: 1 !important;
        cursor: pointer !important;
        background: 0 0 !important;
    }

    .el-menu-item {
        text-align: center;
    }

    .ma-header-user {
        float: left;
        color:#fff;
        margin-top: 2px;
        line-height: 16px;

        span {
            float: left;
            padding: 0 25px;
            border-left: 1px solid #5A6B7F;
            font-size: 16px;
        }
    }
</style>
