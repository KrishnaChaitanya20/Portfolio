import IconCloud from "../components/icon-cloud";

const slugs = [
    "amazonaws",
    "c",
    "typescript",
    "javascript",
    "java",
    "python",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "FaJava",
    "nginx",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "vscode",
    "figma",
    "kubernetes",
    "mysql",
    "mongodb",
    "jenkins",
    "ansible",
    "terraform",
    "linux",
    "windows",

];
const Skills = () => {
  return (
      // <BackgroundGradient containerClassName= "skills" className="rounded-[22px] p-2 sm:p-8 main-bg relative w-full h-full inset-1">
      <div className="skills min-w-[90%] pt-10">
        <div className="text-4xl mx-auto px-4 sm:px-10 ">
            Skills
        </div>
        <div className=" flex flex-col md:flex-row gap-4">
          <div className="icon relative flex h-full max-w-[90%] sm:w-full mx-auto items-center justify-center overflow-hidden rounded-lg ">
            <IconCloud iconSlugs={slugs} />
          </div>
          <p className="text-base text-white sm:text-2xl h-full max-w-[90%] m-auto sm:w-full  content-center roboto ">
            <span className="skill-section">Programming languages: </span> Python, Java, C, JavaScript <br/>
            <span className="skill-section">Cloud: </span>  AWS<br/>
            <span className="skill-section">DevOps: </span> Jenkins, Docker, Kubernetes, Ansible, Terraform <br/>
            <span className="skill-section">Version control: </span> Git, GitHub<br/>
            <span className="skill-section">Databases: </span> MySQL, MongoDB <br/>
            <span className="skill-section">Operating systems: </span> Linux, Windows <br/>
          </p>
        </div>
      </div>
      // </BackgroundGradient>
  )
}

export default Skills