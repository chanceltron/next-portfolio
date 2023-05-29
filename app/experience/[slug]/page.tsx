import { notFound } from 'next/navigation';
import { Mdx } from '@/app/components/mdx';
import { Header } from './header';
import './mdx.css';
import { allHistories } from 'contentlayer/generated';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allHistories
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}


export default async function PostPage({ params }: Props) {
  const slug = params.slug;
  const job = allHistories.find((job) => job.slug === slug);

  if (!job) {
    notFound();
  }

  const views = 0;

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <Header job={job} views={views} />
      {/* <ReportView slug={project.id} /> */}

      <article className='px-4 py-12 mx-auto prose prose-zinc prose-quoteless'>
        <Mdx code={job.body.code} />
      </article>
    </div>
  );
}
