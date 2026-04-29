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
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: paraRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        btnRef.current,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",
          delay: 0.4,
          scrollTrigger: { trigger: btnRef.current, start: "top 90%" },
        }
      );

      gsap.fromTo(
        [img1Ref.current, img3Ref.current],
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );

      gsap.fromTo(
        [img2Ref.current, img4Ref.current],
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );

      gsap.to([img1Ref.current, img2Ref.current], {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to([img3Ref.current, img4Ref.current], {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="combined-sec" ref={sectionRef}>
      <div className="about-sec">
        <div className="img">
          <img src={illustration3}  loading="lazy"  alt="illustration" ref={img1Ref} />
          <img src={illustration4}  loading="lazy"  alt="illustration" ref={img2Ref} />
        </div>

        <div className="container" id="about">
          <div className="row">
            <div className="text-container">
              <h1 ref={headingRef}>ABOUT ME</h1>

              <p ref={paraRef}>
                Hi, I'm a passionate Front-End Developer...
              </p>

              <button
                className="btn-gradient"
                ref={btnRef}
                onClick={() => navigate("/projects")}
              >
                See My Work
              </button>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img src={illustration1}  loading="lazy" alt="illustration" ref={img3Ref} />
          <img src={illustration2}  loading="lazy" alt="illustration" ref={img4Ref} />
        </div>
      </div>
    </section>
  );
};