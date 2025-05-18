// import './styles/LeftBlock.css';
import React, { useState, useEffect } from 'react';

const sections = ["main", "skills", "projects"];

export default function LeftBlock() {
    const [activeSection, setActiveSection] = useState("main");
    useEffect(() => {
        const container = document.querySelector('.right-container');
        if (!container) return;
        const observer = new IntersectionObserver(
        entries => {
            const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible.length > 0) {
            setActiveSection(visible[0].target.id);
          }
        },
        {
          root: container, // 👈 attach to the scrollable container
          threshold: 0.5,
        }
        );
    
        sections.forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
    
        return () => observer.disconnect();
      }, []);
    console.log("Active section:", activeSection);
    return (
        <div className="LeftBlock half-container">
          <div className="intro-block">
              <div className="intro-name">Saranya Kalidindi </div>
              <div className="intro-title">Front end Engineer | Devops Engineer</div>
              <div className="intro-brief">
                  I build and maintain CICD pipelines, database and dashboards for a robust DevOps system.
                  I build and maintain pixel perfect websites and dashboard.
              </div>
          </div>
          <div className="nav-block">
          {sections.map(section => (
            <div className='nav-block-wrapper'>
                <a
            key={section}
            href={`#${section}`}
            className={`nav-block-wrapper ${activeSection === section ? "active" : ""}`}
          >
            <div className="nav-block-line"></div>
            {section.toUpperCase()}
          </a>
            </div>
            
        ))}
          </div>
          <div className="links-block">
              <a href="https://github.com/klsaranya" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/github.svg" fill="#AD6A6C" alt="github" width="32" height="32"/>
              </a>
              <a href="https://www.linkedin.com/in/saranya-kalidindi/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin2.svg" fill="#AD6A6C" alt="github" width="32" height="32"/>
              </a>
              <a href="mailto:klsaranya108@gmail.com?subject=Hello%20from%20portfolio&body=Hi%20there!" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/gmail2.svg" fill="#AD6A6C" alt="github" width="32" height="32"/>
              </a>
          </div>
        </div>
      );
}