import { SparklesCore } from "../components/sparkles";

export function Welcome() {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          particleDensity={100}
          className="w-full h-full"
          particleColor="#475569"
        />
      </div>
      <div className="text">
        <p className="text-base md:text-2xl lg:text-2xl text-white new-font">
          Heyy there!!!! <br/> Welcome to my space in this Web, I am&nbsp;
        </p>
        <p className="tangerine text-6xl md:text-8xl mt-6 ">Krishna Chaitanya</p>
        <p className="text-base md:text-2xl lg:text-2xl text-white new-font">
          Aspiring <span className="text-teal-500">Software/Cloud Engineer</span>&nbsp;
        </p>
      </div>
      
    </div>
  );
}


export default Welcome;
