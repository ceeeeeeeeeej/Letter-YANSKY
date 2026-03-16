document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const bgMusic = document.getElementById("bg-music");

    // Attempt to set a comfortable volume for the romantic background music
    bgMusic.volume = 0.6;

    envelope.addEventListener("click", () => {
        // Toggle the open class which triggers CSS transitions
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");

            // Handle music play
            bgMusic.play().catch(error => {
                console.log("Audio autoplay was prevented. Make sure user interacts with document first.", error);
            });

            // Expand letter to fullscreen after opening
            setTimeout(() => {
                envelope.classList.add("read");
            }, 1000);
        } else {
            envelope.classList.remove("read");
            setTimeout(() => {
                envelope.classList.remove("open");
            }, 800);
        }
    });
});
