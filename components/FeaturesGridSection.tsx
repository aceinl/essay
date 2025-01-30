import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function FeaturesGridSection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const features = [
    {
      number: 1,
      title: "Free from Plagiarism",
      description: "Every essay written by UKEssays is extensively checked for plagiarism to ensure that your essay is completely unique!"
    },
    {
      number: 2,
      title: "Free from AI Content",
      description: "Unlike cheaper competitors posting AI written content, we scan every piece of work to ensure it is written by a human!"
    },
    {
      number: 3,
      title: "Delivered on Time",
      description: "We are so confident of our ability to meet deadlines and the timeliness of our writers. If your work is delivered late, it's free!"
    },
    {
      number: 4,
      title: "Confidentiality",
      description: "At UKEssays take confidentiality seriously, and employ automated redaction technology to keep your personal information safe!"
    },
    {
      number: 5,
      title: "Consistent Quality",
      description: "Providing quality work is core to our beliefs, which is why we have stringent quality controls in place to ensure your success!"
    },
    {
      number: 6,
      title: "Guaranteed Final Grade",
      description: "We are so confident in our services that we guarantee your final grade, providing you follow the guidelines in our Fair use Policy."
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
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl font-bold text-secondary mb-4"
              >
                {feature.number}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
