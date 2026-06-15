
function Init(gameKey) {
    gameKey = gameKey;

    window["SDK_OPTIONS"] = {
        "gameId": gameKey, // Your gameId which is unique for each one of your games; can be found at your GameMonetize.com account.
        "onEvent": function (event) {
            switch (event.name) {
                case "SDK_GAME_START":
                    SendMessage('GameMonetize', 'ResumeGame');
                    break;
                case "SDK_GAME_PAUSE":
                    SendMessage('GameMonetize', 'PauseGame');
                    break;
                case "SDK_ERROR":
                    break;
            }
        },
    };
}

function CreateBan(id, block_id) {

}

function showFullscrenAd() {
}

function initPlayer() {

}

function getLidBoard() {

}

function setLidBoard(num) {

}

function login() {

}


function testLogin() {

}

function lbInit() {

}

function showRewardedAd(id) {

}

function Start() {
    let json = {
        "i18n": {
            "lang": "en"
        }
    }

    unityI.SendMessage("MySDK", "GettingLang", JSON.stringify(json));
}

function getDevice() {

}

function openBanner() {

}

function closeBanner() {

}
function getUserData() {

}

function setUserData(_data) {

}

function CheckL() {
    unityI.SendMessage('MySDK', 'LidTested', 0)
}

function CheckR() {
    unityI.SendMessage('MySDK', 'RewTested', 0)
}

function CheckSh(){
    unityI.SendMessage('MySDK', 'ShTested', 0)
}

function shareGame(gameKeyVk){
}

function shareScore(gameKeyVk, score){
}

function openGroup(){
    
}


window.onbeforeunload = function (e) {
    console.log("Calling OnClose from Browser!");
    gameInstance.SendMessage("YandexSDK", "OnClose");

    let dialogText = "You game has been saved!  Would you like to continue unloading the page?";
    e.returnValue = dialogText;
    return dialogText;
};
