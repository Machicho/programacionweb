document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    updateLocation();

    setInterval(updateDateTime, 1000);
});

function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const formattedDateTime = now.toLocaleString();

    datetimeElement.innerText = formattedDateTime;
}

function updateLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude.toFixed(4);
            const longitude = position.coords.longitude.toFixed(4);
            const formattedLocation = `Location: ${latitude}, ${longitude}`;

            locationElement.innerText = formattedLocation;
        }, function(error) {
            locationElement.innerText = 'Unable to retrieve location.';
        });
    } else {
        locationElement.innerText = 'Geolocation is not supported by your browser.';
    }
}