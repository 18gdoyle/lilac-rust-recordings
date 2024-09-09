<template>
  <div style="width: 100%" class="pageTopMargin">
    <div class="centered bigWelcomeContainer">
      <img
        alt="Lilac Rust Brand Image"
        class="backgroundImage"
        src="/movingPurple.webp"
      />
      <div class="overImage">
        <div class="glassDiv bigWelcomeGlass">
          <h1 class="hugeWelcome">WELCOME</h1>
          <p class="welcomeDescription">
            My name is Lilac. I'm a multi-instrumentalist music producer and
            audio engineer. I've been making music for almost 10 years now and
            I've produced everything from acoustic ballads to trap bangers,
            cinematic atmospheres to indie funk. I can produce instrumentals for
            a myriad of genres, as well as record, mix, master, really whatever
            you need! So take a look around and if you like what you see/hear,
            hit me up!
          </p>
          <div class="iconsRow" style="display: flex">
            <a
              class="socialMediaButton"
              href="https://www.tiktok.com/@lilac_rust"
              target="_blank"
              ><i class="fa-brands fa-tiktok socialMediaIcon"></i
            ></a>
            <a
              class="socialMediaButton"
              href="https://www.youtube.com/@lilacrust8805"
              target="_blank"
              ><i class="fa-brands fa-youtube socialMediaIcon"></i
            ></a>
            <a
              class="socialMediaButton"
              href="mailto:lilac.rust@gmail.com"
              target="_blank"
              ><i class="fa-regular fa-envelope socialMediaIcon"></i
            ></a>
            <a
              class="socialMediaButton"
              href="https://www.instagram.com/lilac_rust_music/"
              target="_blank"
              ><i class="fa-brands fa-instagram socialMediaIcon"></i
            ></a>
            <a
              class="socialMediaButton"
              href="https://open.spotify.com/artist/1YT4RD3frRo0r9jVY9mBB5?si=jTH5pF9NRJKeDGDx5sNNuw"
              target="_blank"
              ><i class="fa-brands fa-spotify socialMediaIcon"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionDiv">
      <h1 class="sectionTitle">INSTRUMENTALS & BEATS</h1>
      <div class="carousel-container">
        <div class="instrumentalCarousel">
          <img
            class="slide"
            v-for="(image, index) in instrumentalImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img
            class="slide"
            v-for="(image, index) in instrumentalImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img alt="Slide" class="slide" :src="instrumentalImages[0]" />
        </div>
      </div>
      <div class="description">
        <div class="descriptionText">
          I've got everything from laid-back jazz vibes to energetic electronic
          beats, cinematic atmospheres to indie funk grooves. Whether you're a
          singer, rapper, filmmaker, or content creator, chances are I've got
          something that will be perfect for your next project.
        </div>
        <br />
        <div class="linkContainer">
          <a href="/instrumentals" class="mobileButtonLink">
            Click Here to Browse Instrumentals
          </a>
        </div>
      </div>
    </div>
    <div class="sectionBreak"></div>
    <div class="sectionDiv">
      <h1 class="sectionTitle">STUDIO SERVICES</h1>
      <div class="carousel-container">
        <div class="studioServicesCarousel">
          <img
            class="slide"
            v-for="(image, index) in studioServicesImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img
            class="slide"
            v-for="(image, index) in studioServicesImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img
            class="slide"
            v-for="(image, index) in studioServicesImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img alt="Slide" class="slide" :src="studioServicesImages[0]" />
        </div>
      </div>
      <div class="description">
        <div class="descriptionText">
          Whether you thrive in the dynamic energy of in-person collaboration at
          the studio or prefer the flexibility of remote working, rest assured
          that I can provide the expertise and support needed to elevate your
          musical endeavors. With more than ten years immersed in the art of
          music making, I can turn your musical ideas into reality as I have
          experience with every step in the songwriting, recording, mixing, and
          mastering process.
        </div>
        <br />
        <div class="linkContainer">
          <a href="/studioservices" class="mobileButtonLink">
            Click Here for More Info
          </a>
        </div>
      </div>
    </div>
    <div class="sectionBreak"></div>
    <div class="sectionDiv">
      <h1 class="sectionTitle">PAST PROJECTS</h1>
      <div class="carousel-container">
        <div class="pastProjectsCarousel">
          <img
            class="slide"
            v-for="(image, index) in pastProjectsImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img
            class="slide"
            v-for="(image, index) in pastProjectsImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img
            class="slide"
            v-for="(image, index) in pastProjectsImages"
            :key="index"
            :src="image"
            :alt="'Slide ' + (index + 1)"
          />
          <img alt="Slide" class="slide" :src="pastProjectsImages[0]" />
        </div>
      </div>
      <div class="description">
        <div class="descriptionText">
          If you want to hear my work in action, give some of my past projects a
          listen.
        </div>
        <br />
        <div class="linkContainer">
          <a href="/pastprojects" class="mobileButtonLink">
            Click Here to Hear My Past Projects
          </a>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      instrumentalImages: [
        "/instrumentals/popularKidsVolumeOne/albumArt.jpg",
        "/instrumentals/hardRockVolumeOne/albumArt.jpeg",
        "/instrumentals/waterviewVolumeOne/albumArt.jpg",
        "/instrumentals/singerSongwriterVolumeOne/albumArt.jpeg",
        "/instrumentals/highExposureVolumeOne/albumArt.jpg",
      ],
      studioServicesImages: [
        "/mixingBoard.jpg",
        "/myStudio.jpg",
        "/micPic.jpg",
      ],
      pastProjectsImages: [
        "/songs/luckyHer/albumArt.jpeg",
        "/songs/mountains/albumArt.jpg",
        "/songs/inLightOfChanges/albumArt.png",
        "/songs/gardenOfEden/albumArt.jpg",
        "/songs/slappin/albumArt.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.descriptionText {
  font-size: x-large;
  text-align: center;
}
.sectionBreak {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sectionDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sectionTitle {
  font-size: xxx-large;
  margin-bottom: 1%;
}
.welcomeDescription {
  font-size: x-large;
}

.bigWelcomeGlass {
  width: 100%;
  justify-content: center;
  height: 100%;
  margin: 0 !important;
  padding-top: max(8vh, 50px) !important;
  border-radius: 0;
  backdrop-filter: blur(10px) !important;
  flex-direction: column;
  justify-content: space-evenly;
}

.bigWelcomeContainer {
  position: relative;
}

.overImage {
  position: absolute;
  top: min(-8vh, -50px);
  left: 0;
  width: 100%;
  height: 80vh;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iconsRow {
  width: 100%;
  gap: 2vw;
  justify-content: center;
}

.hugeWelcome {
  font-size: 5vw;
}

.backgroundImage {
  position: relative;
  top: min(-8vh, -50px);
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 80vh;
}

.centered {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.allImagesContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imageRow {
  display: flex;
  justify-content: center;
  width: 100%;
}

.glassDiv {
  margin: 2%;
  color: white;
  padding: 2%;
  background: rgba(0, 0, 0, 0.6);
}

.linkContainer {
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 40%;
}

.mobileButtonLink {
  font-size: x-large;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  border-radius: 100vh;
  background-color: #ffffff26;
  backdrop-filter: blur(5px);
  text-align: center;
  color: #fff;
  transition: 0.3s;
}
.mobileButtonLink:hover {
  box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

.socialMediaIcon {
  font-size: 300%;
  margin: auto;
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
  transition: 0.3s;
}
.socialMediaButton:hover {
  box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: block;
}

.instrumentalCarousel {
  display: flex;
  animation: slideAnimationFiveImages 20s linear infinite;
  height: 50vh;
  /* Adjust animation duration as needed */
}

.studioServicesCarousel {
  display: flex;
  flex-direction: row-reverse;
  animation: slideAnimationThreeImagesReverse 20s linear infinite;
  height: 50vh;
}

.pastProjectsCarousel {
  display: flex;
  animation: slideAnimationFiveImages 20s linear infinite;
}

.slide {
  width: 50vh;
  flex-shrink: 0;
  padding: 2%;
  border-radius: 50px;
}

@keyframes slideAnimationThreeImagesReverse {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(150vh);
    /* translateX = widthOfImage * numberOfImagesInArray */
  }
}

@keyframes slideAnimationThreeImages {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-150vh);
    /* translateX = widthOfImage * numberOfImagesInArray */
  }
}

@keyframes slideAnimationFiveImages {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-250vh);
    /* translateX = widthOfImage * numberOfImagesInArray */
  }
}

@media only screen and (max-width: 768px) {
  .sectionTitle {
    font-size: x-large;
  }
  .descriptionText {
    font-size: large;
  }
  .socialMediaIcon {
    font-size: 200%;
    margin: auto;
  }
  .socialMediaButton {
    max-height: 50px;
    max-width: 50px;
  }
  .welcomeDescription {
    font-size: large;
  }
  .bigWelcomeGlass {
    padding: 5% !important;
    padding-top: max(8vh, 50px) !important;
    background: rgba(0, 0, 0, 0.6) !important;
    justify-content: space-evenly;
  }
  .hugeWelcome {
    font-size: 300%;
  }
  .mobileButtonLink {
    padding: 4%;
    gap: 2vw;
    font-size: large;
  }

  .glassDiv {
    width: 100%;
    margin: 0%;
    padding: 0%;
    margin-top: 0%;
    border-radius: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
  }

  .glassDiv {
    width: 100%;
    text-align: center;
    padding: 5%;
  }

  .description {
    width: 90%;
  }

  .allImagesContainer {
    display: none;
  }

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: block;
  }

  .instrumentalCarousel {
    display: flex;
    animation: slideAnimationFiveImages 25s linear infinite;
    height: 100vw;
  }

  .studioServicesCarousel {
    display: flex;
    flex-direction: row-reverse;
    animation: slideAnimationThreeImagesReverse 25s linear infinite;
    height: 100vw;
  }

  .pastProjectsCarousel {
    display: flex;
    animation: slideAnimationFiveImages 25s linear infinite;
    height: 100vw;
  }

  .slide {
    width: 100vw;
    flex-shrink: 0;
    padding: 5%;
    border-radius: 6vh;
  }

  .linkContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
  }

  .sectionBreak {
    height: 8vh;
  }

  @keyframes slideAnimationThreeImages {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-300vw);
      /* translateX = widthOfImage * numberOfImagesInArray */
    }
  }

  @keyframes slideAnimationThreeImagesReverse {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(300vw);
      /* translateX = widthOfImage * numberOfImagesInArray */
    }
  }

  @keyframes slideAnimationFiveImages {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-500vw);
      /* translateX = widthOfImage * numberOfImagesInArray */
    }
  }
}
</style>
