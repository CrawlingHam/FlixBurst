import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export const TimedLaunchAnimation = () => {
  useEffect(() => {
    // Fade in and fade out the SVG
    const animate = () => {
      gsap.from('#mirrored', {
        scaleX: 0.99,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.to('#mirrored', {
            opacity: 0.3,
            scale: 1.01,
            duration: 4,
            repeat: -1,
            yoyo: true,
            onComplete: animate,
          });
        },
      });
      gsap.from('#unmirrored', {
        scale: 0.99,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.to('#unmirrored', {
            opacity: 0.3,
            scale: 1,
            duration: 4,
            repeat: -1,
            yoyo: true,
            onComplete: animate,
          });
        },
      });
    };

    // Start the animation
    animate();

    console.log('running');

    // Cleanup function to stop the animations on unmount
    return () => {
      gsap.killTweensOf('#mirrored');
      gsap.killTweensOf('#unmirrored');
      console.log('animation ended');
    };
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800">
      <defs>
        <linearGradient
          x1="50%"
          y1="10%"
          x2="50%"
          y2="100%"
          id="oooscillate-grad"
        >
          <stop
            className="color-stop1"
            stop-color="hsl(206, 75%, 49%)"
            stop-opacity="1"
            offset="30%"
          ></stop>
          <stop
            className="color-stop2"
            stop-color="hsl(500, 90%, 56%)"
            stop-opacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>

      {/* Mirrored Paths */}
      <g
        id="mirrored"
        stroke-width="1"
        stroke="url(#oooscillate-grad)"
        fill="none"
        stroke-linecap="round"
      >
        <path
          d="M 1422 448 Q 1066.5 -100 711 400 Q 355.5 900 0 448"
          opacity="0.05"
        ></path>
        <path
          d="M 1422 420 Q 1066.5 -100 711 400 Q 355.5 900 0 420"
          opacity="0.11"
        ></path>
        <path
          d="M 1422 392 Q 1066.5 -100 711 400 Q 355.5 900 0 392"
          opacity="0.18"
        ></path>
        <path
          d="M 1422 364 Q 1066.5 -100 711 400 Q 355.5 900 0 364"
          opacity="0.24"
        ></path>
        <path
          d="M 1422 336 Q 1066.5 -100 711 400 Q 355.5 900 0 336"
          opacity="0.30"
        ></path>
        <path
          d="M 1422 308 Q 1066.5 -100 711 400 Q 355.5 900 0 308"
          opacity="0.37"
        ></path>
        <path
          d="M 1422 280 Q 1066.5 -100 711 400 Q 355.5 900 0 280"
          opacity="0.43"
        ></path>
        <path
          d="M 1422 252 Q 1066.5 -100 711 400 Q 355.5 900 0 252"
          opacity="0.49"
        ></path>
        <path
          d="M 1422 224 Q 1066.5 -100 711 400 Q 355.5 900 0 224"
          opacity="0.56"
        ></path>
        <path
          d="M 1422 196 Q 1066.5 -100 711 400 Q 355.5 900 0 196"
          opacity="0.62"
        ></path>
        <path
          d="M 1422 168 Q 1066.5 -100 711 400 Q 355.5 900 0 168"
          opacity="0.68"
        ></path>
        <path
          d="M 1422 140 Q 1066.5 -100 711 400 Q 355.5 900 0 140"
          opacity="0.75"
        ></path>
        <path
          d="M 1422 112 Q 1066.5 -100 711 400 Q 355.5 900 0 112"
          opacity="0.81"
        ></path>
        <path
          d="M 1422 84 Q 1066.5 -100 711 400 Q 355.5 900 0 84"
          opacity="0.87"
        ></path>
        <path
          d="M 1422 56 Q 1066.5 -100 711 400 Q 355.5 900 0 56"
          opacity="0.94"
        ></path>
      </g>

      {/* Unmirrored Paths */}
      <g
        id="unmirrored"
        stroke-width="1"
        stroke="url(#oooscillate-grad)"
        fill="none"
        stroke-linecap="round"
      >
        <path
          d="M 0 448 Q 355.5 -100 711 400 Q 1066.5 900 1422 448"
          opacity="0.05"
        ></path>
        <path
          d="M 0 420 Q 355.5 -100 711 400 Q 1066.5 900 1422 420"
          opacity="0.11"
        ></path>
        <path
          d="M 0 392 Q 355.5 -100 711 400 Q 1066.5 900 1422 392"
          opacity="0.18"
        ></path>
        <path
          d="M 0 364 Q 355.5 -100 711 400 Q 1066.5 900 1422 364"
          opacity="0.24"
        ></path>
        <path
          d="M 0 336 Q 355.5 -100 711 400 Q 1066.5 900 1422 336"
          opacity="0.30"
        ></path>
        <path
          d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308"
          opacity="0.37"
        ></path>
        <path
          d="M 0 280 Q 355.5 -100 711 400 Q 1066.5 900 1422 280"
          opacity="0.43"
        ></path>
        <path
          d="M 0 252 Q 355.5 -100 711 400 Q 1066.5 900 1422 252"
          opacity="0.49"
        ></path>
        <path
          d="M 0 224 Q 355.5 -100 711 400 Q 1066.5 900 1422 224"
          opacity="0.56"
        ></path>
        <path
          d="M 0 196 Q 355.5 -100 711 400 Q 1066.5 900 1422 196"
          opacity="0.62"
        ></path>
        <path
          d="M 0 168 Q 355.5 -100 711 400 Q 1066.5 900 1422 168"
          opacity="0.68"
        ></path>
        <path
          d="M 0 140 Q 355.5 -100 711 400 Q 1066.5 900 1422 140"
          opacity="0.75"
        ></path>
        <path
          d="M 0 112 Q 355.5 -100 711 400 Q 1066.5 900 1422 112"
          opacity="0.81"
        ></path>
        <path
          d="M 0 84 Q 355.5 -100 711 400 Q 1066.5 900 1422 84"
          opacity="0.87"
        ></path>
        <path
          d="M 0 56 Q 355.5 -100 711 400 Q 1066.5 900 1422 56"
          opacity="0.94"
        ></path>
      </g>
    </svg>
  );
};
