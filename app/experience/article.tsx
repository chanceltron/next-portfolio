import Link from "next/link";
import { Eye, View } from "lucide-react";
import { History } from "contentlayer/generated";

type Props = {
  job: History;
  views: number;
};

export const Article: React.FC<Props> = ({ job, views }) => {
  return (
    <Link href={`/experience/${job.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <div>
            <span className="text-md duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
              {job.company}
            </span>
          </div>
          {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
            <Eye className="w-4 h-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span> */}
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {job.title}
        </h2>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {job.description}
        </p>
      </article>
    </Link>
  );
};
