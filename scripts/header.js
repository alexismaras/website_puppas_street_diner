let appHeader = `
    <div style="display:grid;grid-template-columns: 1fr 3fr;">
        <div style="grid-column: 1;">
            <img src="logos/logo_prototype.svg" alt="Home" class="logo">
        </div>
        <div style="grid-column: 2;">
            <a href="index.html"><li>Home</li></a>
            <a href="about.html"><li>About</li></a>
            <a href="menue.html"><li>Menu</li></a>
            <a href="events.html"><li>Events</li></a>
            <a href="bookings.html"><li>Bookings</li></a>
            <a href="contact.html"><li>Contact</li></a>
        </div>
        <link rel="stylesheet" href="styles/main.css">
    </div>
`;
document.getElementById("app-header").innerHTML = appHeader;