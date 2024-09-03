<template>
  <div class="glassDiv" style="font-weight: normal !important;">
    <div class="projectInfo">
      <div class="titleAndImage" style="display: flex; margin-bottom: 5%; align-items: center;">
        <div class="title">
          <h1>{{ title }}</h1>
          <h4>{{ date }}</h4>
          <div class="iconsRow" style="display: flex;">
            <a v-if="tikTokButton !== undefined" class="socialMediaButton" :href=tikTokButton target="_blank"><i
                class="fa-brands fa-tiktok socialMediaIcon"></i></a>
            <a v-if="youtubeButton !== undefined" class="socialMediaButton" :href=youtubeButton target="_blank"><i
                class="fa-brands fa-youtube socialMediaIcon"></i></a>
            <a v-if="instagramButton !== undefined" class="socialMediaButton" :href=instagramButton target="_blank"><i
                class="fa-brands fa-instagram socialMediaIcon"></i></a>
            <a v-if="spotifyButton !== undefined" class="socialMediaButton" :href="spotifyButton" target="_blank"><i
                class="fa-brands fa-spotify socialMediaIcon"></i></a>
            <a v-if="streamingServices !== undefined" class="socialMediaButton" :href="streamingServices" target="_blank"><i 
              class="fa-solid fa-globe socialMediaIcon"></i></a>
          </div>
        </div>
        <div class="albumArtContainer">
          <img alt="Album Art" :src="albumArt" class="albumArt" width="80%" style="border-radius: 15px;"/>
        </div>
      </div>

      <div class="whiteGlassDiv" v-if="description !== undefined">
        <p class="fromTitle">From Lilac</p>
        <p v-html="description" class="note"></p>
      </div>
      <div class="whiteGlassDiv" style="margin-top: 2%;" v-if="review !== undefined">
        <p class="fromTitle">From the Artist</p>
        <p class="note">"{{ review }}"</p>
      </div>
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
    review: String,
    albumArt: String
  }
}
</script>

<style scoped>
.fromTitle {
  font-size: large;
  font-weight: bold;
  color: var(--color-text);
}

.glassDiv {
  width: 50%;
}

.titleAndImage {
  justify-content: center;
}

.title {
  flex-basis: 100%;
}

.albumArtContainer {
  flex-basis: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
}

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
  margin-right: 2%;
  margin-bottom: 2%;
  transition: .3s;
}
.socialMediaButton:hover {
  box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
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
}

.fromTitle {
  font-size: larger;
}

.note {
  font-size: large;
}

.projectInfo h4 {
  color: var(--color-text);
  padding-bottom: 2%;
}

.iframePadding {
  display: flex;
  justify-content: center;
  width: 50%;
  height: auto;
  min-height: 355px;
}

.whiteGlassDiv {
  padding: 2%;
}

@media only screen and (max-width: 768px) {
  .socialMediaButtonLong {
    padding: 50%;
  }

  .socialMediaButton {
    height: 8vh;
    width: 8vh;
    max-height: 50px;
    max-width: 50px;
  }

  .glassDiv {
    margin-top: 0;
  }

  .titleAndImage {
    flex-direction: column-reverse;
    justify-content: center;
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1vh
  }

  .albumArtContainer {
    width: 100%;
  }

  .albumArt {
    width: 100%;
    margin-bottom: 2%;
  }

  .projectInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .iconsRow {
    width: 100%;
    gap: 2vw;
    justify-content: center;
  }

  .projectInfo h1 {
    line-height: 1;
  }

  .socialMediaButtonLong {
    padding: 5%;
  }

  .iframePadding {
    width: 100%;
    min-height: 0px;
  }

  .whiteGlassDiv {
    line-height: 1.5;
    padding: 4%
  }
}
</style>