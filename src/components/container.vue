<template>
    <el-row :gutter="24">
        <el-col :xl="3" :lg="2" :md="1" :sm="1" class="hidden-xs-and-down">
            <div style="display:block; height: 1px; width: 1px;"></div>
        </el-col>
        <el-col :xl="18" :lg="20" :md="22" :sm="22" :xs="24" style="">
            <introduction/>
            <event/>
            <activities/>
        </el-col>
    </el-row>
</template>

<script>
import event from './event.vue'
import introduction from './introduction.vue'
import activities from './activities.vue'

export default {
    name: 'container',
    components: {
        event,
        introduction,
        activities
    }
}
</script>

<style scoped>

</style>
