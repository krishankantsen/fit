'use client'
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { CATEGORIES, SERVICES, TESTIMONIALS, AWARDS } from "@/lib/constants";
import { getProjects, getBlogPosts } from "@/lib/supabase";
import { motion } from "framer-motion";
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default async function Home() {
  const projects = await getProjects();
  const blogPosts = await getBlogPosts();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <main>
      <HeroSection
        title="Transforming Visions into Built Reality"
        subtitle="Welcome to Design Consultant"
        description="Award-winning architecture and engineering firm specializing in sustainable design, innovative solutions, and transformative projects across the globe."
        backgroundVideo="https://www.pexels.com/download/video/4611984/"
        cta={{ text: "Start Your Project", href: "/consultation" }}
        secondaryCta={{ text: "View Our Work", href: "/portfolio" }}
      />

      {/* Expertise Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring together multidisciplinary teams to deliver exceptional
              results across diverse project categories.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CATEGORIES.slice(0, 6).map((category, i) => (
              <motion.div key={category.id} variants={fadeUp(i * 0.1)}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp(0.4)} className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/categories">View All Categories</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive professional services to bring your projects to life.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.slice(0, 6).map((service, i) => (
              <motion.div key={service.id} variants={fadeUp(i * 0.1)}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp(0.4)} className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp(0)} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Showcasing our most significant recent work across diverse
                sectors.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project, i) => (
                <motion.div key={project.id} variants={fadeUp(i * 0.1)}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.4)} className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">Explore All Projects</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "300", label: "Completed Projects" },
            { number: "25", label: "Years of Experience" },
            { number: "80", label: "Team Members" },
            { number: "15", label: "International Awards" },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp(i * 0.1)}>
              <StatCard number={stat.number} label={stat.label} suffix="+" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp(idx * 0.1)}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium mt-1">
                    {testimonial.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeUp(0)}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can bring your vision
            to life.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/consultation">Schedule a Consultation</Link>
          </Button>
        </motion.div>
      </motion.section>
    </main>
  );
}
