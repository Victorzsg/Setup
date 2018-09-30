<template>
    <div class="activity-search-bar">
        <el-row>
            <el-col :span="6">
                <div class="activity-search-bar-left">
                    <p>{{name}}</p>
                    <el-button type="primary" @click="visibleDialog">{{leftBtnName}}</el-button>
                </div>
            </el-col>

            <el-col :span="18"
                    v-show="seniorSearch">
                <div class="activity-search-bar-right">
                    <el-form ref="form" label-width="100px">
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="活动名称/id：">
                                    <el-input placeholder="仅用在活动系统" v-model="searchData.id_or_name"
                                              @keyup.native.enter="search"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="页面ID：">
                                    <el-input placeholder="仅用在活动系统" v-model="searchData.page_id"
                                              @keyup.native.enter="search"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-button class="el-button el-button--default fr" @click="search">搜索</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </el-col>

            <el-col :span="hasSeniorSearch ? 16 : 18"
                    v-show="!seniorSearch">
                <div class="activity-search-bar-right">
                    <el-input :placeholder="searchPlaceholder" v-model="searchData.id_or_name" class="input-with-select"
                              @keyup.native.enter="search">
                        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="2" v-if="hasSeniorSearch">
                <el-button class="el-button el-button--default fr" v-show="!seniorSearch"
                           @click="seniorSearch = !seniorSearch">高级搜索
                </el-button>
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
                default: '输入活动名称 或 ID'
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

        data() {
            return {
                seniorSearch: false,
                searchData: {
                    // spacial_id: '1',
                    page_id: '',
                    id_or_name: ''
                }
            }
        },

        methods: {
            visibleDialog() {
                this.$API({
                    url: "http://my_acms.com"
                }).then(s => {
                    console.log(s)
                }, s => {
                    console.log(s)
                })
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
