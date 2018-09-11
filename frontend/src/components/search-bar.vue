<template>
    <div activity-search-bar>
        <el-row>
            <el-col>
                <div class="activity-search-bar-left">
                    <p>{{name}}</p>
                    <el-button type="primary" @click="visibleDialog">{{leftBtnName}}</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "search-bar",

        props: {
            name: String,
            leftBtnName: String,
            searchPlaceholder: {
                type: String,
                default: '输入专题名称 或 ID'
            },
            createDialogVisible: {
                type: Boolean,
                default: false
            },
            hasSeniorSearch: {
                type: Boolean,
                default: true
            }
        },
        components: {},

        methods: {
            visibleDialog() {
                this.$emit('update:createDialogVisible', true)
                this.$emit('evDefaultFormCB')
            },
            search() {
                if (this.searchData.id_or_name === '' && this.searchData.page_id === '') {
                    // this.$message.error('请输入搜索值')
                    // this.seniorSearch = false
                    this.$emit('evGetAllCB')
                } else {
                    this.$emit('evSearchCB', this.searchData)
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .activity-search-bar {
        padding: 10px 20px;
        background: #F5F8FD;
        border: 1px solid #E2E6E9;
        .el-form-item {
            margin-bottom: 0;
            .el-form-item__label {
                margin-bottom: 0
            }
        }

        .activity-search-bar-left {
            font-size: 16px;
            text-align: left;
            color: #131313;
            line-height: 40px;

            p {
                float: left;
                margin-right: 20px;
                margin-bottom: 0;
            }
        }

        .activity-search-bar-right {
            float: right;

            .el-select {
                .el-input {
                    width: 120px;
                }
            }
        }

    }
</style>
