import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Faisal is an outstanding full-stack developer! He not only met our expectations but exceeded them with innovative solutions. I would highly recommend him to anyone looking for a reliable and skilled developer.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Working with Faisal was an absolute pleasure. He brought our vision to life with impeccable execution and professionalism. His technical skills are top-notch, and his communication throughout the project kept us on track.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Faisal is one of the best developers I’ve ever worked with. His expertise in both front-end and back-end development made a huge difference for our project.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Fantastic experience working with Faisal. He understood our needs perfectly and executed flawlessly.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Faisal's expertise as a full-stack developer is exceptional. He took our project from concept to completion with ease. Working with him was a smooth and efficient experience.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "We worked with Faisal on a complex web application, and he was fantastic throughout the entire process. The final product was not only delivered on time but was polished and fully functional across all platforms.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative max-md:bg-white w-60 h-60 md:w-96 md:h-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex text-center flex-col items-center gap-2">
        <img className="rounded-full" width="60" height="60" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm text-center font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-md">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex md:h-[70vh] md:w-[70vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
