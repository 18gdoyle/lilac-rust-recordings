<template>
    <div class="glassDiv"
        style="width: 90%; display: flex; justify-content: center; margin: .5%; border-radius: 0; flex-direction: column; border-radius: 10px;">
        <div style="width: 100%; text-align: center; display: flex;">
            <div style="display: flex; align-items: center; width: 3%; justify-content: center;">
                <i v-if="!playing" class="fa-solid fa-play" @click="playTrack()"
                    style="color: white; font-size: xx-large; cursor: pointer;">
                </i>
                <i v-if="playing" class="fa-solid fa-pause" @click="pauseTrack()"
                    style="color: white; font-size: xx-large; cursor: pointer;">
                </i>
            </div>
            <img :src="albumArt" style="width: 5%; margin-left: 2%; margin-right: 2%; border-radius: 10px;" />
            <div style="width: 50%; text-align: left; display: flex; justify-content: center; flex-direction: column;">
                <strong style="color: white; font-size: large;">{{ title }}</strong>
            </div>
            <div
                style="width: 42%; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <a class="socialMediaButtonLong" @click="showInfo = !showInfo">
                    <i class="fa-solid fa-angle-down"></i>
                    <h4 style="margin-left: 5%; margin-right: 5%;">MORE INFO</h4>
                    <i class="fa-solid fa-angle-down"></i>
                </a>
            </div>
        </div>
        <div v-if="showInfo" style="width: 100%; display: flex; justify-content: center;">
            <div style="width: 60%;">
                <div
                    style="display: flex; justify-content: space-between; color: rgb(185, 184, 184); margin-top: 2%; width: 100%;">
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>BASIC</strong>
                        <div>$15.00</div>
                        <div style="color: white; text-decoration: underline; cursor: pointer;" @click="$emit('showBasicLicenseTerms')">License Terms</div>
                    </div>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>PREMIUM</strong>
                        <div>$20.00</div>
                        <div style="color: white; text-decoration: underline; cursor: pointer;" @click="$emit('showPremiumLicenseTerms')">License Terms</div>
                    </div>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>UNLIMITED</strong>
                        <div>$30.00</div>
                        <div style="color: white; text-decoration: underline; cursor: pointer;" @click="$emit('showUnlimitedLicenseTerms')">License Terms</div>
                    </div>
                    <div style="display: flex; align-items: center; flex-direction: column;">
                        <strong>EXCLUSIVE</strong>
                        <div>DM FOR INFO</div>
                    </div>
                </div>
                <div style="width: 100%; display: flex; justify-content: center; align-items: center; margin-top: 2%;">
                    <a class="socialMediaButtonLong" :href=airbit target="_blank"
                        style="justify-content: space-evenly; width: 20%;" v-if="airbit">
                        <img alt="Lilac Rust on AirBit" src="/airbit-image.webp" height="100%" />
                        <div style="margin: 2%;">BUY ON AIRBIT</div>
                        <img alt="Lilac Rust on AirBit" src="/airbit-image.webp" height="100%" />
                    </a>
                    <strong style="color: white; margin: 2%;" v-if="airbit">OR</strong>
                    <a class="socialMediaButtonLong" style="justify-content: space-evenly; width: 20%;"
                        href="https://www.instagram.com/lilac_rust_music/" target="_blank">
                        <i class="fa-brands fa-instagram socialMediaIcon" style="font-size: xx-large;"></i>
                        <div style="margin: 2%;">DM TO BUY</div>
                        <i class="fa-brands fa-instagram socialMediaIcon" style="font-size: xx-large;"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            playing: false,
            showInfo: false
        };
    },
    props: {
        soundcloud: String,
        title: String,
        airbit: String,
        fileURL: String,
        albumArt: String,
        trackId: Number,
    },
    methods: {
        playTrack() {
            this.playing = true;
            this.$emit('playPauseSoundCloud', { fileURL: this.fileURL, artwork: this.albumArt, title: this.title, trackId: this.trackId, airbit: this.airbit });
        },
        pauseTrack() {
            this.playing = false;
            this.$emit('playPauseSoundCloud', { fileURL: this.fileURL, artwork: this.albumArt, title: this.title, trackId: this.trackId, airbit: this.airbit });
        },
        stopTrack() {
            this.playing = false;
        },
        startTrack() {
            this.playing = true;
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
    width: 50%;
}
</style>