import { motion } from "framer-motion"
import { ProjectCard } from "../ProjectCard";
import { Slider } from "../Slider";
import { projects } from "../../data/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
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
              autoScrollInterval={4000}
              itemClassName="w-full"
              className="px-4"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full">
                  <ProjectCard {...project} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="hidden lg:block">
            {/* Desktop: Manual navigation slider */}
            <Slider
              showNavigation={true}
              itemClassName="w-80"
              className="px-12"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-80">
                  <ProjectCard {...project} />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}