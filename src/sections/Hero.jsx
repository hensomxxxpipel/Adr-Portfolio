import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const skills = [
  "Python",
  "Java",
  "Kotlin",
  "JavaScript",
  "PHP",

  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "NLP",
  "TensorFlow",
  "Hugging Face",
  "LangChain",
  "Ollama",

  "FastAPI",
  "Docker",
  "Git",
  "Github Action",
  "Apache Airflow",

  "MySQL",
  "ClickHouse",
  "Firebase",
  "Chroma",

  "Laravel",
  "Tailwind CSS",
  "Streamlit",
  "Jetpack Compose",

  "Ms Word",
  "Ms Excel",
  "Ms PowerPoint",
  "Adobe Photoshop",
  "Canva",
  "Figma"
];


export const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Bg */}
    <div className="absolute inset-0">
      <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
    </div>
    {/* Green Dots */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div 
          className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
          style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${
              15 + Math.random() * 20
            }s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />AI/ML Engineer • Front-End Developer
            </span>
          </div>
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md-text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building <span className="text-primary glow-text">Intelligence</span>
              <br />
              & <span className="text-primary glow-text">Experience</span> with
              <br />
              <span className="font-serif italic font-normal text-white"> Precision</span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200"
            >
              Hi, I'm Rachmat Adriansyah - a junior engineer focused on AI/ML Engineering. Beyond building intelligent models, I develop responsive Front-End interfaces and implement Automation and Containerization to ensure scalable, production-ready solutions."
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton>
              <Download className="w-5 h-5"/>
              Download CV
            </AnimatedBorderButton>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {[
              { icon: FaGithub, href: "https://github.com/hensomxxxpipel"},
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/rachmat-adriansyah-909464217/"},
              { icon: SiInstagram, href: "https://www.instagram.com/halo_bangg_/" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="w-5 h-5"/>}
              </a>
            ))}
          </div>
        </div>
        {/* Right Column - Profile Image */}
        <div className="relative animate-fade-in animation-delay-300">
          {/* Profile Image */}
          <div className="relative max-w-md mx-auto">
            <div
              className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" 
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img src="/profile-photo.png" alt="Rachmat Adriansyah" className="w-full aspect-4/5 object-cover rounded-2xl" />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
              {/* Stats Badge Kalo Sudah Jago
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-xs text-muted-foreground">
                  Years Exp.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20 animate-fade-in animation-delay-600">
        <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
      <a 
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce"/>
      </a>
    </div>
  </section>
}
