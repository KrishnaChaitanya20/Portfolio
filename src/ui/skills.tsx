import {BackgroundGradient} from "../components/background-gradient"
const Skills = ({className}:{className?:String}) => {
  return (
      <BackgroundGradient containerClassName= "skills" className="rounded-[22px] p-4 sm:p-10 main-bg absolute inset-1 flex ">
        <p className="text-base sm:text-2xl  content-center roboto ">
          <div className="text-4xl mx-auto pb-20 px-4 ">
            Skills
          </div>
          Programming languages: Python, Java, C, Shell scripting <br/>
          Cloud: AWS <br/>
          DevOps: Jenkins, Docker, Kubernetes, Ansible, Terraform <br/>
          Version control: Git <br/>
          Databases: MySQL, MongoDB <br/>
          Operating systems: Linux, Windows <br/>
        </p>
      </BackgroundGradient>
  )
}

export default Skills