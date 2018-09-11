<template>
    <div class="activity-list">
        <setup_headers></setup_headers>
        <search_bar name="活动列表" leftBtnName="新建活动">
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

<style scoped>

</style>
