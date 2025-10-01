<script setup>
import SocialLinks from '@/components/SocialLinks.vue';
</script>
<template>
  <div style="width: 100%">
    <div class="centered bigWelcomeContainer">
      <div class="overImage">
        <div class="glassDiv bigWelcomeGlass">
          <div class="buttonRowsContainer">
            <div style="display: flex;" class="buttonsRow">
              <div class="bigButton">
                <a href="/instrumentals" style="width: 100%;">
                  <button style="width: 100%;">
                    <i class="fa-solid fa-headphones bigButtonIcon"></i>
                  </button>
                </a>
                <div class="buttonTitle">Beats</div>
              </div>
              <div class="bigButton">
                <a href="/studioservices" style="width: 100%;">
                  <button style="width: 100%;">
                    <i class="fa-solid fa-sliders bigButtonIcon"></i>
                  </button>
                </a>
                <div class="buttonTitle">Services</div>
              </div>
              <div class="bigButton">
                <a href="/pastprojects" style="width: 100%;">
                  <button style="width: 100%;">
                    <i class="fa-solid fa-compact-disc bigButtonIcon"></i>
                  </button>
                </a>
                <div class="buttonTitle">Past Projects</div>
              </div>
            </div>
            <div style="display: flex;" class="buttonsRow">
              <div class="bigButton">
                <a href="/webdesign" style="width: 100%;">
                  <button style="width: 100%;">
                    <i class="fa-solid fa-code bigButtonIcon"></i>
                  </button>
                </a>
                <div class="buttonTitle">Web Design</div>
              </div>
              <div class="bigButton">
                <a href="/lilacrustmusic" style="width: 100%;">
                  <button style="width: 100%;">
                    <i class="fa-solid fa-music bigButtonIcon"></i>
                  </button>
                </a>
                <div class="buttonTitle">My Music</div>
              </div>
              <div class="bigButton">
                <a href="/about" style="width: 100%;">
                  <button style="width: 100%;">
                    <i class="fa-solid fa-address-card bigButtonIcon"></i>
                  </button>
                </a>
                <div class="buttonTitle">Contact Info</div>
              </div>
            </div>
          </div>
          <div class="iconsRow">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionDiv darkSection">
      <h1 class="sectionTitle">INSTRUMENTALS & BEATS</h1>
      <div class="carousel-container">
        <div class="instrumentalCarousel">
          <img class="slide" v-for="(image, index) in instrumentalImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
          <img class="slide" v-for="(image, index) in instrumentalImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
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
        <div class="mediumButton">
          <a href="/instrumentals" style="width: 100%;">
            <button style="width: 100%;">
              <i class="fa-solid fa-headphones mediumButtonIcon"></i>
            </button>
          </a>
          <div class="buttonTitle">Browse Beats</div>
        </div>
      </div>
    </div>
    <div class="sectionDiv">
      <h1 class="sectionTitle">SERVICES</h1>
      <div class="carousel-container">
        <div class="studioServicesCarousel">
          <img class="slide" v-for="(image, index) in studioServicesImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
          <img class="slide" v-for="(image, index) in studioServicesImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
          <img class="slide" v-for="(image, index) in studioServicesImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
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
        <div class="mediumButton">
          <a href="/studioservices" style="width: 100%;">
            <button style="width: 100%;">
              <i class="fa-solid fa-circle-info mediumButtonIcon"></i>
            </button>
          </a>
          <div class="buttonTitle">Learn More</div>
        </div>
      </div>
    </div>
    <div class="sectionDiv darkSection">
      <h1 class="sectionTitle">PAST PROJECTS</h1>
      <div class="carousel-container">
        <div class="pastProjectsCarousel">
          <img class="slide" v-for="(image, index) in pastProjectsImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
          <img class="slide" v-for="(image, index) in pastProjectsImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
          <img class="slide" v-for="(image, index) in pastProjectsImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)" />
          <img alt="Slide" class="slide" :src="pastProjectsImages[0]" />
        </div>
      </div>
      <div class="description">
        <div class="descriptionText">
          If you want to hear my work in action, give some of my past projects a
          listen.
        </div>
        <br />
        <div class="mediumButton">
          <a href="/pastprojects" style="width: 100%;">
            <button style="width: 100%;">
              <i class="fa-solid fa-compact-disc mediumButtonIcon"></i>
            </button>
          </a>
          <div class="buttonTitle">Browse Past Projects</div>
        </div>
      </div>
    </div>
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
        "/songs/darkNights/albumArt.jpg",
        "/songs/songsForTheSoundsAClockMakes/albumArt.jpg",
        "/songs/inLightOfChanges/albumArt.png",
        "/songs/bigBuckBackshots/albumArt.png",
        "/songs/slappin/albumArt.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.buttonRowsContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;
  margin-bottom: 15px;
}

.buttonTitle {
  font-size: x-large;
}

.mediumButtonIcon {
  font-size: 50px;
}

.mediumButton {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  height: 50%;
}

.bigButtonIcon {
  font-size: 80px;
}

.bigButton {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  height: 50%;
}

.buttonsRow {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.descriptionText {
  font-size: x-large;
  text-align: center;
}

.sectionBreak {
  height: 20px;
}

.sectionDiv {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;
  padding-bottom: 2%;
}

.darkSection {
  background-color: rgba(0, 0, 0, .3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.sectionTitle {
  font-size: xxx-large;
}

.welcomeDescription {
  font-size: x-large;
}

.bigWelcomeGlass {
  width: 100%;
  justify-content: center;
  height: 100%;
  margin: 0 !important;
  border-radius: 0;
  flex-direction: column;
  gap: 10px;
}

.bigWelcomeContainer {
  position: relative;
}

.overImage {
  width: 100%;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 500px;
}

.iconsRow {
  display: flex;
  width: 100%;
  justify-content: center;
}

.hugeWelcome {
  font-size: 5vw;
}

.backgroundImage {
  position: relative;
  top: 75px;
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
  z-index: 5;
}

.imageRow {
  display: flex;
  justify-content: center;
  width: 100%;
}

.glassDiv {
  margin: 2%;
  color: white;
  padding: 20px;
  background: rgba(0, 0, 0, 0);
  box-shadow: none;
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
  transition: all 0.3s;
}

.mobileButtonLink:hover {
  transform: scale(110%);
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
  transition: all .3s;
}

.slide:hover {
  transform: scale(110%);
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
  .buttonTitle {
    font-size: large;
  }

  .bigButtonIcon {
    font-size: 60px;
  }

  .buttonRowsContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 15px;
    margin-bottom: 15px;
  }

  .buttonsRow {
    width: 100%;
  }

  .overImage {
    max-height: 500px;
  }

  .sectionTitle {
    font-size: x-large;
    margin-bottom: 1%;
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
    justify-content: space-evenly;
    margin-bottom: 10px;
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
    margin-top: 0%;
    border-radius: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
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

  .sectionDiv {
    padding-top: 8%;
    padding-bottom: 8%;
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
