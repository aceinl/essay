import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Users, Heart, MessageCircle, Clock } from 'lucide-react'

export function BetterThanCompetitionSection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const features = [
    {
      icon: Users,
      title: "World Class Writers",
      description: "Unlike other essay writing companies, we don't just use any writers – we use the best of the best. Every writer is not only directly qualified in the subject they write for, but has been through and understands the challenges and difficulties of Higher Education. Every writer is hand selected by our team to produce the best piece of work possible."
    },
    {
      icon: Heart,
      title: "Verified Customer Reviews",
      description: "UKEssays have substantial press coverage from all over the world confirming that we deliver what we promise, and our customers regularly leave reviews describing their experience. Our collaboration with Reviews.io means that unlike Trustpilot or TripAdvisor, only genuine and verified customers can leave reviews."
    },
    {
      icon: MessageCircle,
      title: "Outstanding Customer Support",
      description: "At UKEssays, every part of your experience is special. From start to finish, we provide continuous support with our friendly and helpful customer experience team. We'll not only help you with placing your order, but help you get the most out of your investment – making you a better learner and a stronger academic."
    },
    {
      icon: Clock,
      title: "20 Years in Business",
      description: "Ever since we started trading in 2003, we've led the industry, setting trends and smashing expectations. We were the first company in the world to offer you guaranteed 2:1 and 1st class work, and have extensive experience supporting local students and international students enrolled at university overseas."
    }
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What makes UKEssays <span className="text-secondary">better than the competition</span>
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center"
                >
                  <feature.icon className="w-6 h-6 text-secondary" />
                </motion.span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Read about our services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
