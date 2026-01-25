import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DEFAULT_IMAGE = "/palms.svg";

export function AppCard({ title, description, image, href, badge, featured }) {
  const CardWrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const imageSrc = image || DEFAULT_IMAGE;

  return (
    <CardWrapper
      {...wrapperProps}
      className={`block ${featured ? "md:col-span-2" : ""}`}
    >
      <Card className="h-full transition-shadow hover:shadow-md hover:shadow-[oklch(0.85_0.02_85)]/60">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-canvas flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={title}
                width={image ? 48 : 28}
                height={image ? 48 : 28}
                className={image ? "object-cover w-full h-full" : "opacity-50"}
              />
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-lg">{title}</CardTitle>
              {badge && (
                <Badge variant="secondary" className="w-fit">
                  {badge}
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-ink-muted">{description}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
