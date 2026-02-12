import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cloudlem - Cloud, AI & DevOps Consulting',
    short_name: 'Cloudlem',
    description: 'Expert DevOps consulting, cloud migration, and AI implementation services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#00C2FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
