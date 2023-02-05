const slider = document.querySelector(".slider");
// const circle = document.querySelector(".circle");
let sliderOn = false;
const allowSites = [
    "https://www.testudo.umd.edu/",
    "https://app.testudo.umd.edu/",
    "https://idcard.umd.edu/"
];
function validUrl(url) {
    console.log("url:", url);
    for (let site of allowSites) {
        if (url.startsWith(site)) {
            return true;
        }
        console.log(site);
    }
    return false;
}

slider.addEventListener("click", () => {
    // if (!sliderOn) {
    chrome.tabs.query({}, function (tabs) {
        chrome.permissions.contains({ permissions: ["tabs"] }, function (result) {
            if (result) {
                console.log("permission granted")
                tabs.forEach(function (tab) {
                    if (!validUrl(tab.url)) {
                        return;
                    }
                    else{
                        if(sliderOn){
                            chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["./appOn.js"] })
                        }
                        else{
                            //chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["./appOn.js"] })
                            chrome.tabs.reload();
    
    
                        }
                    }
                    
                });
            }
            else {
                console.log("permission denied")
            }
        })

        console.log("script ran!");
    });

    sliderOn = !sliderOn;
// }
//     else {
//         console.log("Turned Off")
//         sliderOn = false;
//         button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
//         circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
//         chrome.tabs.executeScript({
//             file: 'appOff.js'
//         })
//     }
 })