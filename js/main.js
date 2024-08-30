import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = 'https://calendly.com/fernandomaytorena/30min';

function openScheduler() {
  console.log('openScheduler function called');
  const modal = document.getElementById('demo-modal');
  const calendlyEmbed = document.getElementById('calendly-embed');
  const scheduleButton = document.getElementById('demo-cta');

  if (modal && calendlyEmbed) {
    modal.classList.remove('hidden');
    scheduleButton.classList.add('hidden');
    console.log('Modal opened');
    
    // Embed Calendly
    Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: calendlyEmbed,
      prefill: {},
      utm: {}
    });
  } else {
    console.error('Modal or Calendly embed element not found');
  }
}

// Function to hide the modal and show the schedule button
function closeScheduler() {
  const modal = document.getElementById('demo-modal');
  const scheduleButton = document.getElementById('demo-cta');
  
  if (modal && scheduleButton) {
    modal.classList.add('hidden');
    scheduleButton.classList.remove('hidden');
  }
}

// Event listener for Calendly events
window.addEventListener('message', function(e) {
  if (e.data.event && e.data.event.indexOf('calendly') === 0) {
    if (e.data.event === 'calendly.event_scheduled' || e.data.event === 'calendly.close') {
      closeScheduler();
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOMContentLoaded event fired');

  // GSAP animation
  gsap.from(".feature-card", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission
  const form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      // We're not preventing default here, allowing the form to submit naturally to Formspree
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log('Form submitted with data:', data);
    });
  } else {
    console.error('Signup form not found');
  }

  // Schedule Demo button
  const demoButton = document.querySelector('#demo-cta button');
  if (demoButton) {
    console.log('Schedule Demo button found');
    demoButton.addEventListener('click', function() {
      console.log('Schedule Demo button clicked');
      openScheduler();
    });
  } else {
    console.error('Schedule Demo button not found');
  }

  const closeModalButton = document.getElementById('close-modal');
  if (closeModalButton) {
    closeModalButton.addEventListener('click', function() {
      document.getElementById('demo-modal').classList.add('hidden');
      console.log('Modal closed');
    });
  } else {
    console.error('Close modal button not found');
  }
  
 
  // Close the modal if user clicks outside of it
  window.addEventListener('click', function(event) {
    let modal = document.getElementById('demo-modal');
    if (event.target == modal) {
      modal.classList.add('hidden');
      console.log('Modal closed by clicking outside');
    }
  });
});