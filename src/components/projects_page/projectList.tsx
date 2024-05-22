import React from "react";
import rawProjects from "../../data/projects.json";
import ProjectElement from "./projectElement";

interface ProjectData {
  id: number;
  title: string;
  content: string;
  extendedContent: string;
  imageUrl: string;
  imageAltText: string;
}

const projects: ProjectData[] = rawProjects as ProjectData[];

const ProjectsPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const projectId = searchParams.get("id");

  return (
    <div>
      {projects.map((project) => (
        <ProjectElement
          id={project.id}
          title={project.title}
          extendedContent={project.extendedContent}
          imageUrl={project.imageUrl}
          imageAltText={project.imageAltText}
          showLayer={project.id.toString() === projectId}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
