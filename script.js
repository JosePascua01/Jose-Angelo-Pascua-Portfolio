const sectionAbout = document.querySelector("#aboutMe");
const sectionProject = document.querySelector("#projects");
const sectionSkills = document.querySelector("#skills");
const sections = document.querySelectorAll("section.main-section");
const navLinks = document.querySelectorAll(".navbar ul li a");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(`${entry.target.id} is ${entry.isIntersecting}`)
    const link = document.querySelector(`.navbar ul li a[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      // if section is active and mouse is hovering link
      link.classList.add("active");
      link.classList.remove("non-active");
      link.classList.remove("hovered");
    } else {
      link.classList.remove("active");
      link.classList.add("non-active");
    }

    if (!link.classList.contains("has-hover-listener")) {
      link.addEventListener('mouseover', () => {
        if (!link.classList.contains("active")) {
          link.classList.add("hovered");
        }
      });

      link.addEventListener('mouseout', () => {
        link.classList.remove("hovered");
      });

      link.classList.add("has-hover-listener"); // Mark listeners as added
    }

  });//end forEach
}, options)//end IntersectionObserver arguments


sections.forEach(section => {
  observer.observe(section);
})
