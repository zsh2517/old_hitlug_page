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
                        哈尔滨工业大学开源镜像站于 2019 年 8 月成立，并于 2020 年 6 月开放了校外访问。目前镜像站存储了近 40TB 的数据，已成为 CTAN、Archlinux、Ubuntu 等源的官方镜像。镜像站包括了常用 OS（如 Ubuntu、CentOS 等）的 ISO 下载与软件源，常用工具更新源与下载（如 CTAN、Anaconda、PyPI、VirtualBox）。
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div>
                            <b style="font-size: larger">Gitlab</b>
                        </div>
                        哈尔滨工业大学 GitLab 服务上线于 2020 年 10 月，并于 2020 年 11 月开放了校外访问，能够为校内师生提供流畅的代码仓库托管服务。

                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div>
                            <b style="font-size: larger">HITLUG Talk</b>
                        </div>
                        HITLUG Talk 为俱乐部特色活动，是针对某项技术 / 某个技术链的技术交流。
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
