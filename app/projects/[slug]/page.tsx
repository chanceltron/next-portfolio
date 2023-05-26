import { notFound } from 'next/navigation';
// import allProjects from '../../../data/projects.json';
import { Mdx } from '@/app/components/mdx';
import { Header } from './header';
import './mdx.css';
import { allProjects } from 'contentlayer/generated';

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

async function getDocFromParams(slug: string) {
  const doc = allProjects.find((doc) => doc.slug === slug);
  if (!doc) {
    notFound();
  }
  return doc;
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);
  const doc = await getDocFromParams(slug);

  if (!project) {
    notFound();
  }

  const views = 0;

  return (
    <div className='bg-zinc-50 min-h-screen'>
      <Header project={project} views={views} />
      {/* <ReportView slug={project.id} /> */}

      <article className='px-4 py-12 mx-auto prose prose-zinc prose-quoteless'>
        <Mdx code={doc.body.code} />
      </article>
    </div>
  );
}
