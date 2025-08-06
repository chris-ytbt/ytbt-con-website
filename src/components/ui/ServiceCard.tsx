import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 bg-navy-50 rounded-lg group-hover:bg-navy-100 transition-colors">
            <Icon className="w-6 h-6 text-navy-500" />
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}