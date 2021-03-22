<template>
    <div>
        <div style="text-align: center; width: 100%;">
            <h1>介绍</h1>
        </div>
        <!--        <el-divider/>-->
        <!--        <el-card style="padding: 0!important; height: 400px;">-->
        <div v-for="(item, index) in list" :key="index"
             style="overflow: hidden; box-shadow:0 5px 15px rgb(0 0 0 / 8%); margin-top: 20px">
            <el-row :gutter="0" style="height: 100%;">
                <el-col v-if="index % 2 === 1" :lg="12" style="height: 100%;">
                    <div class="test1"></div>
                </el-col>
                <el-col v-if="index % 2 === 0" :lg="12" class="hidden-lg-and-up" style="height: 100%;">
                    <div class="test1"></div>
                </el-col>
                <el-col :lg="12">
                    <div style="padding: 2em;">
                        <h2>{{ item.title }}</h2>
                        {{ item.text }}
                    </div>
                </el-col>
                <el-col v-if="index % 2 === 0" :lg="12" class="hidden-md-and-down" style="height: 100%;">
                    <div class="test1"></div>
                </el-col>
            </el-row>
        </div>
        <!--        </el-card>-->
    </div>
</template>

<script>
export default {
    name: "introduction",
    data() {
        return {
            list: [
                {
                    "title": "HITLUG",
                    "text": "HITLUG 注册名“哈尔滨工业大学 Linux 开源学生俱乐部”，2019 年注册于计算学部。俱乐部为 GNU/Linux 爱好者与喜爱开源的同学提供交流的平台；俱乐部同时推广自由软件在学生中的使用、支持开源的发展，并为开源注入学生力量。"
                },
                {
                    "title": "Activities",
                    "text": "我们会在每年举办 Release Party、SFD 等活动，也面向俱乐部内外举办 Linux 与相关开源技术讲座。同时我们也会举办开源文化讲座，推广自由软件在学生中的使用。"
                },
                {
                    "title": "Proin",
                    "text": "Proin consectetur iaculis sapien, eu ultrices arcu suscipit maximus. Nulla ut urna dictum, condimentum diam id, tincidunt justo. Sed a diam urna. Ut sed blandit augue. Ut interdum diam ut risus imperdiet blandit."
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 80px;
}

.test1 {
    background: url("../assets/head.jpg") center;
    width: 100%;
    padding-bottom: 60%;
    height: auto;
    /*max-height: 400px;*/
    background-size: cover;
    border-radius: 4px;
}

h2 {
    margin-top: 0;
}
</style>
