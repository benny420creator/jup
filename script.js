/* script.js */

document.getElementById('startSwapBtn').addEventListener('click', function() {
    if (window.Jupiter) {
        window.Jupiter.init({
            endpoint: "https://solana-mainnet.g.alchemy.com/v2/i9bOEa196Oj_Ljl6Y_uP9_YE9QGfSrGe",
            mode: "modal",
        }).then(function() {
            // Add class to body to prevent scrolling
            document.body.classList.add('modal-open');
            window.Jupiter.open();
            // Listen for modal close event to remove the class
            window.Jupiter.on('close', function() {
                document.body.classList.remove('modal-open');
            });
        }).catch(function(error) {
            console.error("Jupiter Terminal initialization failed:", error);
        });
    } else {
        console.error("Jupiter Terminal script is not loaded.");
    }
});
