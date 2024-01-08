<template>
    <div id="navBar">
        <div id="title">
            <a href="/" class="hover-underline-animation">Lilac Rust</a>
        </div>
        <div id="pages">
            <div class="pageOption">
                <a href="/instrumentals" class="hover-underline-animation">Instrumentals</a>
            </div>
            <div class="pageOption">
                <a href="/studioservices" class="hover-underline-animation">Studio Services</a>
            </div>
            <div class="pageOption">
                <a href="/webdesign" class="hover-underline-animation" style="cursor: pointer;">Web Design</a>
            </div>
            <div class="pageOption">
                <a href="/pastprojects" class="hover-underline-animation">Past Projects</a>
            </div>
            <div class="pageOption">
                <a href="/about" class="hover-underline-animation">About</a>
            </div>
        </div>
    </div>
</template>

<style scoped>

#navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    z-index: 10;
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
