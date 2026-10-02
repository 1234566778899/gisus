import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { sortPosts } from '../../lib/blog';

// Feed del blog en /blog/rss.xml.
export async function GET(context: APIContext) {
  const posts = sortPosts(await getCollection('blog'));
  return rss({
    title: 'Blog de Gisus',
    description: 'Ideas para conocer gente cerca de ti, consejos para la primera cita y guías de Gisus.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}`,
    })),
    customData: '<language>es</language>',
  });
}
