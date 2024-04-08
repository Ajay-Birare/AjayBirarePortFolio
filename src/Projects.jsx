function ProjectsCard({ info }) {
  return (
    <div className="projectCard">
      <h2>{info.projectName}</h2>
      <a href={info.projectLink} target="_blank">
        LINK
      </a>
      <a href={info.projectCode} target="_blank">
        CODE
      </a>
    </div>
  );
}

const projectData = [
  {
    projectName: "To-Do List",
    projectLink: "https://ajay-birare.github.io/To-do-/",
    projectCode: "https://github.com/Ajay-Birare/To-do-",
  },
  {
    projectName: "Image Search",
    projectLink: "https://ajay-birare.github.io/Image-Search/",
    projectCode: "https://github.com/Ajay-Birare/Image-Search",
  },
  {
    projectName: "CodifyClone",
    projectLink: "https://ajay-birare.github.io/CodifyClone/",
    projectCode: "https://github.com/Ajay-Birare/CodifyClone",
  },
  {
    projectName: "PortFolio",
    projectLink: "https://ajay-birare.github.io/Ajay-Birare-Portfolio/",
    projectCode: "https://github.com/Ajay-Birare/Ajay-Birare",
  },
  {
    projectName: "Launch",
    projectLink: "https://ajay-birare.github.io/Launch/",
    projectCode: "https://github.com/Ajay-Birare/Launch",
  },
];

export default function Projects() {
  return (
    <div className="content project">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="projectContainer">
        {projectData.map((data, index) => (
          <ProjectsCard key={index} info={data} />
        ))}
      </div>
    </div>
  );
}
