import type { CollectionEntry } from 'astro:content';
import waving from '../assets/mascot/waving.png';
import scanning from '../assets/mascot/scanning.png';
import inLove from '../assets/mascot/inLove.png';
import inviting from '../assets/mascot/inviting.png';
import celebrating from '../assets/mascot/celebrating.png';
import sleeping from '../assets/mascot/sleeping.png';
import waiting from '../assets/mascot/waiting.png';

export type Post = CollectionEntry<'blog'>;

/** Poses de Gisi que puede usar un artículo (campo `mascot`). */
export const mascots = { waving, scanning, inLove, inviting, celebrating, sleeping, waiting };

/** Más recientes primero. */
export function sortPosts(posts: Post[]): Post[] {
  // Con la misma fecha, orden alfabético para que el resultado sea estable.
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

/** "2 de octubre de 2026". Se fija la zona UTC para que la fecha no cambie según el servidor. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Minutos de lectura (unas 220 palabras por minuto). */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
