import { ArrowUpRight } from "lucide-react"
import { GrGithub } from "react-icons/gr"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const projects = [
  {
    title: "RA-Bot",
    description:
      "RA-Bot is an interactive chatbot powered by multiple Large Language Models (LLMs) to assist users across various topics and conversations. It features a simple and intuitive interface and provides multiple tabs optimized for different chatbot models, allowing users to easily switch models and compare responses.",
    image: "/projects/ra-bot.png",
    tags: ["Python", "LLM", "Langchain", "Firebase", "Streamlit"],
    link: "https://ra-bot-ver-1-1.streamlit.app/",
    github: "https://github.com/hensomxxxpipel/RA-BOT"
  },

  {
    title: "SIMPATIKA Agent",
    description:
      "SIMPATIKA Agent is a sentiment and aspect analysis application designed to analyze user feedback and provide insights. The application uses deep learning models to predict sentiment and aspects from user comments and provides a summarized narrative of the feedback.",
    image: "/projects/simpatika-agent.png",
    tags: ["Python", "CNN Model", "LLM(Gemini)", "Langchain", "Clickhouse", "Streamlit", "Tensorflow", "Fastapi", "Apache-Airflow", "Docker"],
    link: "#",
    github: "Non-Disclosure Agreement"
  },

  {
    title: "My Portfolio",
    description:
      "My Portfolio Profile",
    image: "/projects/adr-portfolio.png",
    tags: ["Javascript", "React", "Tailwind", "Vercel"],
    link: "#",
    github: "https://github.com/hensomxxxpipel/Adr-Portfolio"
  },
  
  {
    title: "Nike Store",
    description:
      "A responsive Nike store landing page built as a learning project to practice React and Tailwind CSS, focusing on modern UI layout, component-based structure, and clean styling for an e-commerce interface.",
    image: "/projects/nike-store.png",
    tags: ["Javascript", "React", "Tailwind", "Vercel"],
    link: "https://nike-web-adr.vercel.app/",
    github: "https://github.com/hensomxxxpipel/NikeWeb"
  },

  {
    title: "NextStep App",
    description:
      "NextStep App is a simple task and reminder application for managing and organizing daily activities efficiently, using Firebase as the backend database.",
    image: "/projects/nextstep-app.png",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    link: "#",
    github: "https://github.com/hensomxxxpipel/NextStepApp"
  },

  {
    title: "Travelupa App",
    description:
      "Travelupa is a travel destination recommendation application that helps users discover the best places based on their interests and location, using Firebase as the database.",
    image: "/projects/travelupa-app.png",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    link: "https://github.com/hensomxxxpipel/Travelupa",
    github: "https://github.com/hensomxxxpipel/Travelupa"
  },

  {
    title: "UI/UX Benih  App",
    description:
      "Benih is an AI-based investment application concept focused on delivering intelligent and user-friendly financial experiences.",
    image: "/projects/benih-app..",
    image: "/projects/benih-app.png",
    tags: ["Figma"],
    link: "https://www.figma.com/design/AYxmTwsfIKtDUVGMYyloFy/FILKOM-SE-2024---TIM-El-Dear-God---BENIH?node-id=25-1463&t=FZwsvF23rniezZUt-1",
    github: "https://www.figma.com/design/AYxmTwsfIKtDUVGMYyloFy/FILKOM-SE-2024---TIM-El-Dear-God---BENIH?node-id=25-1463&t=FZwsvF23rniezZUt-1"
  },

  {
    title: "Kaggle Spaceship Titanic",
    description:
      "This project uses machine learning to predict which passengers were transported to an alternative dimension due to a spacetime anomaly. It demonstrates the application of machine learning in a science-fiction scenario and achieved an accuracy of 0.80196.",
    image: "/projects/spaceship-titanic.png",
    tags: ["Python", "Google Colab", "Scikit Learn"],
    link: "https://colab.research.google.com/drive/1zYOgdd2GSflBzPT98oPim3M-2aStH3tJ#scrollTo=VZ-vLXN4OJ6y",
    github: "https://colab.research.google.com/drive/1zYOgdd2GSflBzPT98oPim3M-2aStH3tJ#scrollTo=VZ-vLXN4OJ6y"
  },

  {
    title: "Pothole Detection",
    description:
      "A road condition classification project that manually implements a Multi-Layer Perceptron (MLP) model to classify road images into three categories: pothole, cracked, and normal. The project covers image processing, neural network design, and model training, achieving a best accuracy of 0.86.",
    image: "/projects/cross-condition.png",
    tags: ["Python", "Google Colab", "Scikit Learn", "MLP"],
    link: "https://colab.research.google.com/drive/16bDHXUd8QPR1tb66PcSkW3wzGRjXv3mC",
    github: "https://colab.research.google.com/drive/16bDHXUd8QPR1tb66PcSkW3wzGRjXv3mC"
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> 
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent projects, showcasing my experience in AI, machine learning, LLM-based systems, and modern web and mobile application development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project,idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"

                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"  
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight />
                  </a>
                  <a 
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GrGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
          View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}