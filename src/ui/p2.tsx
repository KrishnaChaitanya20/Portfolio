import { BentoGrid, BentoGridItem } from "../components/bento-grid";
export function P2() {
  return (
    <BentoGrid className="min-w-[90%] mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent border-white/[0.2] bg-neutral-100 bg-black"></div>
);
const items = [
  {
    title: "Portfolio Website",
    description: "This is my personal portfolio website, developed using React and TypeScript to showcase my skills and projects. I designed the user interface using Aceternity UI and Magic UI, which helped streamline the visual aesthetics and provided a modern, responsive design. This website serves as both a personal brand platform and a demonstration of my web development capabilities.",
    header: <Skeleton />,
    className: "main-bg md:col-span-2",
  },
  {
    title: "Job Scraper on LinkedIn",
    description: "I created a web scraper that extracts job postings from LinkedIn based on user-specified keywords and stores them in a CSV file for easy analysis. The scraper is implemented using Python and leverages libraries such as BeautifulSoup for parsing HTML content, Pandas for handling and organizing the data, and Requests for making HTTP requests. This project improved my skills in data extraction, handling unstructured data, and manipulating it into a usable format.",
    header: <Skeleton />,
    className: "main-bg md:col-span-1",
  },
  {
    title: "Event Management System",
    description: "This full-stack web application allows users to manage events by creating, updating, and deleting event details, as well as enabling user registration. I used React for the frontend, Flask for the backend API, and MongoDB for data storage. Additionally, I automated the build and deployment process by integrating GitHub Actions, which automatically creates and pushes Docker images for both the frontend and backend upon code updates. I also created a Docker Compose file to easily deploy the entire system with a single command, ensuring seamless configuration and deployment.",
    header: <Skeleton />,
    className: "main-bg md:col-span-1",
  },
];
