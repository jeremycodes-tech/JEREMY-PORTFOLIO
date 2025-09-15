import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="Jere's  Core Skills "
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon, index) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {index < techStackIcons.length - 2 ? (
                    <TechIconCardExperience model={techStackIcon} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-full p-4">
                      <img
                        src={
                          index === techStackIcons.length - 2
                            ? "/images/logo1.png"
                            : "/images/logo3.png"
                        }
                        alt={techStackIcon.name}
                        className="w-2/3 h-2/3 object-contain drop-shadow-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
