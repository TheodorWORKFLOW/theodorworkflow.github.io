function toggleSocialMedia() {
    var socialMediaSection = document.getElementById("socialMediaSection");
    if (socialMediaSection.style.display === "none") {
        socialMediaSection.style.display = "block";
    } else {
        socialMediaSection.style.display = "none";
    }
}

function toggleFriends() {
    var friendsSection = document.getElementById("friendsSection");
    if (friendsSection.style.display === "none") {
        friendsSection.style.display = "block";
    } else {
        friendsSection.style.display = "none";
    }
}

function closeWindow(windowId) {
    var window = document.getElementById(windowId);
    window.style.display = "none";
}
