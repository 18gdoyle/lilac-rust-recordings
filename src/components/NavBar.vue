<template>
  <div class="menu-items">
    <li><a href="/"><i class="fa-solid fa-house icon"></i> Home</a></li>
    <li><a href="/instrumentals"><i class="fa-solid fa-headphones icon"></i> Instrumentals</a></li>
    <li><a href="/studioservices"><i class="fa-solid fa-sliders icon"></i> Services</a></li>
    <li><a href="/pastprojects"><i class="fa-solid fa-compact-disc icon"></i> Past Projects</a></li>
    <li><a href="/webdesign"><i class="fa-solid fa-code icon"></i> Web Design</a></li>
    <li><a href="/lilacrustmusic"><i class="fa-solid fa-music bigButtonIcon icon"></i> My Music</a></li>
    <li><a href="/about"><i class="fa-solid fa-address-card bigButtonIcon icon"></i> Contact Info</a></li>
  </div>
  <div id="navBar" class="navbar">
    <div class="nav-container">
      <input @click="showOrHideMobileNav" class="checkbox" type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
    <div id="title">
      <a href="/" class="pageTitle" v-on:click.ctrl="$router.push('/instrumentalsparse')">Lilac Rust</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showOrHideMobileNav() {
      let menuItems = document.getElementsByClassName("menu-items")[0];
      if (menuItems.style.transform === "") {
        menuItems.style.transform = "translateX(0)";
      } else {
        menuItems.style.transform = "";
      }
    },
  },
};
</script>

<style scoped>
.icon {
  width: 32px;
}
.pageTitle {
  transition: all .4s ease;
}

.pageTitle:hover {
  color: rgb(215, 151, 233);
}

#navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

#title {
  color: white;
  font-size: xx-large;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 20px;
  width: 100%;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.menu-items {
  display: flex;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: white;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: white;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.1s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.2s ease-in-out;
}

.nav-container input[type="checkbox"]:checked~.menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked~.logo {
  display: none;
}

.menu-items {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 75px;
  padding-top: 10px;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  height: 100vh;
  width: 30vw;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  transition: transform 0.2s ease-in-out;
  z-index: 10;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.menu-items li {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.menu-items li a {
  transition: all .4s ease;
}

.menu-items li a:hover {
  color: rgb(215, 151, 233);
}

@media (max-width: 850px) {
  #title {
    padding-right: 5%;
  }

  .menu-items {
    width: 60vw;
    margin-top: 60px;
  }

  #navBar {
    height: 60px;
  }
}
</style>
