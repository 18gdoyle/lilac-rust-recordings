<script setup>
import InstrumentalListItem from '@/components/InstrumentalListItem.vue';
</script>

<template>
  <div class="pageTopMargin instrumentalsPage">
    <div style="margin-top: 5%; display: flex; flex-direction: column; width: 100%; align-items: center;">
      <InstrumentalListItem v-for="(instrumental, index) in instrumentalsJSON.slice().reverse()"
        :soundcloud="instrumental.soundcloudLink" :title="instrumental.title" :airbit="instrumental.airbit || null"
        :fileURL="instrumental.fileURL" :albumArt="instrumental.albumArt" @playPauseSoundCloud="playPauseTrack"
        :trackId="index" :ref="index">
      </InstrumentalListItem>
    </div>
    <audio src="" id="audioPlayer"></audio>
    <div style="width: 100%; overflow:hidden; position: fixed; bottom: 0; left: 0;" v-if="currentSong.title">
      <div id="player02" class="player horizontal">
        <div class="wrapper">
          <div style="display: flex; align-items: center;">
            <div class="info-wrapper" style="width: 25%;">
              <img v-if="currentSong.artwork" id="artwork" :src="currentSong.artwork" alt="LogoMusicImage">
              <div class="info" id="songInfo" v-if="currentSong.title">
                <h1>{{ currentSong.title }}</h1>
                <p>Lilac Rust</p>
              </div>
              <div v-else>
                <h1>NO TRACK SELECTED</h1>
              </div>
            </div>
            <div style="width: 50%;">
              <div class="controls">
                <div class="prev">
                  <i @click="prevTrack()" class="fa-solid fa-backward"
                    style="color: white; font-size: xx-large; cursor: pointer;"></i>
                </div>
                <div class="play" style="width: 5%; display: flex; align-items: center; justify-content: center;">
                  <i v-if="!trackPlaying" class="fa-solid fa-play" @click="playPauseTrack(currentSong)"
                    style="color: white; font-size: xx-large; cursor: pointer;">
                  </i>
                  <i v-if="trackPlaying" class="fa-solid fa-pause" @click="playPauseTrack(currentSong)"
                    style="color: white; font-size: xx-large; cursor: pointer;">
                  </i>
                </div>
                <div class="next">
                  <i @click="nextTrack()" class="fa-solid fa-forward"
                    style="color: white; font-size: xx-large; cursor: pointer;"></i>
                </div>
              </div>
              <div class="track-time">
                <div class="track">
                  <input @change=setTrackTime($event) class="customRange" type="range" id="volume" name="volume" min="0" max="100" :value="currentSongPercentage" style="width: 100%; color: black;" />
                </div>
                <div class="time">
                  <div class="total-time">{{ currentTimeInSong }}</div>
                  <div class="last-time">{{ currentSong.duration || "00:00" }}</div>
                </div>
              </div>
            </div>
            <div style="width: 25%; display: flex;">
              <div class="track" style="margin-left: 5%; width: 50%; display: flex; align-items: center;">
                <i class="fa-solid fa-volume-high" style="color: white; font-size: large; margin-right: 5%;"></i>
                <input class="customRange" @change="setVolume($event)" type="range" id="volume" name="volume" min="0" max="100" value="100" style="width: 100%; color: black;" />
              </div>
              <a class="socialMediaButtonLong" style="justify-content: space-evenly;">
                <i class="fa-solid fa-angle-up"></i>
                <h1>MORE INFO</h1>
                <i class="fa-solid fa-angle-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
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
      currentSongPercentage: 0
    };
  },
  mounted() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.addEventListener('timeupdate', (event) => {
      const currentTime = parseInt(event.target.currentTime);
      let durationMinutes = Math.floor(audioPlayer.duration / 60);
      if (durationMinutes) {
        let durationSeconds = Math.floor(audioPlayer.duration % 60);
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
        this.currentSong.duration = "0" + durationMinutes + ":" + durationSeconds;
        this.currentSongPercentage = (currentTime / event.target.duration) * 100;
      } else {
        this.currentSong.duration = "00:00"
        this.currentSongPercentage = 0;
      }

      let minutes = Math.floor(currentTime / 60);
      let seconds = currentTime % 60
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      this.currentTimeInSong = "0" + minutes + ":" + seconds;

      if (this.currentTimeInSong !== "00:00" && this.currentTimeInSong === this.currentSong.duration) {
        this.$refs[this.currentSong.trackId][0].stopTrack();
        if (this.$refs[this.currentSong.trackId + 1]) this.$refs[this.currentSong.trackId + 1][0].playTrack();
        this.trackPlaying = false;
      }
    });
  },
  methods: {
    playPauseTrack(trackInfo) {
      if (!trackInfo.title) {
        return;
      }

      const audioPlayer = document.getElementById('audioPlayer');
      if (this.currentSong.title && trackInfo.title !== this.currentSong.title) {
        this.$refs[this.currentSong.trackId][0].stopTrack();
        audioPlayer.pause();
      }
      this.currentSong = trackInfo;

      if (!trackInfo.fileURL) {
        return
      }

      
      const fileURL = trackInfo.fileURL;
      if (fileURL === this.currentFileURL && this.trackPlaying) {
        audioPlayer.pause();
        this.$refs[this.currentSong.trackId][0].stopTrack();
        this.trackPlaying = false;
      } else if (fileURL === this.currentFileURL && !this.trackPlaying) {
        audioPlayer.play();
        this.$refs[this.currentSong.trackId][0].startTrack();
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
        if (this.$refs[this.currentSong.trackId - 1]) this.$refs[this.currentSong.trackId - 1][0].playTrack();
      }
    },
    nextTrack() {
      if (this.$refs[this.currentSong.trackId + 1]) this.$refs[this.currentSong.trackId + 1][0].playTrack();
    },
    setVolume(event) {
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.volume = event.target.value / 100;
      console.dir(audioPlayer.volume);
    },
    setTrackTime(event) {
      const sliderValue = event.target.value;
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.currentTime = audioPlayer.duration * (sliderValue / 100);
    }
  }
}
</script>
<style scoped>
.customRange {
  -webkit-appearance: none;
  appearance: none; 
  width: 100%;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 16px;
}

.customRange::-webkit-slider-runnable-track {
  height: 10px;
  background: #3b3a3a;
  border-radius: 16px;
}

.customRange::-moz-range-track {
  height: 10px;
  background: #D9D9D9;
  border-radius: 16px;
}

.customRange::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 10px;
  width: 15px;
  background-color: #fff;
  border-radius: 30%;
  border: 2px solid white;
  box-shadow: -407px 0 0 400px white;
}

.customRange::-moz-range-thumb {
  height: 10px;
  width: 15px;
  background-color: #fff;
  border-radius: 30%;
  border: 1px solid #f50;
  box-shadow: -407px 0 0 400px #f50;
}

.socialMediaButtonLong {
  height: 50px;
  display: flex;
  justify-content: center;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  align-items: center;
  color: #fff;
  padding: 1%;
  margin-left: 10%;
  cursor: pointer;
}

#artwork {
  margin-right: 2%;
}

.instrumentalsPage {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20%;
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
  padding: 1%;
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
  font-size: large;
  color: white;
}


.controls {
  display: flex;
  justify-content: space-between;
}

.track {
  padding-top: 2%;
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

.currentVolume {
  content: '';
  height: 6px;
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
