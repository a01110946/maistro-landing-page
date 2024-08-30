import { gsap } from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
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
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted with data:', data);
    // Here you would typically send this data to your server
    alert('Thank you for registering! We will be in touch soon.');
    form.reset();
  });

  function openScheduler() {
    // Replace this URL with your actual scheduling service URL
    window.open('https://calendly.com/fernandomaytorena/30min', '_blank');
  }

  function openScheduler() {
    document.getElementById('demo-modal').classList.remove('hidden');
  }
  
  document.getElementById('close-modal').onclick = function() {
    document.getElementById('demo-modal').classList.add('hidden');
  }
  
  document.getElementById('schedule-button').onclick = function() {
    // Replace this URL with your actual scheduling service URL
    window.open('https://calendly.com/fernandomaytorena/30min', '_blank');
  }
  
  // Close the modal if user clicks outside of it
  window.onclick = function(event) {
    let modal = document.getElementById('demo-modal');
    if (event.target == modal) {
      modal.classList.add('hidden');
    }
  }


});