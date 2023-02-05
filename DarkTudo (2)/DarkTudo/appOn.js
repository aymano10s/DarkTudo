document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
//document.querySelector("body").style.backgroundColor = "Red";

const media = document.querySelectorAll("picture, video,#header-wrapper,.umd-header,#wrapper,#content,img");
media.forEach((mediaItem) => {
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
});

const mem = document.querySelectorAll("#header img,.umd-header img");
mem.forEach((mediaItem) => {
    mediaItem.style.filter = "hue-rotate(360deg)"
});



console.log("appOn.js Ran")

