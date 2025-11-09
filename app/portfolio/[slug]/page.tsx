import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Zap } from "lucide-react";
import { getProjects, getProjectBySlug } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    if (!projects || projects.length === 0) {
      return [];
    }
    return projects.map((project) => ({
      slug: project.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio | Design Consultant Architecture`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getProjects();
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && p.category_id === project.category_id)
    .slice(0, 3);

  const completionDate = new Date(project.completion_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <main>
      <HeroSection
        title={project.title}
        subtitle="Project"
        description={project.description}
        backgroundImage={
         
          "https://images.pexels.com/photos/2731917/pexels-photo-2731917.jpeg"
        }
      />

      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 p-8 bg-gray-50 rounded-lg">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={18} className="mr-2" />
                <span className="text-sm font-semibold uppercase">
                  Location
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {project.location}
              </p>
            </div>
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar size={18} className="mr-2" />
                <span className="text-sm font-semibold uppercase">
                  Completed
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {completionDate}
              </p>
            </div>
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Zap size={18} className="mr-2" />
                <span className="text-sm font-semibold uppercase">
                  Project Size
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {project.project_size}
              </p>
            </div>
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Users size={18} className="mr-2" />
                <span className="text-sm font-semibold uppercase">Client</span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {project.client_name}
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.detailed_description || project.description}
            </p>
          </div>

          {project.challenges_solutions && (
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-lg border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges_solutions.challenges?.map(
                    (challenge: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-600 font-bold mr-3">•</span>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.challenges_solutions.solutions?.map(
                    (solution: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 font-bold mr-3">✓</span>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}

          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-blue-50 p-6 rounded-lg border border-blue-200"
                  >
                    <p className="text-sm text-gray-600 mb-2 capitalize">
                      {key}
                    </p>
                    <p className="text-2xl font-bold text-blue-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.image_urls && project.image_urls.length > 1 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Project Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.image_urls.slice(1).map((imageUrl, idx) => (
                  <img
                    key={idx}
                    src={imageUrl}
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have a Similar Project in Mind?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get in touch with our team to discuss your vision and how we can
            help make it a reality.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link href="/consultation">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
