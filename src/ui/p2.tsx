import { BentoGrid, BentoGridItem } from "../components/bento-grid";
import { Badges } from "../components/badges";
export function P2() {
  return (
    <div >
       <div className="text-4xl pb-10 px-4 sm:px-10 ">
          Projects
        </div>
      <BentoGrid className="min-w-[90%] mx-auto md:auto-rows-[30rem]">
        {items.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <BentoGridItem
          title={item.title}
          description={
            <>
              <Badges technologies={item.technologies} />
              <br />
              {item.description}
            </>
          }
          header={item.header}
          className={item.className}
          />
        </a>
        ))}
      </BentoGrid>

    </div>
  );
}

const Image = ({ src }: { src?: string }) => (
  <img src={src} className="object-fit object-center flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent border-white/[0.2]" />
);

const items = [
  {
    title: "Event Management System",
    technologies: ["React", "Flask", "MongoDB","Docker","Docker Compose"],
    description: (
      <div>
        A <span className="keyword">full-stack</span> web app to manage events, handle user registration, and automate  <span className="keyword">Docker image</span> creation and pushing to docker hub using <span className="keyword">GitHub Actions</span>.
      </div>
    ),
    src: "/assets/et-cover.png",
    className: "main-bg md:col-span-1",
    url: "https://github.com/KrishnaChaitanya20/Event_Ticketing"
  },
  {
    title: "Docker Homelab",
    technologies: ["Docker", "Cloudflare", "Traefik", "Pi-hole", "Portainer"],
    description: <div>A <span className="keyword">self-hosted homelab</span> using Docker Compose to deploy modular services like <span className="keyword">Traefik</span>, <span className="keyword">Pi-hole</span>, and <span className="keyword">Portainer</span> with secure remote access via <span className="keyword">Cloudflare Tunnel</span>.</div>,
    src: "/assets/docker-homelab.png",
    className: "main-bg md:col-span-2",
    url: "https://github.com/KrishnaChaitanya20/Docker_Homelab"
  },
  {
    title: "Job Scraper on LinkedIn",
    technologies: ["Python", "Requests", "BeautifulSoup","Pandas"],
    description: <div>A <span className="keyword">Python</span> scraper that extracts job postings from LinkedIn using <span className="keyword">Requests</span> and <span className="keyword">BeautifulSoup</span>, storing structured data in <span className="keyword">CSV</span> files for analysis.</div>,
    src: "/assets/scrapper-cover.png",
    className: "main-bg md:col-span-2",
    url: "https://github.com/KrishnaChaitanya20/Linkedin_JobScrapper"
  },
  // {
  //   title: "DonorConnect",
  //   technologies: ["React", "Flask", "MySQL"],
  //   description: <div>A web platform connecting companies that donate tech hardware with schools in need, built with <span className="keyword">React</span>, <span className="keyword">Flask</span>, and <span className="keyword">MySQL</span> for efficient donation management.</div>,
  //   src: "/assets/donorconnect-cover.jpg",
  //   className: "main-bg md:col-span-1",
  //   url: "https://github.com/KrishnaChaitanya20/DonorConnect"
  // },
].map(card => ({
  ...card,
  header: <Image src={card.src} />
}));
