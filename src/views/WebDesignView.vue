<script setup>
import WebDesignProject from '@/components/WebDesignProject.vue';
</script>
<template>
    <div style="position: relative;">
        <div class="centered">
            <br />
            <h1 class="pageTitle">WEB DESIGN</h1>
            <p class="pageDescription">
                If you've been making and releasing music for as long as I have, then you understand the importance of
                having your own website. A centralized location where listeners can find new music, learn about
                upcoming gigs, and buy merch. If you're ready to take the next step with your music career, creating a
                professional website is a great place to start. If this sounds like something you're ready to do, hit me
                up.
            </p>
            <br />
            <a href="/about" class="mobileButtonLink">
                <strong>CONTACT INFO</strong>
            </a>
            <hr class="lineBreak" />
            <h1 class="pageSubtitle">PAST PROJECTS</h1>
            <br />
            <div class="darkSection">
                <WebDesignProject :url="'https://meganmarymusic.com/'" :displayedURL="'meganmarymusic.com'"
                    :description="`A website I made for artist Megan Mary. It's a one stop shop where fans can get quick access to her music, buy merch, and play a flying monkey game. How quirky and cute!`"
                    :desktopImage="'/meganMaryWebsite.png'" :mobileImage="'/meganMaryMobile.png'"
                    :imageAlt="`Megan Mary's Website`"></WebDesignProject>
            </div>
            <WebDesignProject :url="'https://lilacrust.com/'" :displayedURL="'lilacrust.com'"
                :description="'The website linked within the same website. Website-ception. Very cool. A great example of what I can do for a musical brand.'"
                :desktopImage="'/lilacRustWebsite.png'" :mobileImage="'/lilacRustWebsiteMobile.png'"
                :imageAlt="`Lilac Rust's Website`"></WebDesignProject>
            <div class="darkSection">
                <WebDesignProject :url="'https://gregoryvincentdoyle.com/'" :displayedURL="'gregoryvincentdoyle.com'"
                    :description="'A website I made for my corporate work life alter ego'"
                    :desktopImage="'/gregDoyleWebsite.png'" :mobileImage="'/gregDoyleWebsiteMobile.png'"
                    :imageAlt="`Greg Doyle's Website`"></WebDesignProject>
            </div>
            <WebDesignProject :url="'https://catherines-pet-care.uk.r.appspot.com/'"
                :displayedURL="'catherines-pet-care.uk.r.appspot.com'"
                :description="'A website I made for a pet care business'" :desktopImage="'/cPC.png'"
                :mobileImage="'/cPCMobile.png'" :imageAlt="`Catherine's Pet Care Website`"></WebDesignProject>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openNewTab(url) {
            window.open(url, '_blank').focus();
        }
    }
}
</script>

<style scoped>
.mobileButtonLink {
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    font-size: large;
    transition: all .3s;
}

.darkSection {
    background-color: rgba(0,0,0,.5);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mobileButtonLink:hover {
    transform: scale(110%);
}

.pageTitle {
    font-size: 4vw;
}

.lineBreak {
    margin: 3%;
    width: 90%;
}

.pageSubtitle {
    font-size: 2.5vw;
}

.pageDescription {
    text-align: center;
    font-size: x-large;
    width: 80%;
    margin-top: 1%;
    margin-bottom: 1%;
}

.glassDivsRow {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: fit-content;
}

.centered {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .pageTitle {
        font-size: 10vw;
    }

    .pageDescription {
        font-size: medium;
    }

    .mobileButtonLink {
        padding: 5%;
    }

    .lineBreak {
        margin: 10%;
    }

    .pageSubtitle {
        font-size: 10vw;
        margin-bottom: 5%;
    }
}
</style>