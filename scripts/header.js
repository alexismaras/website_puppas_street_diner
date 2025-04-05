// let appHeader = `
//     <div style="display:grid;grid-template-columns: 1fr 3fr;">
//         <div style="grid-column: 1;">
//             <img src="logos/logo_prototype.svg" alt="Home" class="logo">
//         </div>
//         <div style="grid-column: 2;">
//             <a href="index.html"><li>HOME</li></a>
//             <a href="about.html"><li>ABOUT</li></a>
//             <a href="menue.html"><li>MENU</li></a>
//             <a href="events.html"><li>EVENTS</li></a>
//             <a href="bookings.html"><li>BOOKINGS</li></a>
//             <a href="contact.html"><li>CONTACT</li></a>
//         </div>
//         <link rel="stylesheet" href="styles/main.css">
//     </div>
// `;
// document.getElementById("app-header").innerHTML = appHeader;


document.addEventListener('DOMContentLoaded', function() {
    const headerContent = `
      <div class="header-container">
        <div class="logo-container">
          <a href="index.html">
            <img src="logos/logo_prototype.svg" alt="Puppa's Street Diner Logo" class="logo">
          </a>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="about.html">ABOUT</a></li>
            <li><a href="menue.html">MENU</a></li>
            <li><a href="events.html">EVENTS</a></li>
            <li><a href="bookings.html">BOOKINGS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </nav>
        
        <!-- Mobile Hamburger Menu -->
        <button class="hamburger" aria-label="Menu" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        
        <!-- Mobile Navigation -->
        <nav class="mobile-nav">
          <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="about.html">ABOUT</a></li>
            <li><a href="menue.html">MENU</a></li>
            <li><a href="events.html">EVENTS</a></li>
            <li><a href="bookings.html">BOOKINGS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    `;
    
    document.getElementById("app-header").innerHTML = headerContent;
    
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
      
      // Animate hamburger icon
      this.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
        hamburger.classList.remove('active');
      });
    });
  });