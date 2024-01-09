<template>
    <div class="pageTopMargin">
        <div style="display: flex; width: 100%;">
            <div class="glassDiv" style="height: 80vh; width: 50%; display: flex;">
                <div style="width: 60%;">
                <div class="whiteGlassDiv" style="color: white;">
                    Still playing around with this idea
                </div>
                </div>
                <div style="width: 40%; position: relative;">
                    <a href="https://lilacrust.com/" target="_blank"></a>
                    <iframe src="https://lilacrust.com/" class="iframe" height="100%" width="100%"></iframe>
                </div>
            </div>
            <div class="glassDiv" style="height: 80vh; width: 50%; display: flex;">
                <div style="width: 60%;"></div>
                <div style="width: 40%; position: relative;">
                    <a href="https://gregoryvincentdoyle.com/" target="_blank"></a>
                    <iframe src="https://gregoryvincentdoyle.com/" class="iframe" height="100%" width="100%"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.iframe {
    border: 0px;
    border-radius: 16px;
    position: absolute;
    z-index: -1;
}

a {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
}
</style>