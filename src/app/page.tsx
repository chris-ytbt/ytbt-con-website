import {Search, Palette, Users, Settings} from 'lucide-react'
import Button from '@/components/ui/Button'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
	{
		title: 'Workflow Diagnosis',
		description: 'Identify bottlenecks and inefficiencies in your current business processes through comprehensive analysis and assessment.',
		icon: Search,
	},
	{
		title: 'Business Process Design',
		description: 'Design streamlined, efficient workflows tailored to your specific business needs and organizational structure.',
		icon: Palette,
	},
	{
		title: 'Change Management',
		description: 'Guide your team through smooth organizational transformations with proven methodologies and expert support.',
		icon: Users,
	},
	{
		title: 'Process Automation',
		description: 'Implement smart automation solutions to reduce manual work, minimize errors, and increase operational efficiency.',
		icon: Settings,
	},
]

export default function Home() {
	return (
			<>
				{/* Hero Section */}
				<section className="relative bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700">
					<div className="absolute inset-0 bg-black opacity-10"></div>
					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
						<div className="text-center">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
								Where {' '}
								<span className="text-gray-100">Trust Meets Innovation</span>
							</h1>
							<p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-4xl mx-auto leading-relaxed">
								We transform businesses through comprehensive IT consulting and process change.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button href="/portfolio" variant="secondary" size="lg">
									View Our Work
								</Button>
								<Button href="/contact" variant="outline" size="lg">
									Get Started
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section className="relative py-24 bg-gray-50 overflow-hidden">
					{/* SVG Patterned Background */}
					<svg 
						aria-hidden="true" 
						className="absolute inset-0 -z-10 h-full w-full fill-neutral-50 stroke-navy-950/5"
						style={{
							maskImage: 'linear-gradient(to bottom left, white 40%, transparent 60%)'
						}}
					>
						<rect width="100%" height="100%" fill="url(#navy-pattern)" strokeWidth="0" />
						<defs>
							<pattern 
								id="navy-pattern" 
								width="96" 
								height="96" 
								x="50%" 
								patternUnits="userSpaceOnUse" 
								patternTransform="translate(0 -48)"
								fill="none"
							>
								<path 
									d="M64 0 34.572 47.138A16 16 0 0 1 18.883 60h-37.766a16 16 0 0 0-15.69 12.862L-61.427 147.138A16 16 0 0 1-77.117 160h-37.766M32-80 2.572-32.862A16 16 0 0 1-13.117-20h-37.766a16 16 0 0 0-15.69 12.862L-93.427 67.138A16 16 0 0 1-109.117 80h-37.766M96 80l-29.428 47.138A15.999 15.999 0 0 1 50.883 140h-37.766a16 16 0 0 0-15.69 12.862L-29.427 227.138A16 16 0 0 1-45.117 240h-37.766" 
									stroke="rgba(30, 58, 138, 0.05)" 
									strokeWidth="1"
								/>
							</pattern>
						</defs>
					</svg>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Our Services
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Comprehensive business process consulting solutions designed to
								transform your operations and maximize efficiency
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{services.map((service, index) => (
									<ServiceCard
											key={index}
											title={service.title}
											description={service.description}
											icon={service.icon}
									/>
							))}
						</div>
					</div>
				</section>

				{/* Company Brief Section */}
				<section className="py-24 bg-white">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Why Choose Yottabyte?
								</h2>
								<p className="text-lg text-gray-600 mb-6 leading-relaxed">
									We partner with you to identify what to work on first based on your business goals. Unlike typical
									development agencies, we care about your goal over making dashboards.
									We think beyond code — analyzing the business impact and delivering actionable insights
									as your true partners.
								</p>
								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3"></div>
										<p className="text-gray-600">
											Proven methodologies with measurable results
										</p>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3"></div>
										<p className="text-gray-600">
											Tailored solutions for your unique business needs
										</p>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-2 h-2 bg-navy-500 rounded-full mt-2 mr-3"></div>
										<p className="text-gray-600">
											Comprehensive support throughout implementation
										</p>
									</div>
								</div>
							</div>

							<div className="bg-gray-100 rounded-lg p-8 text-center">
								<div className="mb-6">
									<div className="text-4xl font-bold text-navy-500 mb-2">75%</div>
									<p className="text-gray-600">Average reduction in processing time</p>
								</div>
								<div className="mb-6">
									<div className="text-4xl font-bold text-navy-500 mb-2">40%</div>
									<p className="text-gray-600">Cost savings through optimization</p>
								</div>
								<div>
									<div className="text-4xl font-bold text-navy-500 mb-2">99%</div>
									<p className="text-gray-600">Client satisfaction rate</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Call-to-Action Section */}
				<section className="py-24 bg-navy-500">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Transform Your Business Processes?
						</h2>
						<p className="text-xl text-navy-100 mb-8 max-w-3xl mx-auto">
							Let&apos;s discuss how we can help optimize your workflows and drive efficiency
							across your organization. Get in touch for a consultation.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button href="/contact" variant="secondary" size="lg">
								Contact Us Today
							</Button>
							<Button href="/portfolio" variant="outline" size="lg">
								View Case Studies
							</Button>
						</div>
					</div>
				</section>
			</>
	)
}
