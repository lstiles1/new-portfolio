import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import Image from 'next/image'
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"

const portfolioProjects = [
  {
    company: "Teenie Geenie",
    title: "3D T-Shirt Customizer",
    results: [
      { title: "Integrated prompting for AI-generated designs" },
      { title: "Enabled file upload and color changer" },
    ],
    link: "https://teenie-geenie.vercel.app",
    image: darkSaasLandingPage,
  },
  {
    company: "Stocked",
    title: "Inventory Management Dashboard",
    results: [
      { title: "Improved sales summary visualization" },
      { title: "Streamlined admin management" },
      { title: "Simplified inventory tracking" },
    ],
    link: "https://main.d1s8h38tag6x10.amplifyapp.com",
    image: lightSaasLandingPage,
  },
  {
    company: "Imaginify",
    title: "AI SaaS Photo Editor",
    results: [
      { title: "Provided advanced AI photo editing tools" },
      { title: "Incorporated Stripe for image credit payments" },
      { title: "Demo Username: demo" },
      { title: "Demo Password: Demopassword123!" },
    ],
    link: "https://imaginify-photo.vercel.app",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
    <div>
      <div className="container">
      <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="" />
        <div className="flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card 
            key={project.title} 
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}
            >

                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-all duration-300 ease-in-out transform hover:bg-white/70 hover:text-gray-900 hover:shadow-lg hover:scale-105">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 rounded-lg" />
                </div>

            </Card>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};