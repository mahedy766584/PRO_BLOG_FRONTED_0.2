import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"

import medium from "../../assets/featuresLogos/Medium-Logo.png";
import wordpress from "../../assets/featuresLogos/pngegg (1).png";
import blogger from "../../assets/featuresLogos/pngegg (2).png";
import grammarly from "../../assets/featuresLogos/pngegg (14).png";
import unsplash from "../../assets/featuresLogos/pngegg.png";
import walton from "../../assets/featuresLogos/walton.png";

const reviews = [
  {
    username: "medium",
    img: medium,
  },
  {
    username: "wordpress",
    img: wordpress,
  },
  {
    username: "blogger",
    img: blogger,
  },
  {
    username: "grammarly",
    img: grammarly,
  },
  {
    username: "unsplash",
    img: unsplash,
  },
  {
    username: "walton",
    img: walton,
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  img
}: {
  img: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-52 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl border px-6 py-2",
        // light styles
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        // dark styles
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="flex justify-center flex-row items-center gap-2">
        <img className="rounded-full w-52"src={img} />
      </div>
    </figure>
  )
}

export function FeaturedCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
};
