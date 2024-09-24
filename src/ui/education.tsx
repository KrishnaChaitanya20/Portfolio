import { Timeline } from "../components/timeline";
// import {BackgroundGradient} from "../components/background-gradient"

function Education() {
  const data = [
    {
      title:"Schooling",
      content:(<div>
        <p className="text-2xl">Tejaswi High School</p>
        <p>CGPA: <span className="font-bold">9.8</span></p>
      </div>)
    },
    {
      title:"Intermediate",
      content:(<div>
        <p className="text-2xl" >Narayana Junior COllege</p>
        <p>Percentage: <span className="font-bold">97%</span></p>
      </div>)
    },
    {
      title:"Engineering",
      content:(<div>
        <p className="text-2xl">Kakatiya Institue of Technology and Science</p>
        <p>CGPA: <span className="font-bold">8.5</span></p>
      </div>)
    }
  ];
  return (
    // <BackgroundGradient containerClassName= "education" className="rounded-[22px] p-4 sm:p-10 main-bg absolute inset-1 flex ">
        <Timeline data={data} />
    // </BackgroundGradient>
  );
}

export default Education