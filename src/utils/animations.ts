"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initAnimations = () => {
  gsap.set(['.hero-title', '.hero-subtitle', '.hero-icons', '.animate-section', '.animate-card', '.animate-text', '.animate-button', '.animate-nav'], {
    clearProps: "all",
    opacity: 1
  });

  setTimeout(() => {
    const heroTimeline = gsap.timeline();
    
    heroTimeline
      .from(".hero-title", { 
        duration: 1.2, 
        y: 100, 
        opacity: 0, 
        ease: "power3.out",
        stagger: 0.2
      })
      .from(".hero-subtitle", { 
        duration: 0.8, 
        y: 50, 
        opacity: 0, 
        ease: "power2.out" 
      }, "-=0.5")
      .from(".hero-icons", { 
        duration: 0.6, 
        y: 30, 
        opacity: 0, 
        ease: "back.out(1.7)" 
      }, "-=0.3");

    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 80 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.utils.toArray('.animate-card').forEach((card: any, index: number) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    gsap.from('.animate-nav', { 
      duration: 1, 
      x: -100, 
      opacity: 0, 
      ease: "power2.out",
      delay: 0.5
    });

    gsap.utils.toArray('.animate-button').forEach((button: any) => {
      gsap.fromTo(button,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: button,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.utils.toArray('.animate-text').forEach((text: any) => {
      gsap.fromTo(text,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, 100);
};

// Hover animations
export const addHoverAnimations = () => {
  gsap.utils.toArray('.hover-scale').forEach((element: any) => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  gsap.utils.toArray('.hover-lift').forEach((element: any) => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { y: -10, duration: 0.3, ease: "power2.out" });
    });
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });
};

// Page transition animation
export const pageTransition = (callback: () => void) => {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #dc2626 0%, #7f1d1d 100%);
    z-index: 9999;
    transform: translateY(-100%);
  `;
  
  document.body.appendChild(overlay);
  
  gsap.to(overlay, {
    transform: 'translateY(0%)',
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      callback();
      gsap.to(overlay, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.1,
        onComplete: () => {
          document.body.removeChild(overlay);
        }
      });
    }
  });
};
