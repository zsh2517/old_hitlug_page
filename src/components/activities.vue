<template>
    <div>
        <el-divider/>
        <div style="text-align: center; width: 100%;">
            <h1>活动</h1>
        </div>
        <!--        <el-divider/>-->
        <el-row :gutter="20">
            <el-col :xl="6" :lg="8" :sm="12" :xs="24" v-for="item in list" :key="item.name">
                <activityitem :name="item.name" :time="item.time" :place="item.place" :author="item.author"
                              :image="item.image">
                </activityitem>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import activityitem from './activityitem.vue';

export default {
    name: "activities",
    components: {
        activityitem
    },
    data() {
        return {
            list: [
                {
                    name: "关于一款“三维动画”软件 (Blender) 跨圈承包其他工作的这档事",
                    time: "2020.12.13",
                    place: "正心 303",
                    author: "FZQ0003",
                    image: "blender.png"
                },
                {name: "软件自由日 2020", time: "2020.10.18", place: "B111", author: "HITLUG & HITMSC", image: "sfd.png"},
                {name: "2020秋开学研讨", time: "2020.10.04", place: "正心 203", author: "HITLUG", image: "gugugu.jpg"},
                {
                    name: "开源软件在虚拟网络与 DN42 中的应用",
                    time: "2020.04.19",
                    place: "线上",
                    author: "billchenchina",
                    image: "dn42.png"
                },
                {name: "微纳卫星&开源", time: "2020.04.12", place: "线上", author: "黄家和", image: "space.png"},
                {name: "正则表达式 regex 介绍", time: "2020.04.05", place: "线上", author: "leylee", image: "regex.jpg"},
                {name: "emacs 的简单配置", time: "2020.03.29", place: "线上", author: "mortis-0", image: "emacs.png"},
                {
                    name: "一个 Linux 戏精的科研环境",
                    time: "2020.03.22",
                    place: "线上",
                    author: "dustincys",
                    image: "linux.png"
                },
                {
                    name: "使用 QEMU/KVM/Libvirt 运行带有硬件显示加速的 Windows 虚拟机",
                    time: "2020.03.15",
                    place: "线上",
                    author: "12101111",
                    image: "VirtualMachines.png"
                },
                {
                    name: "Ubuntu 19.10 Release Party",
                    time: "2019.11.16",
                    place: "B111",
                    author: "HITLUG & HITMSC",
                    image: "1910release.png"
                },
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 80px;
}
</style>
