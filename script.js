function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function playVideo() {
  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.style.display = "block"; // Show the video
  videoPlayer.play(); // Play the video
}
