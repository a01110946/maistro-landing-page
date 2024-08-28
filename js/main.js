// Simple animation for feature cards
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