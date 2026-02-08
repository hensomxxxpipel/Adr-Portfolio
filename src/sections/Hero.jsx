import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight } from "lucide-react";


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
          <div className="flex flex-wrap gap-4 animated-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton />
          </div>

          {/* Social links */}
          <div>
            <span>Follow: </span>
            {[{icon: Github, href: ""}]}
          </div>
        </div>
        {/* Right Column - Profile Image */}
      </div>
    </div>
  </section>
}
