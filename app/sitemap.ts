import { MetadataRoute } from 'next'

const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://mariachislossalmosbogota.vercel.app' 
  : 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  
  // Rutas principales con prioridades estratégicas
  const mainRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/servicios', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contacto', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/galeria', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/repertorio', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/privacidad', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terminos', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // Generar URLs con información completa
  return mainRoutes.map(route => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}