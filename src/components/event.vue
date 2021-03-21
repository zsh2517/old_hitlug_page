<template>
    <div>
        <el-divider/>
        <div style="text-align: center; width: 100%;">
            <h1>大事件</h1>
        </div>
        <!--        <el-divider/>-->
        <el-row :gutter="20" style="margin-top: 4em;">
            <el-col :xl="2" :lg="1" class="hidden-md-and-down">
                <div style="display:block; height: 1px; width: 1px;"></div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="6" style="text-align: left">
                <el-timeline style="margin-top: 1em; display: inline-block;">
                    <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                        {{ activity.content }}
                    </el-timeline-item>
                </el-timeline>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="13">
                <el-card>
                    <div>
                        <div>
                            <b style="font-size: larger">Mirrors</b>
                        </div>
                        Mirrors 介绍
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div>
                            <b style="font-size: larger">Gitlab</b>
                        </div>
                        GitLab 介绍
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div>
                            <b style="font-size: larger">HITLUG Talk</b>
                        </div>
                        HITLUG Talk 介绍
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "event",
    data() {
        return {
            activities: [
                {timestamp: "2020-11-29", content: "GitLab 开放公网访问"},
                {timestamp: "2020-10-15", content: "GitLab 上线"},
                {timestamp: "2020-06-20", content: "Mirrors 开放公网访问"},
                {timestamp: "2020-03-15", content: "开始 HITLUG Talk 系列"},
                {timestamp: "2019-11-16", content: "LUG 注册成立"},
                {timestamp: "2019-08-13", content: "Mirrors 上线"},
            ]
            // {
            //     // content: '支持使用图标',
            //     // timestamp: '2018-04-12 20:46',
            //     // size: 'large',
            //     // type: 'primary',
            //     // icon: 'el-icon-more'
            //     //     color: '#0bbd87'
            //
            // }

        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 80px;
}
</style>
