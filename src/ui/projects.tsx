import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { BentoGrid, BentoGridItem } from "../components/bento-grid";


// import portfolioCover from "../assests/portfolio-cover.png";

export function Projects() {

  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
 
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  useOutsideClick(ref, () => setActive(null));
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10"
          />
        )}
      </AnimatePresence>


      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="bg-[#010101] w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-[30vh] lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-fit object-center"
                />
              </motion.div> 
              <div>
                <div className=" flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-xl text-[#b2a988] dark:text-neutral-200 mb-4"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="description text-[#f8fafc] sm:max-h-40 overflow-y-scroll "
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="min-w-[90%]">
        <div className="text-4xl pb-20 px-4 sm:px-10 ">
          Projects
        </div>
        <BentoGrid className="min-w-[90%] mx-auto md:auto-rows-[20rem]">
        {cards.map((card, i) => (
          <BentoGridItem
            key={i}
            title= <div className="text-xl text-[#b2a988]">{card.title}</div>
            // description={item.description}
            header={card.header}
            className={card.className}
            onCLickFun={() => {setActive(card)}}
          />
        ))}
      </BentoGrid>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const Image = ({ src }: { src?: string }) => (
  <img src={src} className="object-fit object-center flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent border-white/[0.2]" />
);
const cards = [
  {
    title: "Event Management System",
    description: <div>This <span className="keyword">full-stack</span> web application allows users to manage events by creating, updating, and deleting event details, as well as enabling user registration. I used <span className="keyword">React</span> for the frontend, <span className="keyword">Flask</span> for the backend API, and <span className="keyword">MongoDB</span> for data storage. Additionally, I automated the build and deployment process by integrating <span className="keyword">GitHub Actions</span>, which automatically creates and pushes <span className="keyword">Docker images</span> both the frontend and backend upon code updates. I also created a <span className="keyword">Docker Compose</span> file to easily deploy the entire system with a single command, ensuring seamless configuration and deployment.</div>,
    src: "/assets/et-cover.png",
    className: "main-bg md:col-span-1",
  },
  {
    title: "Job Scraper on LinkedIn",
    description: <div>This is a web scraper that extracts job postings from LinkedIn based on user-specified keywords and stores them in a CSV file for easy analysis. The scraper is implemented using <span className="keyword">Python</span> and leverages libraries such as <span className="keyword">BeautifulSoup</span> for parsing HTML content, <span className="keyword">Pandas</span> for handling and organizing the data, and <span className="keyword">Requests</span> for making HTTP requests. This project improved my skills in data extraction, handling unstructured data, and manipulating it into a usable format.</div>,
    src: "/assets/scrapper-cover.png",
    className: "main-bg md:col-span-1",
  },
  {
    title: "Portfolio Website",
    description: <div>This is my personal portfolio website, developed using <span className="keyword">React</span> and <span className="keyword">TypeScript</span> to showcase my skills and projects. I designed the user interface using <span className="keyword">Aceternity UI</span> and <span className="keyword">Magic UI</span>, which helped streamline the visual aesthetics and provided a modern, responsive design. This website serves as both a personal brand platform and a demonstration of my web development capabilities.</div>,
    src: "/assets/portfolio-cover.png",
    className: "main-bg md:col-span-1",
  },
].map(card => ({
  ...card,
  header: <Image src={card.src} />
}));
