import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { allHistories } from "contentlayer/generated";
import { Eye } from "lucide-react";
import { Article } from "./article";

const ProjectsPage = async () => {
  const education = allHistories.filter((exp) => exp.slug === "devslopes");
  const sorted = allHistories
    .filter((exp) => exp.published && exp.slug !== "devslopes")
    .sort(
      (a, b) =>
        new Date(b.startDate ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.startDate ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      {/* Education */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-zinc-400">
            {" "}
            My professional journey shaped by expertise, achievements, and a
            passion for learning.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
          <div className="grid col-span-2 gap-4">
            {education.map((school) => (
              <div key={school.id} className="flex gap-4 justify-center">
                <div className="flex flex-1 justify-end px-3 py-1">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {school.startDate && (
                      <time dateTime={new Date(school.startDate).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(school.startDate))}
                      </time>
                    )}
                  </span>
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {" - "}
                  </span>
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {school.endDate ? (
                      <time dateTime={new Date(school.endDate).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(school.endDate))}
                      </time>
                    ) : (
                      <span>Present</span>
                    )}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-2 rounded-full border border-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                  </div>
                  <div className="mt-2 w-0.5 bg-zinc-600 h-full" />
                </div>
                <div className="w-2/3">
                  <Card>
                    <Article job={school} views={0} />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work History */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Work History
          </h2>
          <p className="mt-4 text-zinc-400">
            {" "}
            My professional journey shaped by expertise, achievements, and a
            passion for learning.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
          <div className="grid col-span-2 gap-4">
            {sorted.map((job) => (
              <div key={job.id} className="flex gap-4 justify-center">
                <div className="flex flex-1 justify-end py-1">
                  <span className="text-md duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {job.startDate && (
                      <time dateTime={new Date(job.startDate).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(job.startDate))}
                      </time>
                    )}
                  </span>
                  <span className="text-md duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {" - "}
                  </span>
                  <span className="text-md duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    {job.endDate ? (
                      <time dateTime={new Date(job.endDate).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(job.endDate))}
                      </time>
                    ) : (
                      <span>Present</span>
                    )}
                  </span>
                </div>
                <div className="my-1 flex flex-col items-center">
                  <div className="p-2 rounded-full border border-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                  </div>
                  <div className="mt-2 w-0.5 bg-zinc-600 h-full" />
                </div>
                <div className="w-2/3">
                  <Card>
                    <Article job={job} views={0} />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
