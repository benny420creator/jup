document.getElementById('startSwapBtn').addEventListener('click', function() {
    if (window.Jupiter) {
        window.Jupiter.init({
            endpoint: "https://solana-mainnet.g.alchemy.com/v2/i9bOEa196Oj_Ljl6Y_uP9_YE9QGfSrGe",
            mode: "modal",
        }).then(function() {
            window.Jupiter.open();
        }).catch(function(error) {
            console.error("Jupiter Terminal initialization failed:", error);
        });
    } else {
        console.error("Jupiter Terminal script is not loaded.");
    }
});
