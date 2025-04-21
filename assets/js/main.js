/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Full-Stack Web Developer", "AI/ML Developer", "LLM Integrator"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

// Project array with image, title, description, and link for each project
const projects = [
    {
      image: "assets/doughnuts.png",
      title: "Real Tasty Doughnuts",
      description: "A bakery website with a custom email service using EmailJS",
      link: "https://github.com/abdullahahmadarslan/RealTastyDoughnuts-React-EmailJs.git"
    },
    {
      image: "assets/shoply.png",
      title: "Shoply",
      description: "An E-Commerce website with authentication, analytics and payment integration.",
      link: "https://github.com/abdullahahmadarslan/Shoply-MERN"
    },
    {
      image: "assets/coffee.png",
      title: "Pinnochio Cafe",
      description: "A coffee shop website with a custom email service using EmailJS",
      link: "https://github.com/abdullahahmadarslan/PinnochioCafe-React-EmailJs"
    },
    {
      image: "assets/chat.jpeg",
      title: "Safe Chat",
      description: "A Real-Time messaging application with AI based Content Filtering",
      link: "https://github.com/abdullahahmadarslan/SafeChat-MERN-DeepLearning"
    },
    {
      image: "assets/model.png",
      title: "NSFW Classifier",
      description: "A 90% accurate NSFW content classifier using Deep Learning",
      link: "https://github.com/abdullahahmadarslan/NSFW-Classifier-Deep-Learning"
    },
    {
      image: "assets/bubban.png",
      title: "Bubban Technical",
      description: "A full stack services provider website with admin panel.",
      link: "https://github.com/abdullahahmadarslan/Bubban-Technical-MERN"
    },
    {
        image: "assets/attendance.png",
        title: "Facial Recognition Attendance System",
        description: "AI powered realtime facial recognition attendance system",
        link: "https://github.com/abdullahahmadarslan/Facial-Recognition-Attendance-System"
      },
      {
        image: "assets/mediquery.jpeg",
        title: "MediQuery",
        description: "A RAG-Powered Medical Chatbot Built with LLama 2",
        link: "https://github.com/abdullahahmadarslan/MediQuery-LLAMA2-LANGCHAIN-RAG"
      },
      {
        image: "assets/interview.png",
        title: "Interview Connect",
        description: "Interview Connect is a platform that connects interviewers and interviewees.",
        link: "https://github.com/abdullahahmadarslan/InterviewConnect/tree/main/interview_connect"
      }
  ];
  
  // Function to generate HTML for project boxes
  function generateProjectBoxes() {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = ''; // Clear existing content
    
    projects.forEach(project => {
      const projectBox = document.createElement('div');
      projectBox.className = 'project-box';
      
      projectBox.innerHTML = `
        <div class="project-box-img">
        <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="project-box-content">
        <h3>${project.title}</h3>
        <label>${project.description}</label>
        <a href="${project.link}" class="project-link" target="_blank">
        <i class="uil uil-external-link-alt"></i>
        </a>
        </div>

      `;
      
      projectContainer.appendChild(projectBox);
    });
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', generateProjectBoxes);