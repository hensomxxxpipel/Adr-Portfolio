import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "r4drsyh24@gmail.com",
    href: "mailto:r4drsyh24@gmail.com"
  },

  {
    icon: LiaLinkedinIn,
    label: "LinkedIn",
    value: "Rachmat Adriansyah",
    href: "https://www.linkedin.com/in/rachmat-adriansyah-909464217/"
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Tarakan, Indonesia",
    href: "https://maps.app.goo.gl/hSMCSbkH7ZDEm14M9"
  },  
]

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isLoading, setIsloading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'berhasil' or 'error'
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsloading(true)
    setSubmitStatus({type: null, message: ""})
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please chech your environment variable."
        );
        
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon",
      })

      setFormData({ name: "", email: "", message: "" })

    } catch (err) {
      console.error("EmailJS error:", err)
      setSubmitStatus({
        type: "error",
        message:
          err.text || "Failed to send message. Pleas try again later."
      })
    } finally {
      setIsloading(false)
    }
  }


  
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build
            <span className="font-serif italic font-normal text-white"> 
              {" "}
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  autoComplete="off"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  
                />
              </div>
        
              <div> 
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  autoComplete="off"
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5"/>
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-gray-500/20"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0"/>
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0"/>
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a 
                    href={item.href}
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p>
                I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}