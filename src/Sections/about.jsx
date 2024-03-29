/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Location from "../Photos/location.png";
import { useState, useEffect } from "react";
import { AboutData } from "@/Data";

export default function About() {
  const [about, setAbout] = useState([]);

  const SocialMediaAccounts = {
    linkedin: "https://www.linkedin.com/in/busycaesar/",
    github: "https://github.com/busycaesar",
    devto: "https://dev.to/busycaesar",
    gmail: "mailto:busycaesar@gmail.com",
  };

  useEffect(() => {
    AboutData()
      .then((data) => setAbout(data))
      .catch((error) => console.log(error));
  }, [about]);

  return (
    <div id="about" className="content-section">
      {about.name && (
        <>
          <h1 style={{ fontSize: "4em" }}>
            <strong>{about.name.toUpperCase()}</strong>
          </h1>
          <h2 style={{ fontSize: "2.5em" }}>
            <strong>{about.designation}</strong>
          </h2>
          <p>
            <Image
              alt="Location"
              style={{ marginRight: "0.5em" }}
              width={20}
              src={Location}
            />
            {about.location}
          </p>
          <p>{about.introduction}</p>

          <div style={{ margin: "1em 0" }}>
            {Object.entries(SocialMediaAccounts).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                style={{ marginRight: "0.5em" }}
              >
                <img
                  src={`https://skillicons.dev/icons?i=${key}&theme=light`}
                  alt={`Link to Dev's ${key}`}
                />
              </a>
            ))}
          </div>

          {/* <div className="social-links">
            
            <a href="https://www.linkedin.com/in/busycaesar/" target="_blank">
              <Image
                alt="Link to Dev's LinkedIn"
                width={45}
                src={LinkedinLogo}
              />
            </a>
            <a href="https://github.com/busycaesar" target="_blank">
              <Image alt="Link to Dev's GitHub" width={50} src={GitHubLogo} />
            </a>
            <a href="mailto:busycaesar@gmail.com" target="_blank">
              <Image alt="Link to Dev's Email" width={45} src={GmailLogo} />
            </a>
          </div> */}
        </>
      )}
    </div>
  );
}
