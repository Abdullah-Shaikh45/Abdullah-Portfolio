    gsap.registerPlugin(ScrollTrigger);

    gsap.from("header h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from("header p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.utils.toArray("section").forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
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
