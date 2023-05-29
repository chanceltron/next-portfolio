import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  path: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: './projects/**/*.mdx',
  contentType: 'mdx',

  fields: {
    id: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    website: {
      type: 'string',
    },
    repository: {
      type: 'string',
    },
    date: {
      type: 'date',
    },
    published: {
      type: 'boolean',
      required: true,
    },
  },
  computedFields,
}));

export const History = defineDocumentType(() => ({
  name: 'History',
  filePathPattern: './work-history/**/*.mdx',
  contentType: 'mdx',
  fields: {
    id: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    company: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    startDate: {
      type: 'date',
      required: true,
    },
    endDate: {
      type: 'date',
    },
    published: {
      type: 'boolean',
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [History, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
