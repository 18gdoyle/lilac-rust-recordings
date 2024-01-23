<template>
    <div class="glassDiv" style="width: 90%; display: flex; justify-content: center; margin: 0; border-radius: 0;">
        <div style="width: 100%; text-align: center; display: flex;">
            <div style="display: flex; align-items: center; width: 8%; justify-content: center;">
                <i v-if="!playing" class="fa-solid fa-play" @click="playTrack()"
                    style="color: white; font-size: xx-large; cursor: pointer;">
                </i>
                <i v-if="playing" class="fa-solid fa-pause" @click="pauseTrack()"
                    style="color: white; font-size: xx-large; cursor: pointer;">
                </i>
            </div>
            <div style="width: 50%; text-align: left; display: flex; justify-content: center; flex-direction: column;">
                <strong style="color: white; font-size: large;">{{ title }}</strong>
                <div style="display: flex; justify-content: space-between; color: rgb(185, 184, 184);">
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>BASIC</strong>
                        <div>$15.00</div>
                    </div>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>PREMIUM</strong>
                        <div>$20.00</div>
                    </div>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>UNLIMITED</strong>
                        <div>$30.00</div>
                    </div>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>EXCLUSIVE</strong>
                        <div>DM FOR INFO</div>
                    </div>
                </div>
            </div>
            <div style="width: 42%; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <div style="display: flex; justify-content: space-evenly; align-items: center;">
                    <div style="display: flex; align-items: center; flex-direction: column;" v-if="airbit">
                        <a class="socialMediaButton" :href=airbit target="_blank" style="justify-content: space-evenly;">
                            <img alt="Lilac Rust on AirBit" src="/airbit-image.webp" height="100%" />
                        </a>
                        <div style="color: white;">DM TO BUY</div>
                    </div>
                    <strong style="color: white;" v-if="airbit">OR</strong>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <a class="socialMediaButton" style="justify-content: space-evenly;"
                            href="https://www.instagram.com/lilac_rust_music/" target="_blank">
                            <i class="fa-brands fa-instagram socialMediaIcon"></i>
                        </a>
                        <div style="color: white;">BUY ON AIRBIT</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            playing: false
        };
    },
    props: {
        soundcloud: String,
        title: String,
        airbit: String,
    },
    methods: {
        playTrack() {
            this.playing = true;
            this.$emit('playPauseSoundCloud', this.soundcloud);
        },
        pauseTrack() {
            this.playing = false;
            this.$emit('playPauseSoundCloud', this.soundcloud);
        }
    }
}
</script>

<style scoped>
.socialMediaIcon {
    font-size: 200%;
    margin: auto;
}

.socialMediaButton {
    height: 6vh;
    width: 6vh;
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
    margin: 2%;
    cursor: pointer;
}</style>