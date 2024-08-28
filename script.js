document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.header__nav a');
  const navFooterLinks = document.querySelectorAll('.footer__nav a');
  const sections = document.querySelectorAll('.section');

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);

    console.log(targetId);
    if (!targetId) {
      return;
    }

    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove('visible');
    });

    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('visible');
    }

    // Update active link
    [...navLinks, ...navFooterLinks].forEach((link) => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  // Attach click event listeners to header nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavClick);
  });

  // Attach click event listeners to footer nav links
  navFooterLinks.forEach((link) => {
    link.addEventListener('click', handleNavClick);
  });

  // Initialize the first tab as active
  if (navLinks.length > 0) {
    navLinks[0].click();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.marquee').forEach(function (marquee) {
    const container = marquee.parentElement;
    const content = marquee.querySelector('.marquee-content');
    const contentWidth = content.offsetWidth;
    const containerWidth = container.clientWidth;

    // Check and duplicate content to fill the container
    while (marquee.scrollWidth < containerWidth * 2) {
      marquee.innerHTML += marquee.innerHTML;
    }

    // Adjust the animation speed based on the content width
    const animationDuration = (contentWidth / containerWidth) * 50;
    marquee.style.animationDuration = `${animationDuration}s`;
  });
});
