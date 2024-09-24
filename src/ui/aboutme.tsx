import {BackgroundGradient} from "../components/background-gradient"
const AboutMe = () => {
  return (
        <BackgroundGradient containerClassName= "aboutme" className="rounded-[22px] p-4 sm:p-10 main-bg absolute inset-1 flex ">
        <p className="text-base lg:text-2xl  content-center roboto ">
          <div className="text-4xl mx-auto pb-20 px-4 ">
            About Me
          </div>
          I'm currently in my final year and actively seeking opportunities that align with my skills in Cloud and DevOps. Throughout my academic journey, I have gained hands-on experience with tools like Jenkins, Docker, Kubernetes, and Ansible, as well as cloud platforms such as AWS. I have worked on projects that showcase my abilities in both development and automation. I'm a proactive learner, a team player, and always open to new challenges. I'm excited to bring my problem-solving skills and enthusiasm for technology to a professional environment where I can continue to grow and contribute.
        </p>
       </BackgroundGradient>
  );
}

export default AboutMe;
