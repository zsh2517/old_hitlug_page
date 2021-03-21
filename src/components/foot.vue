<template>
    <el-row :gutter="24" contenteditable>
        <el-col :xl="3" :lg="2" :md="1" :sm="1" class="hidden-xs-and-down">
            <div style="display:block; height: 1px; width: 1px;"></div>
        </el-col>
        <el-col :xl="18" :lg="20" :md="22" :sm="22" :xs="24" style="">
            <div style="color: white" class="hidden-sm-and-down">
                <div style="text-align: left;">
                    <div>哈尔滨工业大学计算学部<br/></div>
                    <div>Linux 开源学生俱乐部<br/></div>
                    <br/>
                    <div style="font-size: smaller">E-mail: <a style="color: white; text-decoration: none;"
                                                               href="mailto:lug@hit.edu.cn">lug@hit.edu.cn</a><br/>
                    </div>
                    <div style="font-size: smaller">QQ 群: 1153235504<br/></div>
                    <div style="font-size: smaller"><a href="https://github.com/hitlug/issues">Issues(GitHub)</a><br/>
                    </div>
                </div>
                <div style="text-align: right;">
                    <a href="//github.com/hitlug">LUG@GitHub</a> /
                    <a href="//mirrors.hit.edu.cn/">Mirrors</a> /
                    <a href="//git.hit.edu.cn/">GitLab</a> /
                    <a href="http://cs.hit.edu.cn/">计算学部</a> /
                    <a href="http://ito.hit.edu.cn/">网络与信息中心</a>
                </div>
            </div>
            <div style="color: white" class="hidden-md-and-up">
                <div style="text-align: center;">
                    <div>哈尔滨工业大学计算学部<br/></div>
                    <div>Linux 开源学生俱乐部<br/></div>
                    <br/>
                    <div style="font-size: smaller">E-mail: <a style="color: white; text-decoration: none;"
                                                               href="mailto:lug@hit.edu.cn">lug@hit.edu.cn</a><br/>
                    </div>
                    <div style="font-size: smaller">QQ 群: 1153235504<br/></div>
                    <div style="font-size: smaller"><a href="https://github.com/hitlug/issues">Issues(GitHub)</a><br/>
                    </div>
                </div>
                <br/>
                <div style="text-align: center;">
                    <div style="display: inline-block"><a href="//github.com/hitlug">LUG@GitHub</a></div> /
                    <div style="display: inline-block"><a href="//mirrors.hit.edu.cn/">Mirrors</a></div> /
                    <div style="display: inline-block"><a href="//git.hit.edu.cn/">GitLab</a></div> /
                    <div style="display: inline-block"><a href="http://cs.hit.edu.cn/">计算学部</a></div> /
                    <div style="display: inline-block"><a href="http://ito.hit.edu.cn/">网络与信息中心</a></div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "foot"
}
</script>

<style scoped>
a {
    color: white !important;
    text-decoration: none !important;
}
</style>
