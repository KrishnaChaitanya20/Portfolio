import {BackgroundGradient} from "../components/background-gradient"
import {TextGenerateEffect} from "../components/text-generate";


const words = `I'm currently in my final year and actively seeking opportunities that align with my skills in Cloud and DevOps. Throughout my academic journey, I have worked on projects that showcase my abilities in both development and automation. I'm a proactive learner, a team player, and always open to new challenges. I'm excited to bring my problem-solving skills and enthusiasm for technology to a professional environment where I can continue to grow and contribute.`;
const AboutMe = () => {

  return (
        <BackgroundGradient containerClassName= "aboutme" className="rounded-[22px] p-4 sm:p-10 main-bg absolute inset-1 flex ">
        <p className="text-base lg:text-2xl  content-center roboto ">
          <div className="text-4xl mx-auto pb-5 sm:pb-20 sm:px-4 ">
            About Me
          </div>
          <TextGenerateEffect words={words} className="text-xl md:text-3xl gowun-batang"  duration={1}/>
        </p>
       </BackgroundGradient>
  );
}

export default AboutMe;
