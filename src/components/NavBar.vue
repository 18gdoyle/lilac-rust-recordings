<template>
    <div id="navBar">
        <div id="title">
            <a href="/">Lilac Rust Production</a>
        </div>
        <div id="pages">
            <div class="pageOption"><a href="/about" style="cursor: pointer;">About</a></div>
            <div class="pageOption">
                <a href="/instrumentals" style="cursor: pointer;">Instrumentals</a>
            </div>
            <div class="pageOption"><a href="/recording" style="cursor: pointer;">Recording</a></div>
            <div class="pageOption"><a href="/mixingandmastering" style="cursor: pointer;">Mixing and Mastering</a></div>
            <div class="pageOption"><a href="/webdesign" style="cursor: pointer;">Web Design</a></div>
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
}
</style>
