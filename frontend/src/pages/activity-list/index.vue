<template>
    <div class="activity-list">
        <setup_headers></setup_headers>
        <search_bar name="活动列表"
                    leftBtnName="新建活动">
        </search_bar>
    </div>
</template>

<script>
import setup_headers from '../../components/headers'
import search_bar from '../../components/search-bar'

export default {
    name: "activity-list",
    components: {search_bar, setup_headers},
    comments: {
        setup_headers,
        search_bar
    }
}
</script>

<style scoped lang="scss">
    .activity-list {
        text-align: left;

        .ma-toobar {
            padding: 10px 20px;
        }

        .ma-toolbar-left {
            float: left;
            label {
                margin-bottom: 0px;
            }
        }

        .ma-toolbar-right {
            float: right;

            .el-select, .el-button {
                float: left;
                margin: 0 0 0 20px;
            }

            .el-dropdown {
                float: left;
            }

        }

        .el-checkbox {
            margin-bottom: 0;
        }

        .ma-collapse {
            margin: 0 20px;
            a {
                text-decoration: none;
                cursor: pointer;
            }
            .el-table {
                // text-align: center;
                th {
                    background: #F5F8FD;
                }
            }

            .el-collapse-item > :first-child {
                overflow: hidden;
                width: 100%;
            }

            .el-collapse-item__header {
                padding-left: 10px;
                font-size: 14px;
                border-left: 1px solid #ebeef5;
                border-right: 1px solid #ebeef5;
                transition: background 1s;

                span {
                    font-size: 13px;
                }
                .el-checkbox__input {
                    margin-right: 20px;
                }
                span.text {
                    color: #8492A6;
                }
                span.btns {
                    float: right;
                    margin-right: 20px;
                    visibility: hidden;
                }

                &:hover {
                    background: #F5F8FD;
                    span.btns {
                        visibility: visible;
                    }

                }

            }

            .el-collapse-item__content {
                padding-bottom: 0;
                td .el-icon-info {
                    visibility: hidden;
                }
                td:hover .el-icon-info {
                    visibility: visible;
                }
                td .img {
                    cursor: pointer;
                    display: block;
                    color: #C0CCDA;
                    text-align: center;
                    line-height: 70px;
                    font-size: 24px;
                    width: 110px;
                    height: 70px;
                    background: #F9FAFC;
                    border: 1px solid #C0CCDA;
                    border-radius: 2px;
                }
            }

            .el-collapse-item.is-active {
                .el-collapse-item__header {
                    background: #F5F8FD;
                    span.btns {
                        visibility: visible;
                    }
                }

                .el-collapse-item__wrap {
                    border-bottom: 0;
                }
            }
        }

        .el-table__header-wrapper {
            .el-checkbox__inner {
                display: none;
            }
        }

        .ma-search-null {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 175px auto 0;
            width: 682px;
            height: 179px;
            text-align: center;
            color: #131313;
            border: 1px solid #E5E5E5;
            .title {
                font-size: 18px;
            }
            img {
                vertical-align: text-bottom;
                margin-right: 13px;
            }
        }

        .ma-page {
            margin: 30px 20px;
            float: right;
        }

        .el-dialog__body {
            border: 1px solid #E0E6ED;
            margin-left: 10px;
            margin-right: 10px;
            border-left: none;
            border-right: none;
            .el-row {
                margin-bottom: 20px;
            }
            .dialog-success-content {
                text-align: center;
                font-size: 18px;
                i {
                    color: #13CE66;
                    font-size: 28px;
                    vertical-align: sub;
                }
            }
            .dialog-hasbigtitle-content {
                text-align: center;
                .title {
                    font-size: 16px;
                    color: #1F2D3D;
                }
                span {
                    color: #475669;
                }
            }
        }

        .create-success-dialog {
            .el-dialog__body {
                border: none;
                margin: none;
            }
        }
    }
</style>
