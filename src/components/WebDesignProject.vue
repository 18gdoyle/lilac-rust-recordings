<template>
    <div class="websiteContainer">
        <div class="imgContainer">
            <img :alt="imageAlt" :src="desktopImage" @click="openNewTab(url)"
                class="websiteImage" />
            <img :alt="imageAlt" :src="mobileImage"
                @click="openNewTab(url)" class="websiteImageMobile" />
        </div>
        <div class="glassDiv">
            <a :href=url target="_blank"
                class="hover-underline-animation largeLink"><strong>{{ displayedURL }}</strong></a>
            <p class="websiteDescription">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        url: String,
        displayedURL: String,
        description: String,
        desktopImage: String,
        mobileImage: String,
        imageAlt: String,
    },
    methods: {
        openNewTab(url) {
            window.open(url, '_blank').focus();
        }
    }
}
</script>

<style scoped>
.websiteContainer {
    padding: 2%;
    width: 90%;
    height: 100%;
    flex-direction: column;
}

.glassDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    margin: 0;
    flex-direction: column;
    background: rgba(0, 0, 0, 0);
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
}

.imgContainer {
    width: 100%;
    display: flex;
    justify-content: center;
}

.websiteImageMobile {
    display: none;
    border-radius: 16px;
    width: 100%;
    cursor: pointer;
}

.websiteImage {
    border-radius: 16px;
    width: 100%;
    cursor: pointer;
}

.largeLink {
    font-size: 2.5vw;
    margin-bottom: 1%;
}

.websiteDescription {
    text-align: center;
    font-size: large;
}

@media only screen and (max-width: 768px) {
    .websiteImage {
        display: none;
    }

    .websiteImageMobile {
        display: block;
    }

    .largeLink {
        font-size: 7vw;
        margin-bottom: 3%;
    }

    .websiteDescription {
        font-size: 4vw;
    }

    .websiteContainer {
        padding-bottom: 5%;
    }
}
</style>