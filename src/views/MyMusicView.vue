<template>
    <div
        style="position: relative; justify-content: center; display: flex; flex-direction: column; align-items: center;">
        <img alt="Lilac Rust Profile Image" src="/lilacProfileWithFace.jpg" class="profileImage">
        <div class="buttonsContainer">
            <div class="buttonsRow">
                <div class="mediumButton">
                    <a href="https://open.spotify.com/artist/1YT4RD3frRo0r9jVY9mBB5?si=jTH5pF9NRJKeDGDx5sNNuw"
                        target="_blank" style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-brands fa-spotify mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">Spotify</div>
                </div>
                <div class="mediumButton">
                    <a href="https://music.apple.com/us/artist/lilac-rust/1529571645" target="_blank"
                        style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-brands fa-apple mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">Apple Music</div>
                </div>
                <div class="mediumButton">
                    <a href="https://music.amazon.com/artists/B08GZ3MNGS/lilac-rust" target="_blank"
                        style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-brands fa-amazon mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">Amazon Music</div>
                </div>
                <div class="mediumButton">
                    <a href="https://www.youtube.com/channel/UCRtWYgXZ6n9Q5Jl__LrL5JQ" target="_blank"
                        style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-brands fa-youtube mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">YouTube</div>
                </div>
            </div>
            <div class="buttonsRow">
                <div class="mediumButton">
                    <a href="https://music.youtube.com/channel/UCgrNLezSQ-KGyuaRUI7_UmA" target="_blank"
                        style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-solid fa-record-vinyl mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">YouTube Music</div>
                </div>
                <div class="mediumButton">
                    <a href="https://soundcloud.com/lilac-rust" target="_blank" style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-brands fa-soundcloud mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">SoundCloud</div>
                </div>
                <div class="mediumButton">
                    <a href="https://lilacrust.bandcamp.com/" target="_blank" style="width: 100%;">
                        <button style="width: 100%;">
                            <i class="fa-brands fa-bandcamp mediumButtonIcon"></i>
                        </button>
                    </a>
                    <div class="buttonTitle">Bandcamp</div>
                </div>
            </div>
        </div>
        <br />
    </div>
</template>

<style scoped>
.buttonsRow {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
}

.mediumButton {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    height: 50%;
}

.mediumButtonIcon {
    font-size: 50px;
}

.buttonTitle {
    text-align: center;
    font-size: large;
}

.buttonsContainer {
    width: 80%;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.siteTitle {
    font-size: xx-large;
}

.profileImage {
    height: 25vh;
    flex-shrink: 0;
    margin: 1%;
    border-radius: 15%;
}

.pageTopMargin {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.socialMediaButtonLong {
    display: flex;
    justify-content: space-between;
    border-radius: 100vh;
    width: 100%;
    gap: 1%;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    align-items: center;
    color: #fff;
    padding: 2%;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 5%;
    overflow: hidden;
    transition: .3s
}

.socialMediaButtonLong:hover {
    box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

.socialMediaIcon {
    font-size: 200%;
}

@media only screen and (max-width: 820px) {
    .mediumButtonIcon {
        font-size: 40px;
    }

    .buttonsContainer {
        width: 90%;
    }

    .siteTitle {
        font-size: x-large;
    }

    .profileImage {
        margin: 5%;
    }
}
</style>
