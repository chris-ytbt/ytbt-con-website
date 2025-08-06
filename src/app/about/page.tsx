import {Award, Users, Target, TrendingUp} from 'lucide-react'
import {Metadata} from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'About Us',
	description: 'Learn about who we are, and our expertise in business process consulting, workflow optimization, and organizational transformation.',
}

export default function AboutPage() {
	return (
			<div className="py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Hero Section */}
					<div className="text-center mb-20">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							About Us
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							We are dedicated business process consulting experts committed to helping
							organizations streamline operations, reduce inefficiencies, and achieve
							sustainable growth through strategic transformation.
						</p>
					</div>

					{/* CEO Profile Section */}
					<section className="mb-20">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership</h2>

								{/* CEO Profile */}
								<div className="bg-white border border-gray-200 rounded-lg p-8">
									<div className="flex items-center mb-6">
										<div className="w-20 h-20 mr-6 relative">
											<Image
												src="/profile.jpg"
												alt="Christoph - Partner at Yottabyte"
												width={80}
												height={80}
												className="rounded-full object-cover"
												priority
											/>
										</div>
										<div>
											<h3 className="text-xl font-bold text-gray-900">Partner</h3>
											<p className="text-gray-600">Christoph</p>
										</div>
									</div>

									<p className="text-gray-600 mb-6 leading-relaxed">
										With over a decade of experience in business process optimization and
										organizational transformation, he led successful consulting
										engagements across various industries, helping organizations achieve
										measurable improvements in efficiency and performance.
									</p>

									{/* Key Achievements: TODO */}
								{/*	<div className="space-y-3">*/}
								{/*		<div className="flex items-center">*/}
								{/*			<Award className="w-5 h-5 text-navy-500 mr-3 flex-shrink-0"/>*/}
								{/*			<span className="text-gray-600">Certified Lean Six Sigma Black Belt</span>*/}
								{/*		</div>*/}
								{/*		<div className="flex items-center">*/}
								{/*			<Award className="w-5 h-5 text-navy-500 mr-3 flex-shrink-0"/>*/}
								{/*			<span className="text-gray-600">PMP Certified Project Manager</span>*/}
								{/*		</div>*/}
								{/*		<div className="flex items-center">*/}
								{/*			<Award className="w-5 h-5 text-navy-500 mr-3 flex-shrink-0"/>*/}
								{/*			<span className="text-gray-600">MBA in Operations Management</span>*/}
								{/*		</div>*/}
								{/*	</div>*/}
								</div>
							</div>

							<div className="space-y-8">
								{/* Experience Timeline */}
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
									<div className="space-y-6">
										<div className="border-l-4 border-navy-500 pl-6">
											<div className="flex items-center mb-2">
												<h4 className="font-semibold text-gray-900">Founder & Partner</h4>
												<span className="ml-auto text-sm text-gray-500">2020 - Present</span>
											</div>
											<p className="text-navy-600 font-medium mb-2">Yottabyte Pte. Ltd.</p>
											<p className="text-gray-600 text-sm">
												Leading business process improvement initiatives for clients,
												focusing on process redesign and digital transformation.
											</p>
										</div>

										<div className="border-l-4 border-gray-300 pl-6">
											<div className="flex items-center mb-2">
												<h4 className="font-semibold text-gray-900">Group CEO Office</h4>
												<span className="ml-auto text-sm text-gray-500">2018 - 2019</span>
											</div>
											<p className="text-gray-700 font-medium mb-2">Sea Ltd.</p>
											<p className="text-gray-600 text-sm">
												Led business team process improvement and KPI design,
												achieving 30% revenue increase YoY.
											</p>
										</div>

										<div className="border-l-4 border-gray-300 pl-6">
											<div className="flex items-center mb-2">
												<h4 className="font-semibold text-gray-900">Corporate Development Manager</h4>
												<span className="ml-auto text-sm text-gray-500">2016 - 2018</span>
											</div>
											<p className="text-gray-700 font-medium mb-2">Dell Technologies</p>
											<p className="text-gray-600 text-sm">
												Led operational excellence initiatives, implementing lean methodologies
												and driving continuous improvement across multiple global facilities.
											</p>
										</div>

										<div className="border-l-4 border-gray-300 pl-6">
											<div className="flex items-center mb-2">
												<h4 className="font-semibold text-gray-900">Consultant</h4>
												<span className="ml-auto text-sm text-gray-500">2014 - 2016</span>
											</div>
											<p className="text-gray-700 font-medium mb-2">Bain & Company</p>
											<p className="text-gray-600 text-sm">
												Led process improvement, change management, strategic planning
												initiatives for global Fortune 500 companies.
											</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Mission & Values */}
					<section className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								We believe in the power of technology and AI to transform businesses
								and create lasting value.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center">
								<div
										className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Target className="w-8 h-8 text-navy-600"/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h3>
								<p className="text-gray-600 text-sm">
									Committed to delivering tangible results that exceed client expectations in every
									engagement.
								</p>
							</div>

							<div className="text-center">
								<div
										className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Users className="w-8 h-8 text-navy-600"/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">Collaboration</h3>
								<p className="text-gray-600 text-sm">
									Working closely with our clients as trusted partners to create digital
									workflow that works.
								</p>
							</div>

							<div className="text-center">
								<div
										className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
									<TrendingUp className="w-8 h-8 text-navy-600"/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
								<p className="text-gray-600 text-sm">
									Leveraging cutting-edge methodologies and technologies to drive meaningful change.
								</p>
							</div>

							<div className="text-center">
								<div
										className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Award className="w-8 h-8 text-navy-600"/>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">Integrity</h3>
								<p className="text-gray-600 text-sm">
									Maintaining the highest ethical standards and transparency in all our client
									relationships.
								</p>
							</div>
						</div>
					</section>

					{/* Company Stats: TODO */}
					{/*<section className="bg-navy-50 rounded-lg p-12 mb-20">*/}
					{/*	<div className="text-center mb-12">*/}
					{/*		<h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>*/}
					{/*		<p className="text-lg text-gray-600 max-w-2xl mx-auto">*/}
					{/*			Numbers that reflect our commitment to delivering measurable results for our clients.*/}
					{/*		</p>*/}
					{/*	</div>*/}

					{/*	<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">*/}
					{/*		<div>*/}
					{/*			<div className="text-4xl font-bold text-navy-600 mb-2">50+</div>*/}
					{/*			<p className="text-gray-600">Successful Projects</p>*/}
					{/*		</div>*/}
					{/*		<div>*/}
					{/*			<div className="text-4xl font-bold text-navy-600 mb-2">30+</div>*/}
					{/*			<p className="text-gray-600">Enterprise Clients</p>*/}
					{/*		</div>*/}
					{/*		<div>*/}
					{/*			<div className="text-4xl font-bold text-navy-600 mb-2">$15M+</div>*/}
					{/*			<p className="text-gray-600">Client Cost Savings</p>*/}
					{/*		</div>*/}
					{/*		<div>*/}
					{/*			<div className="text-4xl font-bold text-navy-600 mb-2">99%</div>*/}
					{/*			<p className="text-gray-600">Client Satisfaction</p>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</section>*/}

					{/* Call to Action */}
					<section className="text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Ready to Work Together?
						</h2>
						<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
							Let&apos;s discuss how we can help transform your business processes and drive efficiency
							across your organization.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
									href="/contact"
									className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 transition-colors"
							>
								Get In Touch
							</Link>
							<Link
									href="/portfolio"
									className="inline-flex items-center justify-center px-6 py-3 border border-navy-600 text-base font-medium rounded-md text-navy-600 bg-white hover:bg-navy-50 transition-colors"
							>
								View Our Work
							</Link>
						</div>
					</section>
				</div>
			</div>
	)
}