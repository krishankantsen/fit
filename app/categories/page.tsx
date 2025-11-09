import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Project Categories | Design Consultant Architecture",
  description:
    "Explore our expertise across 12 project categories including residential, commercial, education, healthcare, and more.",
};

export default function CategoriesPage() {
  return (
    <main>
      <HeroSection
        title="Project Categories"
        subtitle="Our Expertise"
        description="Explore our capabilities across diverse project types and sectors"
        backgroundImage="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
