import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {bigProjects.projects.map((project, i) => {
              return (
                <div key={i} className="startup-project-logo" onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt={project.name} src={project.image}></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
