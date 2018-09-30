export default {
    // 上传图片接口
    rejectMsg: {
        url: '/index.php?c=RejectMsg&a=postRejectMsg',
        mock: false
    },
    // 获取活动首页列表
    getActivityList: {
        url: '/activity/list',
        mock: false
    },
    // 获取活动分类列表
    getActivityCateList: {
        url: '/ActivityCate/list',
        mock: false
    },
    // 创建活动分类
    ActivityCateCreate: {
        url: '/ActivityCate/create',
        mock: false
    },
    // 删除活动分类
    ActivityCateDestroy: {
        url: '/ActivityCate/destroy',
        mock: false
    },
    // 更新活动分类
    activityCateUpdate: {
        url: '/activitycate/update',
        mock: false
    },
    // 获取单个活动分类
    activityCateShow: {
        url: '/activitycate/show',
        mock: false
    },
    // 获取部类列表
    getDepartmentList: {
        url: '/department/list',
        mock: false
    },
    // 创建活动
    specialCreate: {
        url: '/activity/create',
        mock: false
    },
    // 更新活动
    specialUpdate: {
        url: '/activity/update',
        mock: false
    },
    // 搜索活动
    specialSearch: {
        url: '/activity/search',
        mock: false
    },
    // 发布活动
    specialRelease: {
        url: '/activity/release',
        mock: false
    },
    // 获取入口图
    enterpicShow: {
        url: '/enterpic/show',
        mock: false
    },
    // 更新入口图
    enterpicUpdate: {
        url: '/enterpic/update',
        mock: false
    },
    // 创建入口图
    enterpicCreate: {
        url: '/enterpic/create',
        mock: false
    },
    // 删除入口图
    enterpicDestroy: {
        url: '/enterpic/destroy',
        mock: false
    },
    // 导出URL
    specialExporturls: {
        url: '/activity/exporturls',
        mock: false
    },
    // 获取活动发布状态
    specialReleasestatus: {
        url: '/activity/releasestatus',
        mock: false
    },
    // 获取单个活动数据
    getSpecialShow: {
        url: '/activity/show',
        mock: false
    },
    // 搜索页面模板
    pageTplSearch: {
        url: '/pagetpl/search',
        mock: false
    },
    // 获取页面模板列表
    getPageTplList: {
        url: '/pagetpl/list',
        mock: false
    },
    // 获取单个页面模板
    getPageTplShow: {
        url: '/pagetpl/show',
        mock: false
    },
    // 新增页面模板分类
    pageTplCreate: {
        url: '/pagetpl/create',
        mock: false
    },
    // 删除页面模板分类
    pageTplDestroy: {
        url: '/pagetpl/destroy',
        mock: false
    },
    // 获取频道列表
    getChannelList: {
        url: '/channel/list',
        mock: false
    },
    // 获取页面模板分类列表
    getPagetplcatelList: {
        url: '/pagetplcate/list',
        mock: false
    },
    // 更新页面模板分类
    pageTplUpdate: {
        url: '/pagetpl/update',
        mock: false
    },
    // 获取活动子页面列表
    getChildpageList: {
        url: '/childpage/list',
        mock: false
    },
    // 单独保存子页面配置
    childPageConfigUpdate: {
        url: '/childpage/saveconfig',
        mock: false
    },
    // 获取组件菜单列表
    getComponentmenuList: {
        url: '/componentmenu/list',
        mock: false
    },
    // 创建组件菜单
    componentmenuCreate: {
        url: '/componentmenu/create',
        mock: false
    },
    // 获取组件分类列表
    getComponenttplcateList: {
        url: '/componenttplcate/list',
        mock: false
    },
    // 新增组件分类
    componenttplcateCreate: {
        url: '/componenttplcate/create',
        mock: false
    },
    // 更新组件分类
    componenttplcateUpdate: {
        url: '/componenttplcate/update',
        mock: false
    },
    // 删除组件分类
    componenttplcateDestroy: {
        url: '/componenttplcate/destroy',
        mock: false
    },
    // 获取组件分类
    getComponenttplcateShow: {
        url: '/componenttplcate/show',
        mock: false
    },
    // 获取组件分类
    getComponenttplcateSearchList: {
        url: '/componenttplcate/search',
        mock: false
    },
    // 获取组件列表
    getComponenttplList: {
        url: '/componenttpl/list',
        mock: false
    },
    // 获取组件列表
    getComponenttplSearchList: {
        url: '/componenttpl/search',
        mock: false
    },
    // 新增组件
    componenttplCreate: {
        url: '/componenttpl/create',
        mock: false
    },
    // 删除组件
    componenttplDestroy: {
        url: '/componenttpl/destroy',
        mock: false
    },
    // 更新组件
    componenttplUpdate: {
        url: '/componenttpl/update',
        mock: false
    },
    // 获取单个组件数据
    getComponenttplShow: {
        url: '/componenttpl/show',
        mock: false
    },
    // 新增样式
    styleCreate: {
        url: '/style/create',
        mock: false
    },
    // 发布样式
    styleRelease: {
        url: '/style/release',
        mock: false
    },
    // 更新样式
    styleUpdate: {
        url: '/style/update',
        mock: false
    },
    // 更新样式
    styleSearch: {
        url: '/style/search',
        mock: false
    },
    // 删除样式
    styleDestroy: {
        url: '/style/destroy',
        mock: false
    },
    // 停用样式
    styleRecycle: {
        url: 'style/recycle',
        mock: false
    },
    // 恢复使用样式
    styleRecover: {
        url: 'style/recover',
        mock: false
    },
    // 获取单个样式数据
    getStyleShow: {
        url: '/style/show',
        mock: false
    },
    // 上传图片
    saveImg: {
        url: '/upload/saveimg',
        mock: false
    },
    createChildPage: {
        url: '/childpage/create',
        mock: false
    },
    // 更新子页面
    updateChildPage: {
        url: '/childpage/update',
        mock: false
    },
    // 子页面编辑投放属性
    childPageAttredit: {
        url: '/childpage/attredit',
        mock: false
    },
    // 批量编辑子页面投放属性
    childPageBatchattredit: {
        url: '/childpage/batchattredit',
        mock: false
    },
    // 删除子页面
    destroyChildPage: {
        url: '/childpage/destroy',
        mock: false
    },
    // 获取子页面列表
    getChildPageList: {
        url: '/childpage/list',
        mock: false
    },
    // 获取子页面数据
    getChildPageShow: {
        url: '/childpage/show',
        mock: false
    },
    // 获取左侧运营设置的组件菜单列表
    getCompMenu: {
        url: '/componentmenu/list',
        mock: false
    },
    // 获取单个组件菜单
    getCompMenuShow: {
        url: '/componentmenu/show',
        mock: false
    },
    // 删除单个组件菜单
    compMenuDestroy: {
        url: '/componentmenu/destroy',
        mock: false
    },
    // 更新单个组件菜单
    compMenuUpdate: {
        url: '/componentmenu/update',
        mock: false
    },
    getStyleList: {
        url: '/style/list',
        mock: false
    },
    uploadImg: {
        url: '/upload/saveimg',
        mock: false
    },
    importExcel: {
        url: '/upload/saveexcel',
        mock: false
    },
    importMultiTimeStageExcel: {
        url: '/data/saveoption',
        mock: false
    },
    getPeopleGroupList: {
        url: '/grouprule/list',
        mock: false
    },
    getMembershipGrades: {
        url: '/grouprule/consumertypes',
        mock: false
    },
    getWarehouseList: {
        url: '/warehouse/list',
        mock: false
    },
    getPageTemplate: {
        url: '/pagetpl/show/{id}',
        mock: false
    },

    // 取消同步
    unlockAll: {
        url: '/childpage/unlock/{id}',
        mock: false
    },
    unlockConfig: {
        url: '/childpage/unlockconfig/{id}',
        mock: false
    },
    unlockCompsOrder: {
        url: '/childpage/unlockcompsorder/{id}',
        mock: false
    },
    unlockComponent: {
        url: '/component/unlock/{id}',
        mock: false
    },

    // 单个组件保存
    componentUpdate: {
        url: '/component/save',
        mock: false
    },

    getChildPage: {
        url: '/childpage/show/{id}',
        mock: false
    },
    getPageDapInfo: {
        url: '/dap/getpagedapinfo',
        mock: false
    },
    saveDapOption: {
        url: '/dap/savedapoption',
        mock: false
    },
    searchDapInfos: {
        url: '/dap/searchdapinfos',
        mock: false
    },
    searchDapLabel: {
        url: '/dap/searchlabel',
        mock: false
    },
    getUserInfo: {
        url: '/admin/info',
        mock: false
    },
    searchSelection: {
        url: '/selection/getselectionbysearch',
        mock: false
    },
    getCategoryTree: {
        url: '/category/queryCate',
        mock: true,
        mockData() {
            return mockData.getCategoryTree
        }
    }
}
