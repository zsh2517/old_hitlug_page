<template>
    <div id="app" style="font-family: consolas">
        <!-- <div class="img-head"></div> -->
        <div class="head-bg hidden-sm-and-up">
            <img class="head-img" src="./assets/images/header_alpha.png"/>
        </div>
        <div class="head-bg hidden-xs-only" style="padding-top: 20px; padding-bottom: 20px;">
            <img class="head-img-text" src="./assets/images/text.png"/>
            <img class="head-img-logo" src="./assets/images/logo.png"/>
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
    max-height: 200px;
    display: flex;
    justify-content: space-around;
    margin: auto;
    text-align: center;
    max-width: 100%;
    background-image: linear-gradient(to right, rgb(250, 250, 250), rgb(240, 240, 240));
}

.head-img {
    display: inline-block;
    /*display: block;*/
    max-width: 100%;
    max-height: 180px;
}

.head-img-text {
    display: inline-block;
    /*display: block;*/
    max-width: 100%;
    max-height: 180px;
}

.head-img-logo {
    display: inline-block;
    /*display: block;*/
    max-width: 100%;
    max-height: 180px;
    -webkit-transition: -webkit-transform 1s linear;
    transition: transform 1s linear;
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
