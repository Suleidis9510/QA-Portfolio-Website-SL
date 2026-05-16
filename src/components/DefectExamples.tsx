import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Server, Layout, MousePointer, Navigation, Shield, Wifi } from 'lucide-react'

const defects = [
  {
    icon: Server,
    category: 'API',
    title: 'Unexpected Server Error',
    description: 'Detected unexpected 500 errors during endpoint execution affecting critical user flows.',
  },
  {
    icon: Layout,
    category: 'UI',
    title: 'Rendering Issues',
    description: 'Identified UI rendering problems after incomplete migrations causing visual inconsistencies across views.',
  },
  {
    icon: MousePointer,
    category: 'Interaction',
    title: 'Drag-and-Drop Failure',
    description: 'Found broken drag-and-drop behavior causing elements to disappear unexpectedly.',
  },
  {
    icon: Navigation,
    category: 'Navigation',
    title: 'Missing CTAs',
    description: 'Reported missing or disappearing call-to-action buttons in critical workflows.',
  },
  {
    icon: Shield,
    category: 'Auth',
    title: 'Authentication Issues',
    description: 'Detected magic link and access token issues preventing expected user access.',
  },
  {
    icon: Wifi,
    category: 'Integration',
    title: 'Offline Sync Data Loss',
    description: 'Identified a critical issue in an iPad app where losing connection during upload and sync caused locally captured data to be lost.',
  },
]

export function DefectExamples() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Quality
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            Highlighted Defect Examples
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Anonymized examples of critical defects identified and reported during testing.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {defects.map((defect, index) => (
              <motion.div
                key={defect.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-5 bg-background rounded-xl border border-border hover:border-destructive/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                    <defect.icon size={18} className="text-destructive" />
                  </div>
                  <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                    {defect.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{defect.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {defect.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
