const ParticlesSetting = {
  default: {
    bubbles: {
      background: {
        color: '#7200a5',
      },
      emitters: {
        direction: 'random',
        size: {
          width: 100,
          height: 100,
        },
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          delay: 0.1,
          quantity: 2,
        },
      },
      particles: {
        number: {
          value: 0,
        },
        color: {
          value: [
            '#3998D0',
            '#2EB6AF',
            '#A9BD33',
            '#FEC73B',
            '#F89930',
            '#F45623',
            '#D62E32',
            '#EB586E',
            '#9952CF',
          ],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.8,
          random: {
            enable: true,
            minimumValue: 0.3,
          },
        },
        size: {
          value: 200,
          anim: {
            enable: true,
            speed: 50,
            size_min: 2,
            sync: true,
            startValue: 'max',
            destroy: 'min',
          },
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'destroy',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 100,
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    },
    snow: {
      background: {
        color: '#7200a5',
      },
      interactivity: {
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 1,
            size: 2,
          },
          grab: {
            distance: 400,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        links: {
          color: {
            value: '#ffffff',
          },
          distance: 500,
          opacity: 0.4,
          width: 1,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          direction: 'bottom',
          enable: true,
          outModes: {
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
          },
        },
        number: {
          density: {
            enable: true,
          },
          limit: 40,
          value: 40,
        },
        opacity: {
          random: {
            enable: true,
          },
          value: 0.5,
          animation: {
            minimumValue: 0.1,
            speed: 0.1,
          },
        },
        size: {
          random: {
            enable: true,
          },
          value: 10,
          animation: {
            minimumValue: 0,
            speed: 0.1,
          },
        },
        stroke: {
          color: {
            value: '#000000',
            animation: {
              enable: false,
              speed: 0.1,
              sync: true,
            },
          },
        },
      },
    },
    stars: {
      background: {
        color: '#7200a5',
      },
      detectRetina: false,
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: '#fff',
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          limit: 500,
          value: 400,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 0.25,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 0.05,
          },
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 0.1,
          straight: false,
        },
      },
    },
  },
  dark: {
    bubbles: {
      background: {
        color: '#000',
      },
      emitters: {
        direction: 'random',
        size: {
          width: 100,
          height: 100,
        },
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          delay: 0.1,
          quantity: 2,
        },
      },
      particles: {
        number: {
          value: 0,
        },
        color: {
          value: [
            '#484f56',
            '#466967',
            '#484a3b',
            '#665c48',
            '#5f5443',
            '#2b2322',
            '#665657',
            '#5f4f51',
            '#786e83',
          ],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.8,
          random: {
            enable: true,
            minimumValue: 0.3,
          },
        },
        size: {
          value: 200,
          anim: {
            enable: true,
            speed: 50,
            size_min: 2,
            sync: true,
            startValue: 'max',
            destroy: 'min',
          },
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'destroy',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 100,
          },
          push: {
            quantity: 4,
          },
        },
      },
      detectRetina: true,
    },
    snow: {
      background: {
        color: '#000',
      },
      interactivity: {
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 1,
            size: 2,
          },
          grab: {
            distance: 400,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        links: {
          color: {
            value: '#ffffff',
          },
          distance: 500,
          opacity: 0.4,
          width: 1,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          direction: 'bottom',
          enable: true,
          outModes: {
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
          },
        },
        number: {
          density: {
            enable: true,
          },
          limit: 40,
          value: 40,
        },
        opacity: {
          random: {
            enable: true,
          },
          value: 0.5,
          animation: {
            minimumValue: 0.1,
            speed: 0.1,
          },
        },
        size: {
          random: {
            enable: true,
          },
          value: 10,
          animation: {
            minimumValue: 0,
            speed: 0.1,
          },
        },
        stroke: {
          color: {
            value: '#000000',
            animation: {
              enable: false,
              speed: 0.1,
              sync: true,
            },
          },
        },
      },
    },
    stars: {
      background: {
        color: '#000',
      },
      detectRetina: false,
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: '#fff',
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          limit: 500,
          value: 400,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 0.25,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 0.05,
          },
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 0.1,
          straight: false,
        },
      },
    },
  },
  white: {
    bubbles: {
      background: {
        color: '#e5e5e5',
      },
      emitters: {
        direction: 'random',
        size: {
          width: 60,
          height: 60,
        },
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          delay: 0.7,
          quantity: 1,
        },
      },
      particles: {
        limit: 10,
        number: {
          value: 0,
        },
        color: {
          value: [
            '#7ba9c4',
            '#a1c4c3',
            '#adb388',
            '#cabd9d',
            '#d6c3af',
            '#c35431',
            '#cf797b',
            '#c3707c',
            '#a690b7',
          ],
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.8,
          random: {
            enable: true,
            minimumValue: 0.3,
          },
        },
        size: {
          value: 100,
          anim: {
            enable: true,
            speed: 50,
            size_min: 2,
            sync: true,
            startValue: 'max',
            destroy: 'min',
          },
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'destroy',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        modes: {
          repulse: {
            distance: 100,
          },
          push: {
            quantity: 4,
          },
        },
      },
    },
    snow: {
      background: {
        color: '#e5e5e5',
      },
      interactivity: {
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 1,
            size: 2,
          },
          grab: {
            distance: 400,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        links: {
          color: {
            value: '#000',
          },
          distance: 500,
          opacity: 0.4,
          width: 1,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          direction: 'bottom',
          enable: true,
          outModes: {
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
          },
        },
        number: {
          density: {
            enable: true,
          },
          limit: 40,
          value: 40,
        },
        size: {
          random: {
            enable: true,
          },
          value: 10,
          animation: {
            minimumValue: 0,
            speed: 0.1,
          },
        },
        stroke: {
          color: {
            value: '#000000',
            animation: {
              enable: false,
              speed: 0.1,
              sync: true,
            },
          },
        },
      },
    },
    stars: {
      background: {
        color: '#fff',
      },
      detectRetina: false,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: '#000',
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          limit: 500,
          value: 400,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 0.25,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 0.05,
          },
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 0.1,
          straight: false,
        },
      },
    },
  },
};

export default ParticlesSetting;
