<template>
<div class="activityitem">
    <el-card style="padding: 0">
        <div class="activities-img" :style="{'background-image': 'url(' + require('@/assets/images/activities/' + image) + ')'} "/>
        <div style="padding: 1em">
            <div class="activities-title"><span style="font-size: larger; display: block; height: 2.8em;">{{name}}</span></div>
            <div class="activities-place"><span style="color:gray; font-size: smaller;">{{time}}|{{place}}</span> </div>
            <div class="activities-author"><span>@{{author}}</span> &nbsp;&nbsp;&nbsp;</div>

        </div>
    </el-card>
</div>
</template>

<script>
export default {
    name: "activityitem",
    data() {
        return {
        }
    },
    props: {
        name: String,
        time: String,
        place: String,
        author: String,
        image: String
    }
}
</script>

<style scoped>
.activityitem {
    margin-top: 20px;
}

.el-card >>> .el-card__body {
    padding: 0;
}

.activities-img {
    height: auto;
    padding-bottom: 50%;
    width: 100%;
    background-size: cover;
    border-radius: 4px;
}

.activities-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;/* （行数） */
    -webkit-box-orient: vertical;
}
.activities-place {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;/* （行数） */
    -webkit-box-orient: vertical;
    height: 1em;
}
.activities-author {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;/* （行数） */
    -webkit-box-orient: vertical;
    height: 1.5em;
}
</style>
