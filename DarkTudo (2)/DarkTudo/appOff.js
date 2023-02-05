(function () {
    // document.body.style.filter = "invert(0) hue-rotate(0deg)"
    document.querySelector("body").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("picture, video,#header-wrapper,.umd-header,#wrapper,#content,img");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })
})();