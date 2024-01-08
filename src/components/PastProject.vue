<template>
    <div class="glassDiv">
        <div class="projectInfo">
            <h1>{{ title }}</h1>
            <h4>{{ date }}</h4>
            <div style="display: flex;">
                <a v-if="tikTokButton !== undefined" class="socialMediaButton" :href=tikTokButton target="_blank"><i class="fa-brands fa-tiktok socialMediaIcon"></i></a>
                <a v-if="youtubeButton !== undefined" class="socialMediaButton" :href=youtubeButton target="_blank"><i class="fa-brands fa-youtube socialMediaIcon"></i></a>
                <a v-if="instagramButton !== undefined" class="socialMediaButton" :href=instagramButton target="_blank"><i class="fa-brands fa-instagram socialMediaIcon"></i></a>
                <a v-if="spotifyButton !== undefined" class="socialMediaButton" :href="spotifyButton" target="_blank"><i class="fa-brands fa-spotify socialMediaIcon"></i></a>
                <a v-if="streamingServices !== undefined" class="socialMediaButtonLong" :href="streamingServices" target="_blank">ALL STREAMING SERVICES</a>
            </div>
            <div class="whiteGlassDiv" v-if="description !== undefined">
                <h4>From Lilac</h4>
                <h3 v-html="description"></h3>
            </div>
            <div class="whiteGlassDiv" v-if="review !== undefined">
                <h4>From the Artist</h4>
                <h3>"{{ review }}"</h3>
            </div>
        </div>
        <div class="iframePadding">
            <iframe style="border-radius:12px"
                :src=spotifyIframe width="100%"
                height="100%" frameBorder="0" allowfullscreen="false"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
            </iframe>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    spotifyIframe: String,
    instagramButton: String,
    tikTokButton: String,
    youtubeButton: String,
    spotifyButton: String,
    streamingServices: String,
    description: String,
    review: String
  }
}
</script>

<style scoped>
.socialMediaIcon {
    font-size: 200%;
    margin: auto;
}
.socialMediaButton {
    height: 5vh;
    width: 5vh;
    display: flex;
    justify-content: center;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    margin-right: 1%;
    margin-bottom: 2%;
}

.socialMediaButtonLong {
    height: 5vh;
    display: flex;
    justify-content: center;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    align-items: center;
    color: #fff;
    margin-right: 1%;
    margin-bottom: 2%;
    padding: 1%;
}

.projectInfo {
    color: white;
    width: 50%;
}

.projectInfo h4 {
    color: var(--color-text);;
    padding-bottom: 2%;
}

.iframePadding {
    display: flex;
    justify-content: center;
    width: 50%;
    height: auto;
    min-height: 355px;
}

@media (max-width: 840px) {
  .projectInfo {
    width: 100%;
  }

  .projectInfo h1 {
    line-height: 1;
  }

  .socialMediaButtonLong {
    padding: 2%;
  }

  .iframePadding {
    width: 100%;
    min-height: 0px;
  }

  .whiteGlassDiv {
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
    .iframePadding {
        width: 100%;
        max-height: 80px;
    }
}
</style>