let appFooter = `
    <div></div>
    <li>Home</li>
    <li>About</li>
    <li>Menu</li>
    <li>Events</li>
    <li>Bookings</li>
    <li>Contact</li>
`;
document.getElementById("app-footer").innerHTML = appFooter;

// Get current page filename
const currentPage = location.pathname.split("/").pop() || "index.html";

// Find and highlight the matching menu item
document.querySelectorAll("#app-header a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.querySelector("li").classList.add("active");
    }
});