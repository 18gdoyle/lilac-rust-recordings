<template>
    <div class="pageTopMargin" style="padding: 2%; color: white;">
        <input @input="stripEmbed" />
        <br />
        <br />
        <textarea style="width: 90%; height: 100px;" v-model="instrumentalsJSONOutput"></textarea>
    </div>
</template>

<script>
import instrumentals from '@/assets/instrumentals.json'
export default {
  data() {
    return {
      instrumentalsJSON: instrumentals,
        instrumentalsJSONOutput: '',
    };
  },
  methods: {
    stripEmbed(e) {
        console.dir(e.target.value);
        let url = e.target.value.split('src="')[1].split('"')[0];
        let title = e.target.value.split('[FREE] ')[1].split(' |')[0].replaceAll('&#x27;', '').toUpperCase();
        console.dir(url);
        console.dir(title);
        instrumentals.push({soundcloudLink: url, title: title});
        console.dir(instrumentals);
        this.instrumentalsJSONOutput = JSON.stringify(instrumentals, null, 4);
    }
  }
}
</script>