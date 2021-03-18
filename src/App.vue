<template>
    <div id="app" style="font-family: consolas">
        <!-- <div class="img-head"></div> -->
        <div class="head-bg">
            <img class="head-img" src="./assets/images/header_alpha.png"/>
        </div>
        <container class="container"/>
        <div style="height: 100px; background-color: white; margin-top: 40px">
        </div>
    </div>
</template>

<script>
import container from './components/container.vue'

export default {
    name: 'App',
    components: {
        container
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    font-size: large;
    /*margin-top: 60px;*/
}

body {
    margin: 0;
}

.img-head {
    width: 100%;
}

.container {
    margin-top: 40px;
    margin-left: 0 !important;
    margin-right: 0 !important;

}

.img-head {
    background: url("./assets/images/header_alpha.png") center;
    width: 50%;
    padding-bottom: 20%;
    height: auto;
    background-size: cover;
    border-radius: 4px;
}


.head-bg {
    max-height: 300px;
    display: block;
    margin: auto;
    text-align: center;
    max-width: 100%;
    background-image: linear-gradient(to right, rgb(250, 250, 250), rgb(240, 240, 240));
}

.head-img {
    display: inline-block;
    max-width: 100%;
    max-height: 300px;
}
</style>
