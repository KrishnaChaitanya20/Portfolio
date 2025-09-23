// import {BackgroundGradient} from "../components/background-gradient"
// import {TextGenerateEffect} from "../components/text-generate";


const AboutMe = () => {

  return (
        <div className= "aboutme rounded-[22px] p-4 sm:p-10 main-bg inset-1 flex ">
          <div className="text-base lg:text-2xl content-center roboto">
            <div className="text-4xl mx-auto sm:pb-10 sm:px-4">
              About Me
            </div>
            <div
              className="aboutme-content text-xl md:text-2xl geist-mono"
              style={{ textAlign: "justify" }}
            >
              I'm Krishna Chaitanya Devunoori, a proactive Cloud and DevOps engineer passionate about building scalable and automated systems. From infrastructure to deployment. My expertise spans Docker, Kubernetes, Terraform, and AWS, and I'm always eager to explore new tools and technologies.
              <br /><br/>
              When I'm not immersed in work, I enjoy experimenting with automation, optimizing workflows, and staying curious about emerging trends in cloud and DevOps.
            </div>
          </div>
       </div>
  );
}

export default AboutMe;
