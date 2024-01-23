<script setup>
import InstrumentalListItem from '@/components/InstrumentalListItem.vue';
</script>

<template>
  <div class="pageTopMargin instrumentalsPage">
    <div style="margin-top: 5%; display: flex; flex-direction: column; width: 100%; align-items: center;">
      <InstrumentalListItem v-for="instrumental in instrumentalsJSON.slice().reverse()"
        :soundcloud="instrumental.soundcloudLink" :title="instrumental.title" :airbit="instrumental.airbit || null"
        @playPauseSoundCloud="playPauseSoundCloud"></InstrumentalListItem>
    </div>
    <div style="height: 15%; width: 100%; overflow:hidden; position: fixed; bottom: 0; left: 0;">
      <iframe id="soundCloudIFrame" width="100%" height="123%" style="position: relative; top: -5%;" scrolling="no"
        frameborder="no" allow="autoplay" :src=currentSoundCloudLink>
      </iframe>
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
      trackPlaying: false,
      widget: null
    };
  },
  mounted() {
  },
  methods: {
    playPauseSoundCloud(link) {
      if (link === this.currentSoundCloudLink && this.trackPlaying) {
        SC.Widget(document.getElementById('soundCloudIFrame')).pause();
        this.trackPlaying = false;
      } else if (link === this.currentSoundCloudLink && !this.trackPlaying) {
        SC.Widget(document.getElementById('soundCloudIFrame')).play();
        this.trackPlaying = true;
      } else if (link !== this.currentSoundCloudLink) {
        this.currentSoundCloudLink = link;
        this.trackPlaying = true;
        SC.Widget(document.getElementById('soundCloudIFrame')).load(link);
      }
    }
  }
}
</script>
<style scoped>
.instrumentalsPage {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
