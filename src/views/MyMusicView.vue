<template>
    <div class="pageTopMargin">
        <img alt="Lilac Rust Profile Image" src="/lilacProfile.jpg" class="profileImage">
        <div class="buttonsContainer">
            <a class="socialMediaButtonLong"
                href="https://open.spotify.com/artist/1YT4RD3frRo0r9jVY9mBB5?si=jTH5pF9NRJKeDGDx5sNNuw" target="_blank">
                <i class="fa-brands fa-spotify socialMediaIcon"></i>
                <p class="siteTitle">SPOTIFY</p>
                <i class="fa-brands fa-spotify socialMediaIcon"></i>
            </a>
            <a class="socialMediaButtonLong" href="https://music.apple.com/us/artist/lilac-rust/1529571645"
                target="_blank">
                <i class="fa-brands fa-apple socialMediaIcon"></i>
                <p class="siteTitle">APPLE MUSIC</p>
                <i class="fa-brands fa-apple socialMediaIcon"></i>
            </a>
            <a class="socialMediaButtonLong" href="https://music.amazon.com/artists/B08GZ3MNGS/lilac-rust"
                target="_blank">
                <i class="fa-brands fa-amazon socialMediaIcon"></i>
                <p class="siteTitle">AMAZON MUSIC</p>
                <i class="fa-brands fa-amazon socialMediaIcon"></i>
            </a>
            <a class="socialMediaButtonLong" href="https://www.youtube.com/channel/UCRtWYgXZ6n9Q5Jl__LrL5JQ"
                target="_blank">
                <i class="fa-brands fa-youtube socialMediaIcon"></i>
                <p class="siteTitle">YOUTUBE</p>
                <i class="fa-brands fa-youtube socialMediaIcon"></i>
            </a>
            <a class="socialMediaButtonLong" href="https://music.youtube.com/channel/UCgrNLezSQ-KGyuaRUI7_UmA"
                target="_blank">
                <i class="fa-solid fa-record-vinyl socialMediaIcon"></i>
                <p class="siteTitle">YOUTUBE MUSIC</p>
                <i class="fa-solid fa-record-vinyl socialMediaIcon"></i>
            </a>
            <a class="socialMediaButtonLong" href="https://soundcloud.com/lilac-rust" target="_blank">
                <i class="fa-brands fa-soundcloud socialMediaIcon"></i>
                <p class="siteTitle">SOUNDCLOUD</p>
                <i class="fa-brands fa-soundcloud socialMediaIcon"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
.buttonsContainer {
    width: 50%;
    margin-bottom: 5%;
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
}

.socialMediaIcon {
    font-size: 200%;
}

@media only screen and (max-width: 820px) {
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
