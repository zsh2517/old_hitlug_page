<template>
    <div id="app" style="font-family: consolas;">
        <!-- <div class="img-head"></div> -->
        <div class="head-bg hidden-sm-and-up">
            <img class="head-img" src="./assets/images/header_alpha.png"/>
        </div>
        <div class="head-bg hidden-xs-only" style="padding-top: 20px; padding-bottom: 20px;">
            <img class="head-img-text" src="./assets/images/text.png"/>
            <img class="head-img-logo" src="./assets/images/logo.png"/>
        </div>
        <container class="container"/>
        <div style="padding: 40px 12px 60px 12px; background-color: rgb(51, 51, 51); margin-top: 40px">
            <foot/>
        </div>
    </div>
</template>

<script>
import container from './components/container.vue'
import foot from './components/foot.vue'

export default {
    name: 'App',
    components: {
        container,
        foot
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
    max-height: 200px;
    display: flex;
    justify-content: space-around;
    margin: auto;
    text-align: center;
    max-width: 100%;
    background-image: linear-gradient(to right, rgb(250, 250, 250), rgb(240, 240, 240));
    /*background-image: url("assets/images/head-bg.png");*/
}

.head-img {
    display: inline-block;
    /*display: block;*/
    max-width: 100%;
    max-height: 180px;
    /*filter: invert(100%);*/
}

.head-img-text {
    display: inline-block;
    /*display: block;*/
    max-width: 100%;
    max-height: 180px;
    /*filter: invert(100%);*/
}

.head-img-logo {
    display: inline-block;
    /*display: block;*/
    max-width: 100%;
    max-height: 180px;
    -webkit-transition: -webkit-transform 1s linear;
    transition: transform 1s linear;
    /*filter: invert(100%);*/

}

.head-img-logo:hover {
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
    -webkit-transition-delay: 2s;
    transition-delay: 2s;
    -webkit-transition: -webkit-transform 2s linear;
    transition: transform 2s linear;
}
</style>
