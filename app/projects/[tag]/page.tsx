import { notFound } from 'next/navigation';
import allProjects from '../../../data/projects.json';
import { Mdx } from '@/app/components/mdx';
import { Header } from './header';
import './mdx.css';

export const revalidate = 60;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      tag: p.tag,
    }));
}

export default async function PostPage({ params }: Props) {
  const tag = params?.tag;
  const project = allProjects.find((project) => project.tag === tag);

  if (!project) {
    notFound();
  }

  const views = 0;

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <Header project={project} views={views} />
      {/* <ReportView slug={project.id} /> */}

      <article className='px-4 py-12 mx-auto prose prose-zinc prose-quoteless'>
        {/* <Mdx code={project.body.code} /> */}
      </article>
    </div>
  );
}
