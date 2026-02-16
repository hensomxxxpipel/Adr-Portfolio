import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: 
      "Writing clean and structured code that is easy to maintain and scale.",

  },
  {
    icon: Rocket,
    title: "Performace",
    description: 
      "Building efficient and optimized applications for real-world usage.",

  },
  {
    icon: Users,
    title: "Collaboration",
    description: 
      "Working effectively in teams through clear communication and responsibility.",

  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: 
      "Applying AI and modern technology to build impactful digital solutions.",

  },

]

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About me</span>
            </div>

            <h2 className="text-4xl md-text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building intelligent,
              <span  className="font-serif italic font-normal text-white">
                {" "}
                from data to real impact.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am Rachmat Adriansyah, a graduate of Informatics Engineering from Universitas Brawijaya with a strong focus on Artificial Intelligence and Computational Intelligence. My main interests lie in Machine Learning, Deep Learning, and Data Science, with hands-on experience in Large Language Models and Retrieval-Augmented Generation (RAG). I enjoy transforming data and models into intelligent systems that deliver real and measurable value.
              </p>
              <p>
                In addition to AI development, I have experience building web and mobile applications and integrating intelligent features into real products. I am comfortable working across the full development workflow-from data preparation and model experimentation to backend services and interactive user interfaces. I prioritize clean implementation, practical system design, and solutions that are reliable in real-world environments.
              </p>
              <p>
                I am a fast learner, highly adaptable to new technologies, and motivated to grow in a professional and collaborative setting. I enjoy working with diverse teams, sharing ideas, and contributing responsibly to achieve common goals. My objective is to continuously develop as an AI and software engineer while delivering impactful digital solutions.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to build intelligent and reliable digital solutions by combining AI, data, and modern software engineering to create practical systems that deliver real-world impact.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights*/}
          <div className="grid sm-grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}