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
          <p className="text-base md:text-2xl lg:text-2xl text-white new-font">
            Heyy there!!!! <br/> Welcome to my space in this Web, I am&nbsp;
          </p>
          {/* <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"> */}
            
            <p className="tangerine text-6xl md:text-8xl mt-5 ">Krishna Chaitanya</p>
          {/* </p> */}
      
    </div>
  );
}


export default Welcome;
