import WavyBackground from "../components/wavy-bg"
import { Cover } from "../components/cover"

const Welcome = () => {
  return (
    <>
     <WavyBackground containerClassName="wavy-bg" className="max-w-4xl mx-auto pb-20">
     {/* <div className="welcome">
      <div className="hero-text"> */}
          <p className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Heyy there!!!!
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Welcome to my space in this Web, I am&nbsp;
            <Cover className="text-2xl">Krishna Chaitanya</Cover>
          </p>
        {/* </div>
      </div> */}
     </WavyBackground>
    </>
  )
}

export default Welcome