gsap.registerPlugin(ScrollTrigger);

// Animate entire header fade-in
gsap.from("header#home", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out",
});

// Animate heading with slight slide-up
gsap.from("header#home h1", {
  opacity: 0,
  y: -40,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});


// Animate subtexts with stagger effect
gsap.from("header#home p", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  ease: "power2.out"
});


  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });
  });

    gsap.from("#contact form", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
      }
    });

    gsap.from("#social-icons a", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#social-icons",
        start: "top 90%"
      }
    });
