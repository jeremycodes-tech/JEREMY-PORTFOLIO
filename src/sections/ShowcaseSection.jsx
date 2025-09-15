import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const proj1Ref = useRef(null); // J'S TRAVELS
  const proj2Ref = useRef(null); // J'S ESTATE
  const proj3Ref = useRef(null); // J'S MAGAZINE
  const proj4Ref = useRef(null); // JEREWITDASHIFTS AI
  const proj5Ref = useRef(null); // WITDASHIFTS ATHLETICS
  const proj6Ref = useRef(null); // WITDASHIFTS DRINK

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      proj1Ref.current,
      proj2Ref.current,
      proj3Ref.current,
      proj4Ref.current,
      proj5Ref.current,
      proj6Ref.current,
    ];

    cards.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Project 1: J'S TRAVELS */}
          <div ref={proj1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/J'S-TRAVELS.png" alt="J'S TRAVELS" />
            </div>
            <div className="text-content">
              <h2>J’S TRAVELS – Travel & Adventure Showcase</h2>
              <p className="text-white-50 md:text-xl">
                A modern travel website designed to inspire adventure, explore new destinations, 
                and plan your next trip with ease.
              </p>
              <a
                href="https://js-travels-i6vq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Click To Visit Website
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Project 2: J'S MAGAZINE */}
            <div className="project project-right" ref={proj3Ref}>
              <div className="image-wrapper bg-gray-300">
                <img src="/images/J'S-MAGAZINE.png" alt="J'S MAGAZINE" />
              </div>
              <h2>J’S MAGAZINE – Digital Publication Experience</h2>
              <p className="text-white-50 md:text-xl">
                A sleek and interactive digital magazine platform featuring engaging articles, 
                multimedia content, and smooth page transitions.
              </p>
              <a
                href="https://jeremycodes-tech.github.io/J-S-MAGAZINE/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Click To Visit Website
              </a>
            </div>

            {/* Project 3: JEREWITDASHIFTS AI */}
            <div className="project" ref={proj4Ref}>
              <div className="image-wrapper bg-gray-300">
                <img
                  src="/images/JEREWITDASHIFTS-AI.png"
                  alt="JEREWITDASHIFTS AI"
                />
              </div>
              <h2>JEREWITDASHIFTS AI – Smart Tech Solutions</h2>
              <p className="text-white-50 md:text-xl">
                An AI-powered platform showcasing automation, data-driven decisions, 
                and next-gen intelligent solutions for businesses.
              </p>
              <a
                href="https://jerewitdashifts-ai-k8ig.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Click To Visit Website
              </a>
            </div>

            {/* Project 4: WITDASHIFTS DRINK */}
            <div className="project" ref={proj6Ref}>
              <div className="image-wrapper bg-gray-300">
                <img
                  src="/images/WITDASHIFTS-DRINK.png"
                  alt="WITDASHIFTS DRINK"
                />
              </div>
              <h2>WITDASHIFTS DRINK – Sports Beverage Brand</h2>
              <p className="text-white-50 md:text-xl">
                A bold, energetic website for a performance-focused sports drink, 
                featuring product highlights, health benefits, and a vibrant brand identity.
              </p>
              <a
                href="https://jeremycodes-tech.github.io/WITDASHIFTS-DRINK/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Click To Visit Website
              </a>
            </div>

            {/* Project 5: WITDASHIFTS ATHLETICS */}
            <div className="project" ref={proj5Ref}>
              <div className="image-wrapper bg-black">
                <img
                  src="/images/WITDASHIFTS-ATHLETICS.png"
                  alt="WITDASHIFTS ATHLETICS"
                />
              </div>
              <h2>WITDASHIFTS ATHLETICS – Sports & Fitness Platform</h2>
              <p className="text-white-50 md:text-xl">
                A community-driven sports and fitness platform with training programs, 
                athlete profiles, and motivational content for an active lifestyle.
              </p>
              <a
                href="https://jeremycodes-tech.github.io/WITDASHIFTS/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Click To Visit Website
              </a>
            </div>

            {/* Project 6: J'S ESTATE */}
            <div className="project" ref={proj2Ref}>
              <div className="image-wrapper bg-yellow-900">
                <img src="/images/J'S-ESTATE.png" alt="J'S ESTATE" />
              </div>
              <h2>J’S ESTATE – Real Estate Platform</h2>
              <p className="text-white-50 md:text-xl">
                A sleek real estate platform showcasing properties, prices, 
                and neighborhood highlights with an easy-to-use interface.
              </p>
              <a
                href="https://jeremycodes-tech.github.io/J-S-ESTATE/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Click To Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
