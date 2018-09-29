<template>
    <div id="app">
        <router-view></router-view>
        <iframe height="0" scrolling="no" class="login-iframe"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    #app {
        min-width: 1200px;
        margin: 0 auto;
        font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
    }

    .login-dialog {
        .el-dialog__header {
            background: #FDFBFE;
        }
        .el-dialog__body {
            background: #FDFBFE;
            padding: 0;
        }
    }

    .login-iframe {
        width: 100%;
        height: 0;
        border: none;
        overflow: hidden;
        display: none;
    }
</style>
