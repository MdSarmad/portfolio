import { motion } from "framer-motion"
import { SkillCard } from "../SkillCard";
import { Slider } from "../Slider";
import { skills } from "../../data/portfolio-data";

export function SkillsSection() {
  const skillsArray = Object.values(skills);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="lg:hidden">
            {/* Mobile/Tablet: Auto-scrolling slider */}
            <Slider
              autoScroll={true}
              autoScrollInterval={3000}
              itemClassName="w-full"
              className="px-4"
            >
              {skillsArray.map((skill, index) => (
                <div key={index} className="w-full">
                  <SkillCard {...skill} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:block">
            {/* Desktop: Manual navigation slider */}
            <div className="grid grid-cols-4 gap-6">
              {skillsArray.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}