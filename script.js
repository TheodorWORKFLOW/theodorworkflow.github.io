async function fetchDiscordStatus() {
    const userID = '253967475018825738'; // Replace with your Discord User ID
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userID}`);
        const data = await response.json();
        displayDiscordStatus(data);
    } catch (error) {
        document.getElementById('discord-status').innerHTML = '<p>Failed to load Discord status.</p>';
        console.error('Error fetching Discord status:', error);
    }
}
