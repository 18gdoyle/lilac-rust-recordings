<template>
  <div style="width: 100%;">
    <div class="glassDiv" style="color: white; margin-top: 10vh;">
      <div class="carousel-container">
        <div class="instrumentalCarousel">
          <img class="slide" v-for="(image, index) in instrumentalImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="instrumentalImages[0]">
        </div>
      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">INSTRUMENTALS & BEATS</h1>
        <br />
        <div style="font-size: large;">
          I've got everything from laid-back jazz vibes to energetic electronic beats, cinematic atmospheres, and funky
          grooves. Whether
          you're a singer, rapper, filmmaker, or content creator, chances are I've got
          something that will be perfect for your next project.
        </div>
        <br />
        <hr />
        <br />
        <div class="linkContainer">
          <a href="/instrumentals" class="hover-underline-animation mobileButtonLink" data-v-c3ceb15a=""
            style="font-size: large; width: fit-content;">
            Browse Instrumentals
            <i class="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
      <div class="allImagesContainer">
        <div class="imageRow">
          <img data-v-414485a4="" src="/instrumentals/whiteWizard/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
          <img data-v-414485a4="" src="/instrumentals/waterviewVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
        </div>
        <div class="imageRow">
          <img data-v-414485a4="" src="/instrumentals/popularKidsVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
          <img data-v-414485a4="" src="/instrumentals/highExposureVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
        </div>
      </div>
    </div>
    <div class="glassDiv" style="color: white;">
      <div class="allImagesContainer">
        <div style="display: flex; justify-content: center;">
          <img data-v-414485a4="" src="/mixingBoard.jpg" width="100%" style="border-radius: 15px; margin: 2%;">
        </div>
      </div>
      <div class="carousel-container">
        <div class="studioServicesCarousel">
          <img class="slide" v-for="(image, index) in studioServicesImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="studioServicesImages[0]">
        </div>
      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">STUDIO SERVICES</h1>
        <br />
        <div style="font-size: large;">
          Whether you thrive in the dynamic energy of in-person collaboration at the studio or prefer the flexibility of
          remote
          working, rest assured that I can provide the expertise and support needed to elevate your musical endeavors.
          With more than ten years immersed in the art of music making, I can turn your musical ideas into reality as I
          have experience
          with every step in the songwriting, recording, mixing, and mastering process.
        </div>
        <br />
        <hr />
        <br />
        <div class="linkContainer">
          <a href="/studioservices" class="hover-underline-animation mobileButtonLink" style="font-size: large; width: fit-content;">
            Studio Services Info Page
            <i class="fa-solid fa-caret-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="glassDiv">
      <div class="carousel-container">
        <div class="pastProjectsCarousel">
          <img class="slide" v-for="(image, index) in pastProjectsImages" :key="index" :src="image"
            :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="pastProjectsImages[0]">
        </div>
      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">PAST PROJECTS</h1>
        <br />
        <div style="font-size: large;">
          If you want to hear my work in action, give some of my past projects a listen
        </div>
        <br />
        <hr />
        <br />
        <div class="linkContainer">
          <a href="/pastprojects" class="hover-underline-animation mobileButtonLink" style="font-size: large; width: fit-content;">
            Past Projects
            <i class="fa-solid fa-caret-right"></i>
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
      instrumentalImages: [
        '/instrumentals/whiteWizard/albumArt.jpg',
        '/instrumentals/waterviewVolumeOne/albumArt.jpg',
        '/instrumentals/popularKidsVolumeOne/albumArt.jpg',
        '/instrumentals/highExposureVolumeOne/albumArt.jpg'
      ],
      studioServicesImages: [
        '/mixingBoard.jpg',
        '/myStudio.jpg',
        '/micPic.jpg',
      ],
      pastProjectsImages: [
        '/songs/gardenOfEden/albumArt.jpg',
        '/songs/slappin/albumArt.jpg',
        '/songs/onMyKnees/albumArt.jpg',
      ]
    }
  }
}
</script>

<style scoped>
.allImagesContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imageRow {
  display: flex;
  justify-content: center;
}

.glassDiv {
  margin: 2%;
  color: white;
}

.carousel-container {
  display: none;
}

.linkContainer {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

@media only screen and (max-width: 768px) {
  .mobileButtonLink {
    height: 5vh;
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    margin-right: 1%;
    margin-bottom: 2%;
  }
  .glassDiv {
    width: 100%;
    margin: 0%;
    padding: 0%;
    margin-top: 0%;
    border-radius: 0;
    background: rgba(0, 0, 0, 0);
  }

  .glassDiv .description {
    width: 100%;
    text-align: center;
    padding: 5%;
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
    /* Adjust animation duration as needed */
  }

  .studioServicesCarousel {
    display: flex;
    animation: slideAnimationFourImages 25s linear infinite;
  }

  .pastProjectsCarousel {
    display: flex;
    animation: slideAnimationFourImages 25s linear infinite;
  }

  .slide {
    width: 100%;
    flex-shrink: 0;
    padding: 5%;
    border-radius: 50px;
  }

  @keyframes slideAnimationFourImages {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-300%);
      /* Adjust the value (-300%) based on the number of images */
    }
  }

  @keyframes slideAnimationFiveImages {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-400%);
      /* Adjust the value (-300%) based on the number of images */
    }
  }

  .linkContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>
