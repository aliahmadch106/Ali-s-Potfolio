
document.getElementById('home').style.display = 'flex';

document.querySelector('nav a[href="#home"]').style.color = 'var(--primary-color)';

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.style.color = '';
    });

    const sectionId = anchor.getAttribute('href').split('#')[1];
    document.getElementById(sectionId).style.display = 'flex';

    anchor.style.color = 'var(--primary-color)';
  });
});







const toggleBtn = document.getElementById('togglebtn');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const nav = document.getElementById('nav');
const SkillContainer = document.getElementById('skillContainer');
const MainIntro = document.getElementById('mainIntro');
const ProjectBoxs = document.getElementById('projectContainer');
const SkillHead = document.getElementById('skillHead');
const Main = document.querySelector('main');
const ImageContainer = document.querySelector('.imageContainer');
const NavLinks = document.querySelectorAll('nav a');

toggleBtn.addEventListener('click', function() {
    if (toggleBtn.classList.contains('active')) {
      // Normal state
      span1.style.transform = 'rotate(0deg)';
      span2.style.opacity = '1';
      span3.style.transform = 'rotate(0deg)';
      toggleBtn.style.justifyContent='space-evenly';
      toggleBtn.classList.remove('active');
      nav.style.marginRight='-50vw';
    } else {
      // Toggled state
      span1.style.transform = 'rotate(45deg)';
      span2.style.opacity = '0';
      span3.style.transform = 'rotate(-45deg)';
      toggleBtn.style.justifyContent='center';
      toggleBtn.classList.add('active');
      nav.style.marginRight='0px';
    }
  });

  Main.addEventListener('click', function() {
    {
      // Normal state
      span1.style.transform = 'rotate(0deg)';
      span2.style.opacity = '1';
      span3.style.transform = 'rotate(0deg)';
      toggleBtn.style.justifyContent='space-evenly';
      toggleBtn.classList.remove('active');
      nav.style.marginRight='-50vw';
    }
  });

  const links = nav.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    span1.style.transform = 'rotate(0deg)';
      span2.style.opacity = '1';
      span3.style.transform = 'rotate(0deg)';
      toggleBtn.style.justifyContent='space-evenly';
      toggleBtn.classList.remove('active');
      nav.style.marginRight='-50vw';
  });
});




  


const projectSection = document.getElementById('project');
let printedProject = false;

setInterval(() => {
  if (projectSection.style.display === 'flex' && !printedProject) {
    console.log('Projects page has showed');

    ProjectBoxs.style.animation = 'projectshow .5s linear';
    SkillHead.style.animation = 'headingshow .5s linear';

    printedProject = true;
  }
}, 100);



const homeSection = document.getElementById('home');
let printedHome = false;

setInterval(() => {
  if (homeSection.style.display === 'flex' && !printedHome) {
    console.log('Home page has showed');

    nav.style.animation = 'navshow 1.5s linear';
    MainIntro.style.animation = 'infoshow .5s linear';
    ImageContainer.style.animation = 'imgshow .5s linear';

    printedHome = true;
  }
}, 100);



  const skillSection = document.getElementById('skill');
  let printedSkill = false;

  
  setInterval(() => {
    if (skillSection.style.display === 'flex' && !printedSkill) {
      console.log('Skills page has showed');

      SkillHead.style.animation = 'headingshow .5s linear';

      SkillContainer.style.animation = 'skillshow .5s linear';

      const progressBar = document.querySelectorAll('.personalSkillBox progress');

      progressBar.forEach((bar) => {
        const maxValue = parseInt(bar.getAttribute('value'));
        const time =  1500; // 2 seconds
        let currentValue = 0;
      
        const intervalId = setInterval(() => {
          currentValue += 1;
          bar.value = currentValue;
      
          if (currentValue >= maxValue) {
            clearInterval(intervalId);
          }
        }, time / maxValue);
      });


      const progressBars = document.querySelectorAll('.progressBar');

progressBars.forEach((bar) => {
  const percentage = bar.getAttribute('data-percentage');
  let currentPercentage = 0;

  const interval = setInterval(() => {
    if (currentPercentage >= percentage) {
      clearInterval(interval);
    } else {
      currentPercentage++;
      bar.style.background = `conic-gradient(var(--primary-color) 0% ${currentPercentage}%, var(--border-color) ${currentPercentage}% 100%)`;
    }
  }, 15); // 2 seconds mein 100% pahunchne ke liye 20ms ka interval hai
});
      printedSkill = true;
    } else if (skillSection.style.display === 'none' && printedSkill) {
      console.clear();
      printedSkill = false;
    }
  }, 100);
  





   
  

  const form = document.querySelector('.contactForm form');
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const phoneInput = form.querySelector('input[type="tel"]');
  const messageInput = form.querySelector('textarea');
  const submitButton = form.querySelector('button[type="submit"]');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Validate name
    if (nameInput.value.trim() === '') {
      alert('Please enter your name');
      return;
    }
  
    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Validate phone number
    const phoneRegex = /^(03|92)[0-9]{9}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      alert('Please enter a valid Pakistani phone number (e.g., 0345-1234567)');
      return;
    }
  
    // Validate message
    if (messageInput.value.trim() === '') {
      alert('Please enter your message');
      return;
    }
  
    // Form data ko collect karo
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value,
    };
  
    // Form data ko submit karo
    console.log('Form submitted successfully!');
    console.log(formData);
  
    // Reset form fields
    form.reset();
  });
  
  
