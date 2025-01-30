import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function ExampleEssaysSection() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const subjectAreas = [
    "Biology", "Business", "Chemistry", "Economics",
    "Education", "English Language", "English Literature", "Environmental Science",
    "Finance", "Health & Social Care", "Information Technology", "Law",
    "Management", "Marketing", "Nursing", "Psychology"
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
          className="text-3xl font-bold text-center mb-4"
        >
          Example Essays
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-muted-foreground mb-12"
        >
          We have over 100,000 free essays available to help you with your studies!
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-muted-foreground mb-8"
        >
          Each of these essays was written by a student who submitted their work to our database to help other students working on similar assignments. Some of our most popular subject areas are linked below:
        </motion.p>

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl font-bold text-center mb-6"
        >
          Popular Subject Areas
        </motion.h3>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
        >
          {subjectAreas.map((subject, index) => (
            <motion.div
              key={subject}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Link href={`/${subject.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-secondary hover:underline">
                {subject}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex justify-center gap-4"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">All Essays</Button>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
            <Button variant="outline">Latest Article Updates</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
