/*---active-link js start---*/
const navLinks = document.querySelectorAll('.nav-links a');
function setActiveLink(event) {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    event.target.classList.add('active-link');
}
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});
/*---active-link js end---*/



/*--Proffession js of first section start--*/
const professions = ["Web Developer","Web Designer", "Competitive Programmer"];
let currentProfessionIndex = 0;
let charIndex = 0;
const professionElement = document.getElementById("profession");

function typeProfession() {
  // Get current word
  const currentProfession = professions[currentProfessionIndex];
  
  // Display characters one by one
  if (charIndex < currentProfession.length) {
    professionElement.textContent += currentProfession.charAt(charIndex);
    charIndex++;
    setTimeout(typeProfession, 100); // Adjust typing speed here
  } else {
    // Pause before erasing
    setTimeout(eraseProfession, 2000); // Delay after full word is typed
  }
}

function eraseProfession() {
  if (charIndex > 0) {
    // Remove characters one by one
    professionElement.textContent = professionElement.textContent.slice(0, --charIndex);
    setTimeout(eraseProfession, 50); // Adjust erasing speed here
  } else {
    // Move to the next word
    currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
    setTimeout(typeProfession, 500); // Delay before typing next word
  }
}

// Start the typing effect
typeProfession();

/*--Proffession js of first section ends--*/

/*---About section js start---*/
let tablinks = document.querySelectorAll(".tab-link");
let tabcontents = document.querySelectorAll(".tab-content");

function opentab(tabname, event) {
    // Remove active class from all tab links
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-link");
    });

    // Remove active class from all tab contents
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tab");
    });

    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
