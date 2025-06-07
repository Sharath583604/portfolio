document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const resumeButton = document.getElementById('draggableResume');
    
    let isDragging = false;
    let startX, startY, initialX, initialY;
  
    // Mouse down event to start dragging
    resumeButton.addEventListener('mousedown', function (e) {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialX = resumeButton.offsetLeft;
      initialY = resumeButton.offsetTop;
      resumeButton.style.cursor = 'grabbing'; // Change cursor to grabbing when dragging
  
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDragging);
    });
  
    // Function to handle the dragging motion
    function drag(e) {
      if (!isDragging) return;
      
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      resumeButton.style.left = initialX + dx + 'px';
      resumeButton.style.top = initialY + dy + 'px';
    }
  
    // Mouse up event to stop dragging
    function stopDragging() {
      isDragging = false;
      resumeButton.style.cursor = 'move'; // Revert cursor to move when dragging stops
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDragging);
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    const resumeSection = document.getElementById('resume');
    
    function handleNavigationVisibility() {
        const currentSectionId = window.location.hash.substring(1);
        if (currentSectionId === 'resume') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex'; // or 'block' depending on your layout
        }
    }

    // Check visibility on page load
    handleNavigationVisibility();

    // Check visibility on hash change
    window.addEventListener('hashchange', handleNavigationVisibility);
});
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');

    function handleNavigationVisibility() {
        if (window.location.pathname.endsWith('resume.html')) {
            nav.style.display = 'none'; // Hide nav on resume page
        } else {
            nav.style.display = 'flex'; // Show nav on other pages
        }
    }

    // Check visibility on page load
    handleNavigationVisibility();
});
