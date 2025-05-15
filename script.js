/*const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.left = x + 'px';
  cursorDot.style.top = y + 'px';

  cursorOutline.style.left = x + 'px';
  cursorOutline.style.top = y + 'px';
})
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
  
      // Move dot and outline to cursor position
      cursorDot.style.transform = `translate(${x}px, ${y}px)`;
      cursorOutline.style.transform = `translate(${x -20}px, ${y - 20}px)`;
    });
  

  /*const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });

  link.addEventListener('mouseleave', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});
const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursorOutline.style.transform += ' scale(1.5)';
    });
    link.addEventListener('mouseleave', () => {
      cursorOutline.style.transform = cursorOutline.style.transform.replace(' scale(1.5)', '');
    });
  });
});
*/
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.left = x + "px";
  cursorDot.style.top = y + "px";

  cursorOutline.style.left = x + "px";
  cursorOutline.style.top = y + "px";
});

/* for mobile */

if (window.innerWidth <= 768) {
    document.querySelector(".cursor-dot").style.display = "none";
    document.querySelector(".cursor-outline").style.display = "none";
  }

  /* animation */

  // Wait for the page to load
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-load');
  
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('visible');
      }, index * 700); // 700ms delay between each section
    });
  });
  
  