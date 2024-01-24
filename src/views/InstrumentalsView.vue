<script setup>
import InstrumentalListItem from '@/components/InstrumentalListItem.vue';
</script>

<template>
  <div class="pageTopMargin instrumentalsPage">
    <div style="margin-top: 5%; display: flex; flex-direction: column; width: 100%; align-items: center;">
      <InstrumentalListItem v-for="instrumental in instrumentalsJSON.slice().reverse()"
        :soundcloud="instrumental.soundcloudLink" :title="instrumental.title" :airbit="instrumental.airbit || null"
        :fileURL="instrumental.fileURL" :albumArt="instrumental.albumArt" @playPauseSoundCloud="playPauseTrack"
        :ref="instrumental.title">
      </InstrumentalListItem>
    </div>
    <div style="height: 50%; width: 100%; overflow:hidden; position: fixed; bottom: 0; left: 0;">
      <audio src="" id="audioPlayer"></audio>
      <div id="player02" class="player horizontal">
        <div class="wrapper">
          <div class="info-wrapper">
            <img id="artwork" :src="currentSong.artwork" alt="LogoMusicImage">
            <div class="info" id="songInfo">
              <h1>{{ currentSong.title }}</h1>
              <p>Lilac Rust</p>
            </div>
          </div>

          <div class="controls">
            <div class="prev">
              <i @click="prevTrack()" class="fa-solid fa-backward" style="color: white; font-size: xx-large; cursor: pointer;"></i>
            </div>
            <div class="play">
              <i v-if="!trackPlaying" class="fa-solid fa-play" @click="playPauseTrack(currentSong)"
                style="color: white; font-size: xx-large; cursor: pointer;">
              </i>
              <i v-if="trackPlaying" class="fa-solid fa-pause" @click="playPauseTrack(currentSong)"
                style="color: white; font-size: xx-large; cursor: pointer;">
              </i>
            </div>
            <div class="next">
              <i @click="nextTrack()" class="fa-solid fa-forward" style="color: white; font-size: xx-large; cursor: pointer;"></i>
            </div>
          </div>

          <div class="track-time">
            <div class="track">
              <div class="notPlayed"></div>
              <div id="playedBar" class="played"></div>
            </div>
            <div class="time">
              <div class="total-time">{{ currentTimeInSong }}</div>
              <div class="last-time">{{ currentSong.duration || "00:00" }}</div>
            </div>
          </div>


        </div>
      </div>
      <!--
      <iframe id="soundCloudIFrame" width="100%" height="123%" style="position: relative; top: -5%;" scrolling="no"
        frameborder="no" allow="autoplay" :src=currentSoundCloudLink>
      </iframe>
      -->
    </div>
  </div>
</template>

<script>
import instrumentals from '@/assets/instrumentals.json'
import InstrumentalListItem from '@/components/InstrumentalListItem.vue';
export default {
  data() {
    return {
      instrumentalsJSON: instrumentals,
      currentSoundCloudLink: '',
      currentSong: {},
      trackPlaying: false,
      widget: null,
      currentTimeInSong: '0:00',
    };
  },
  mounted() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.addEventListener('timeupdate', (event) => {
      const currentTime = parseInt(event.target.currentTime);
      const playedBar = document.getElementById('playedBar');
      let durationMinutes = Math.floor(audioPlayer.duration / 60);
      if (durationMinutes) {
        let durationSeconds = Math.floor(audioPlayer.duration % 60);
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
        this.currentSong.duration = "0" + durationMinutes + ":" + durationSeconds;
        playedBar.style.width = (currentTime/event.target.duration) * 100 + "%";
      } else {
        this.currentSong.duration = "00:00"
        playedBar.style.width = "0%";
      }
      
      let minutes = Math.floor(currentTime / 60);
      let seconds = currentTime % 60
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      this.currentTimeInSong = "0" + minutes + ":" + seconds;
    });
  },
  methods: {
    playPauseTrack(trackInfo) {
      if (!trackInfo.fileURL) {
        return;
      }

      if (this.currentSong.title && trackInfo.title !== this.currentSong.title) {
        console.dir(this.$refs[trackInfo.title][0])
        this.$refs[this.currentSong.title][0].stopTrack()
      }

      this.currentSong = trackInfo;
      const audioPlayer = document.getElementById('audioPlayer');
      const fileURL = trackInfo.fileURL;
      if (fileURL === this.currentFileURL && this.trackPlaying) {
        audioPlayer.pause();
        this.trackPlaying = false;
      } else if (fileURL === this.currentFileURL && !this.trackPlaying) {
        audioPlayer.play();
        this.trackPlaying = true;
      } else if (fileURL !== this.currentFileURL) {
        audioPlayer.currentTime = 0;
        audioPlayer.src = fileURL;
        audioPlayer.play();
        this.trackPlaying = true;
      }
      this.currentFileURL = fileURL;
    },
    prevTrack() {
      const audioPlayer = document.getElementById('audioPlayer');
      if (audioPlayer.currentTime > 5) {
        audioPlayer.currentTime = 0;
      } else {

      }
    },
    nextTrack() {

    }
  }
}
</script>
<style scoped>
#artwork {
  margin-right: 2%;
}

.instrumentalsPage {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#boxes * {
  border: 1px solid transparent;
}

#boxes {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-areas:
    'A B'
    'A C';
  gap: 32px;
  place-content: center;
  height: 100vh;
}

#player01 {
  grid-area: A;
  padding: 50px 38px;
}

#player01 .wrapper {
  width: 190px;
}


#player01 img {
  width: 190px;
  height: 190px;
  object-fit: cover;
  border-radius: 10px;
}

#player01 .info {
  padding-top: 28px;
}

#player02 {
  grid-area: B;
  height: 100%;
}

#player02 .controls {
  display: flex;
  justify-content: space-around;
}

#player03 {
  grid-area: C;
}

#player03 .controls {
  display: flex;
  justify-content: space-around;
}

.player {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(25px);
  padding: 28px;
}

.player img {
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 10px;
}


.info {
  color: #E1E1E6;
}

.info p {
  opacity: 0.68;
  font-size: 19px;
}

.info-wrapper {
  display: flex;
  align-items: center;
}

.player h1 {
  font-size: 27px;
  color: #E1E1E6;
  padding-bottom: 7px;
}


.controls {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}

.track {
  padding-top: 28px;
  position: relative;

}

.notPlayed {
  content: '';
  height: 6px;
  width: 100%;
  display: block;
  background: #D9D9D9;
  opacity: 0.3;
  border-radius: 10px;
  position: absolute;
}

.played {
  content: '';
  height: 6px;
  width: 0%;
  display: block;
  background: #D9D9D9;
  border-radius: 10px;
}

.time {
  opacity: 0.7;
  font-size: 14px;
  color: gainsboro;

  display: flex;
  justify-content: space-between;
  padding-top: 9.6px;
}

@media (max-width: 670px) {
  #boxes {
    display: flex;
    flex-direction: column;

    max-width: 270px;
    margin: auto;


    height: auto;
    padding-block: 60px;
  }
}
</style>
