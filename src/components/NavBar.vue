<template>
    <div id="navBar">
        <div id="title">
            <a href="/" class="hover-underline-animation">Lilac Rust Production</a>
        </div>
        <div id="pages">
            <div class="pageOption">
                <a href="/about" class="hover-underline-animation">About</a>
            </div>
            <div class="pageOption">
                <a href="/instrumentals" class="hover-underline-animation">Instrumentals</a>
            </div>
            <div class="pageOption">
                <a href="/recording" class="hover-underline-animation">Recording</a>
            </div>
            <div class="pageOption">
                <a href="/mixingandmastering" class="hover-underline-animation">Mixing and Mastering</a>
            </div>
            <div class="pageOption">
                <a href="/webdesign" class="hover-underline-animation" style="cursor: pointer;">Web Design</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hover-underline-animation {
    display: inline-block;
    position: relative;
    cursor: pointer;
}

.hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

#navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(500px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
}

#title {
    color: white;
    font-size: xx-large;
    padding-left: 1%;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
}

#pages {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 1%;
}

.pageOption {
    padding: 1%;
    color: white;
    font-size: large;
}</style>
