<template>
    <div class="glassDiv" style="width: 40%; display: flex; justify-content: center; flex-direction: column; margin: 0;">
        <div style="width: 100%; text-align: center;">
            <i v-if="!playing" class="fa-solid fa-play" @click="$emit('playPauseSoundCloud', soundcloud); playing = true;"
                style="color: white;">
            </i>
            <i v-if="playing" class="fa-solid fa-pause" @click="$emit('playPauseSoundCloud', soundcloud); playing = false;"
                style="color: white;">
            </i>
            <a :href="soundcloud"><strong style="color: white;">{{ title }}</strong></a>
            <br />
            <br />
            <div style="display: flex; justify-content: space-evenly; color: rgb(185, 184, 184);">
                <div>
                    <strong>BASIC</strong>
                    <div>$15.00</div>
                </div>
                <div>
                    <strong>PREMIUM</strong>
                    <div>$20.00</div>
                </div>
                <div>
                    <strong>UNLIMITED</strong>
                    <div>$30.00</div>
                </div>
                <div>
                    <strong>EXCLUSIVE</strong>
                    <div>DM FOR INFO</div>
                </div>
            </div>
        </div>
        <br />
        <div style="width: 100%; height: fit-content; display: flex; justify-content: center; align-items: center;">
            <a class="socialMediaButtonLong" :href=airbit target="_blank" style="justify-content: space-evenly;"
                v-if="airbit">
                <img alt="Lilac Rust on AirBit" src="/airbit-image.webp" height="100%" />
                <div>BUY ON AIRBIT</div>
                <img alt="Lilac Rust on AirBit" src="/airbit-image.webp" height="100%" />
            </a>
            <strong style="color: white; margin: 2%;" v-if="airbit">OR</strong>
            <a class="socialMediaButtonLong" style="justify-content: space-evenly;"
                href="https://www.instagram.com/lilac_rust_music/" target="_blank">
                <i class="fa-brands fa-instagram socialMediaIcon"></i>
                <div>DM ME TO BUY</div>
                <i class="fa-brands fa-instagram socialMediaIcon"></i>
            </a>
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
    }
}
</script>

<style scoped>
.socialMediaIcon {
    font-size: 200%;
}

.socialMediaButtonLong {
    width: 30%;
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