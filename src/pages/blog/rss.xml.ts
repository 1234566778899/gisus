import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { sortPosts } from '../../lib/blog';

// Feed del blog en /blog/rss.xml.
export async function GET(context: APIContext) {
  const posts = sortPosts(await getCollection('blog'));
  return rss({
    title: 'Blog de Gisi',
    description: 'Ideas para hacer amigos y contactos cerca de ti, consejos para tu primera cita y guías de Gisi.',
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
