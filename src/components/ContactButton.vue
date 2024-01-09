<template>
    <div id="contactButtonContainer">
        <a id="contactButton">Ready to make something cool? Click here to chat</a>
    </div>
</template>

<style>
#contactButtonContainer {
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 500;
}

#contactButton {
    height: 50vw;
    width: 50vw;
    display: flex;
    justify-content: center;
    border-radius: 100%;
    border: 0px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(25px);
    text-align: center;
    align-items: center;
    color: white;
    padding: 5%;
    box-shadow: none;
}

button {
  border-style: outset;
}
</style>