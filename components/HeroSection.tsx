import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage = "https://images.adsttc.com/media/images/5dcc/24bf/3312/fd91/0600/0011/newsletter/Slover-Library-1024x822.jpg?1573659833=",
  backgroundVideo,
  cta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-blue-300 text-lg font-semibold mb-2 tracking-widest uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight  tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {cta && (
              <Button
                asChild
                size="lg"
                variant={"outline"}
                className="  text-white border-white hover:bg-white/10"
              >
                <Link href={cta.href}>{cta.text}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="  text-white border-white hover:bg-white/10"
              >
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
