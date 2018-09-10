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
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
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
