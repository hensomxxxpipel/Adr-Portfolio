const experiences = [
  {
    period: "Feb - Jun 2025",
    role: "AI / Machine Learning Engineer Intern",
    company: "PT. Jalin Mayantara Indonesia, Malang",
    description:
      "Worked on sentiment and aspect analysis for the SIMPATIKA application, including data preprocessing, labeling, model training, and developing an AI agent-based chatbot and interactive dashboards for management insights.",
    technologies: ["Python", "Deep Learning", "LLM", "LangChain", "Streamlit", "FastAPI"],
    current: false,
  },
  
  {
    period: "Mar - Dec 2024",
    role: "Member, Quadcopter Division",
    company: "Robotiik FILKOM UB, Malang",
    description:
      "Contributed to quadcopter development through 3D component design, learning drone electronics, and supporting hardware testing and system integration.",
    technologies: ["Fusion 3D", "Drone Electronics"],
    current: false,
  },

  {
    period: "Sep - Dec 2023",
    role: "Public Relations Division Member",
    company: "LKMM-TD FILKOM UB, Malang",
    description:
      "Handled event communications by producing short-form video content and managing social media interactions to improve engagement and event visibility.",
    technologies: ["Content Creation", "Social Media", "Video Editing", "Instagram"],
    current: false,
  },

  {
    period: "Oct - Dec 2021",
    role: "IT Support Intern",
    company: "PT. Pipit Mutiara, Tarakan",
    description:
      "Assisted in network installation and maintenance, software deployment and updates, hardware troubleshooting, and routine system checks to ensure optimal device performance.",
    technologies: ["Computer Networking", "Hardware Troubleshooting", "Software Installation"],
    current: false,
  },

  {
    period: "Aug 2021 - Jul 2022",
    role: "Head of Information and Communications Division",
    company: "Generasi Baru Indonesia (GENBI), Tarakan",
    description:
      "Led a small communications team, managed the organization’s social media, produced digital content, and improved audience engagement through consistent and strategic communication activities.",
    technologies: ["Content Strategy", "Social Media Management", "Photoshop", "Instagram"],
    current: false,
  },
]


export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
           className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Experience that{" "} 
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my growth as a developer and AI engineer, from learning the fundamentals to building real-world projects and gaining professional experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]"/>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end " : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1 bg-surface text-xs  rounded-full text-muted-foreground">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

