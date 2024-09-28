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



function Skills2() {
  return (
    <div className="icon relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills2;
