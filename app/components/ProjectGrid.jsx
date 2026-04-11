"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CaseStudyExpanded from "./CaseStudyExpanded";

export default function ProjectGrid({ projects }) {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleExpand = (project) => {
    setExpandedProject(project);
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <AnimatePresence>
        {expandedProject ? (
          <CaseStudyExpanded
            key="expanded"
            project={expandedProject}
            onClose={handleClose}
          />
        ) : (
          projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onExpand={handleExpand}
              isExpanded={false}
            />
          ))
        )}
      </AnimatePresence>
    </div>
  );
}
