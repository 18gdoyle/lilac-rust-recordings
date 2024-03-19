<template>
  <div class="about pageTopMargin">
    <div class="glassDiv">
      <div class="imgAndText">
        <img src="/lilacProfileWithFace.jpg" class="contactCard-img" />
        <p class="aboutDescription">
          Hey there!
          My name is Greg, but I go by Lilac Rust online.
          I'm a multi-instrumentalist music producer and audio engineer. I've been making music for almost 10 years now
          and I've produced everything from acoustic ballads to trap bangers, cinematic atmospheres to indie funk. I can
          produce instrumentals for a myriad of genres, as well as record, mix, master, really whatever you need!
          Chances are, if you are doing something
          related to music, I can probably help you out. Just hit me up using one of the links below
          and we'll chat.
          <br />
          <br />
          - Greg, a.k.a Lilac Rust
        </p>
      </div>
      <br />
      <div class="iconsRow">
        <a class="socialMediaButton" href="https://www.tiktok.com/@lilac_rust" target="_blank"><i
            class="fa-brands fa-tiktok socialMediaIcon"></i></a>
        <a class="socialMediaButton" href="mailto:lilac.rust@gmail.com" target="_blank"><i
            class="fa-regular fa-envelope socialMediaIcon"></i></a>
        <a class="socialMediaButton" href="https://www.instagram.com/lilac_rust_music/" target="_blank"><i
            class="fa-brands fa-instagram socialMediaIcon"></i></a>
      </div>
      <br />
      <div class="iconsRow">
        <a class="socialMediaButton" href="https://www.youtube.com/@lilacrust8805" target="_blank"><i
            class="fa-brands fa-youtube socialMediaIcon"></i></a>
        <a class="socialMediaButton"
          href="https://open.spotify.com/artist/1YT4RD3frRo0r9jVY9mBB5?si=jTH5pF9NRJKeDGDx5sNNuw" target="_blank"><i
            class="fa-brands fa-spotify socialMediaIcon"></i></a>
      </div>
      <br />
    </div>
    <br />
    <br />
  </div>
</template>

<style scoped>
.centered {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.pageTitle {
  font-size: 4vw;
}

.aboutDescription {
  padding: 2%;
  font-size: x-large;
}

.iconsRow {
  width: 100%;
  gap: 2vw;
  justify-content: center;
  display: flex;
}

.socialMediaIcon {
  font-size: 300%;
  margin: auto;
}

.imgAndText {
  display: flex;
  justify-content: center;
  align-items: center;
}

.socialMediaButton {
  height: 10vh;
  width: 10vh;
  display: flex;
  justify-content: center;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
  cursor: pointer;
}

.contactCard-img {
  border-radius: 50%;
  margin: auto;
  display: inline;
  width: 20%;
  box-shadow: 20px 20px 22px rgba(0, 0, 0, .2);
}

.glassDiv {
  margin: 2%;
  padding: 2%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 825px) {
  .glassDiv h1 {
    font-size: large;
  }
}
</style>
