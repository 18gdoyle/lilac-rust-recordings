<template>
    <div class="menu-items">
        <li><a href="/">Home</a></li>
        <li><a href="/instrumentals">Instrumentals</a></li>
        <li><a href="/studioservices">Studio Services</a></li>
        <li><a href="/pastprojects">Past Projects</a></li>
        <li><a href="/webdesign">Web Design</a></li>
        <li><a href="/about">About</a></li>
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
            <a href="/" class="hover-underline-animation" v-on:click.ctrl="$router.push('/instrumentalsparse');">Lilac Rust</a>
        </div>
        <div id="pages">
            <div class="pageOption">
                <a href="/instrumentals" class="hover-underline-animation">Instrumentals</a>
            </div>
            <div class="pageOption">
                <a href="/studioservices" class="hover-underline-animation">Studio Services</a>
            </div>
            <div class="pageOption">
                <a href="/pastprojects" class="hover-underline-animation">Past Projects</a>
            </div>
            <div class="pageOption">
                <a href="/webdesign" class="hover-underline-animation">Web Design</a>
            </div>
            <div class="pageOption">
                <a href="/about" class="hover-underline-animation">About</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showOrHideMobileNav() {
            let menuItems = document.getElementsByClassName('menu-items')[0];
            if (menuItems.style.transform === '') {
                menuItems.style.transform = 'translateX(0)';
            } else {
                menuItems.style.transform = '';
            }
        }
    }
}
</script>

<style scoped>
.nav-container {
    display: none;
}

.menu-items {
    display: none;
}

#navBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    z-index: 10;
    min-height: 50px;
}

#title {
    color: white;
    font-size: xx-large;
    padding-left: 1%;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
}

#pages {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 1%;
}

.pageOption {
    padding: 1%;
    color: white;
    font-size: large;
}

@media (max-width: 850px) {
    #pages {
        display: none;
    }

    #title {
        justify-content: right;
        padding-right: 5%;
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
        transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
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
        padding-top: max(8vh, 50px);
        background: rgba(0, 0, 0, 0.7);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15px);
        height: 100vh;
        width: 60vw;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        transition: transform 0.5s ease-in-out;
        z-index: 10;
    }

    .menu-items li {
        margin-bottom: 1.2rem;
        font-size: 1.5rem;
        font-weight: 500;
    }

}
</style>
