import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/.velite";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  globe: Globe,
} as const;

export function Header() {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-16 print:flex-row">
      <div className="flex-1 space-y-4">
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="max-w-md text-sm text-foreground/80">{profile.summary}</p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            {profile.location}
          </p>
        </div>

        <div className="flex gap-1">
          {profile.social?.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <Button
                key={social.platform}
                variant="outline"
                size="icon"
                asChild
              >
                <Link href={social.url} target="_blank">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.platform}</span>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="shrink-0">
        <div className="h-32 w-32 overflow-hidden rounded-xl">
          {profile.image && (
            <Image
              src={profile.image.src}
              alt={profile.name}
              width={profile.image.width}
              height={profile.image.height}
              blurDataURL={profile.image.blurDataURL}
              className="h-full w-full object-cover"
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
