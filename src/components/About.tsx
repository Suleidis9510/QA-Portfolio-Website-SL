import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Target, Zap, Bot, Globe } from 'lucide-react'

const highlights = [
  { icon: Globe, text: 'Web, Mobile, iOS, Android, Tablet' },
  { icon: Target, text: 'Risk-Based Testing' },
  { icon: Zap, text: 'Functional + Automation' },
  { icon: Bot, text: 'AI-Assisted Workflows' },
]

export function About() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            About
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            QA Professional
          </h2>

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              QA Functional / QA Automation professional with experience testing web, mobile, 
              Android, iOS, and tablet applications in international agile environments.
            </p>
            <p>
              I apply solid QA technical knowledge to validate business-critical workflows, 
              translate acceptance criteria into test scenarios, identify risks and edge cases, 
              and verify behavior across UI, APIs, integrations, databases, responsiveness, 
              and basic accessibility.
            </p>
            <p>
              I combine functional testing expertise with Playwright, TypeScript, Cursor, 
              MCP tools, and AI-assisted workflows to improve test coverage, maintain 
              automated tests, support requirement analysis, create clearer bug reports, 
              and assist basic debugging when needed.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-4 bg-background rounded-xl border border-border"
              >
                <item.icon size={20} className="text-primary mb-2" />
                <p className="text-xs font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
