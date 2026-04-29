import { useEffect, useRef } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import illustration3 from "../assets/images/illustration3.png";
import illustration4 from "../assets/images/illustration4.png";
import illustration1 from "../assets/images/illustration1.png";
import illustration2 from "../assets/images/illustration2.png";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imgRefs = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" }
        }
      );

      gsap.fromTo(paraRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: { trigger: paraRef.current, start: "top 85%" }
        }
      );

      gsap.fromTo(btnRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(2)",
          scrollTrigger: { trigger: btnRef.current, start: "top 90%" }
        }
      );

      gsap.fromTo(imgRefs.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>

      {/* Floating Images */}
      <div className="floating-images">
        <img src={illustration3} ref={el => imgRefs.current[0] = el} alt="" />
        <img src={illustration4} ref={el => imgRefs.current[1] = el} alt="" />
        <img src={illustration1} ref={el => imgRefs.current[2] = el} alt="" />
        <img src={illustration2} ref={el => imgRefs.current[3] = el} alt="" />
      </div>

      {/* Content */}
      <div className="about-content">
        <h1 ref={headingRef}>ABOUT ME</h1>

        <p ref={paraRef}>
          Hi, I'm a passionate Front-End Developer who loves building modern,
          responsive and user-friendly websites using React, JavaScript and clean UI design.
        </p>

        <button
          ref={btnRef}
          onClick={() => navigate("/projects")}
          className="btn-gradient"
        >
          See My Work
        </button>
      </div>

    </section>
  );
}