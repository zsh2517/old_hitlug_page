<template>
    <el-row :gutter="24">
        <el-col :xl="3" :lg="3" :md="3" class="hidden-sm-and-down">
            <div style="display:block; height: 1px; width: 1px;"></div>
        </el-col>
        <el-col :xl="18" :lg="18" :md="18" :sm="24" :xs="24" style="">
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
