<template>
  <div style="width: 100%;">
    <img src="/IMG_0583.jpg" style="position: relative; width: 100%; height: 90vh; object-fit: cover;" />
    <div class="glassDiv" style="color: white; margin-top: 10vh;">
      <div class="carousel-container">
        <div class="carousel">
          <img class="slide" v-for="(image, index) in images" :key="index" :src="image" :alt="'Slide ' + (index + 1)">
          <img class="slide" :src="images[0]">
        </div>

      </div>
      <div class="description">
        <h1 style="font-size: xx-large;">INSTRUMENTALS</h1>
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
          <a href="/instrumentals" class="hover-underline-animation" data-v-c3ceb15a=""
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
          <img data-v-414485a4="" src="/instrumentals/whiteWizard/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
          <img data-v-414485a4="" src="/instrumentals/waterviewVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
        </div>
        <div style="display: flex; justify-content: center;">
          <img data-v-414485a4="" src="/instrumentals/popularKidsVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
          <img data-v-414485a4="" src="/instrumentals/highExposureVolumeOne/albumArt.jpg" width="25%"
            style="border-radius: 15px; margin: 2%;">
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
          <a href="/studioservices" class="hover-underline-animation" style="font-size: large; width: fit-content;">
            More Info
            <i class="fa-solid fa-caret-right"></i>
          </a>
          <a href="/pastprojects" class="hover-underline-animation"
            style="font-size: large; width: fit-content;">
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
      images: [
        '/instrumentals/whiteWizard/albumArt.jpg',
        '/instrumentals/waterviewVolumeOne/albumArt.jpg',
        '/instrumentals/popularKidsVolumeOne/albumArt.jpg',
        '/instrumentals/highExposureVolumeOne/albumArt.jpg'
      ],
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
}

@media only screen and (max-width: 768px) {
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
    padding-bottom: 25%;
  }

  .allImagesContainer {
    display: none;
  }

  .carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .carousel {
    display: flex;
    animation: slideAnimation 25s linear infinite;
    /* Adjust animation duration as needed */
  }

  .slide {
    width: 100%;
    flex-shrink: 0;
    padding: 5%;
    border-radius: 50px;
  }

  @keyframes slideAnimation {
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
