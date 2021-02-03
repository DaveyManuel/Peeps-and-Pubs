    /* ---- tsParticles config ---- */
    tsParticles.load("dust", {
        backgroundMode: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#000000"
            },
            image: {
              src: "./assets/PEEPS AND PUBS LOGO - WHITE.png",
              width: 300,
              height: 300
            }
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 15,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false
            },
            onclick: {
              enable: false
            },
            resize: false
          }
        },
        retina_detect: true
      });
      