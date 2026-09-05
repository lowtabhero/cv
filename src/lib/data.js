export const data = {
	name: 'Alexey Riazantsev',
	jobTitle: 'Full Stack Web Developer',
	socialLinks: [
		{ n: 'GitHub', v: 'https://github.com/lowtabhero' },
		{ n: 'LinkedIn', v: 'https://www.linkedin.com/in/alexey-riazantsev-01899a2a3/' }
	],
	email: 'newdeveloper2003@gmail.com',
	located: 'Based in Spain',
	openToWork: true,
	shortSummary:
		'I build and maintain web platforms, internal tools, CRM integrations, and business systems, working across development, automation, data workflows, and internal technical operations.',
	skills: [
		{
			title: 'Frontend',
			values: ['SvelteKit', 'JavaScript', 'React', 'HTML', 'SCSS', 'Responsive UI', 'TypeScript']
		},
		{
			title: 'Backend',
			values: ['PHP', 'SQL', 'Database design', 'API endpoints']
		},
		{
			title: 'Integrations',
			values: ['REST APIs', 'Headless CMS', 'CRM integrations']
		},
		{
			title: 'Workflow',
			values: [
				'Figma-to-code',
				'GitHub',
				'Vercel',
				'Maintenance',
				'Project handover',
				'Cross-team technical coordination'
			]
		},
		{
			title: 'Business Systems',
			values: [
				'HubSpot CRM',
				'Business process automation',
				'Reporting & dashboards',
				'Data normalization'
			]
		},
		{
			title: 'Languages',
			values: ['English', 'Spanish', 'Russian']
		}
	],
	routineWork: [
		'Figma-to-production website implementation',
		'CMS-driven websites using WordPress, Strapi or similar tools',
		'Internal web tools for business and content workflows',
		'API integrations',
		'CRM integrations and data workflows',
		'Multilingual websites',
		'Website maintenance, production fixes, deployment setup, and project transfers',
		'Technical troubleshooting and production support',
		'Sales and marketing technical infrastructure'
	],
	companies: [
		{
			companyName: 'Prestige Expo',
			position: 'Web Developer | Internal Tools | Business Systems',
			date: 'May 2026 - Present',
			summary:
				'Work across web development, CRM and internal systems, automation, Microsoft 365, and technical operations, supporting Sales, Marketing, management, and day-to-day company workflows.',
			pointsBlocks: [
				{
					title: 'Web & Integrations',
					points: [
						'Maintain and develop Prestige Expo, Tyrian, and related project websites.',
						'Implement HubSpot forms, CRM/API integrations, multilingual functionality, and production improvements.',
						'Use SEO/AEO analysis to identify and correct outdated or inconsistent website information.'
					]
				},
				{
					title: 'CRM & Business Systems',
					points: [
						'Normalize HubSpot data around Sales requirements and build operational reports and dashboards.',
						'Helped establish Inmoba CRM as the primary source of truth for Sales/property data.',
						'Reviewed technical solutions and avoided approximately €2,000/year in unnecessary integration costs.'
					]
				},
				{
					title: 'Internal Systems & Adoption',
					points: [
						'Redesigned multilingual QR-based meeting-room documentation.',
						'Trained ~50 employees on Teams, calendars, and meeting-room booking.',
						'Supported transfer of corporate domains, accounts, integrations, permissions, and digital assets from the previous responsible team.'
					]
				},
				{
					title: 'Operations, Security & Automation',
					points: [
						'Built internal workflows, automation, documentation, and knowledge-management tools.',
						'Identified AI-related corporate data risks and initiated discussion around managed corporate AI subscriptions.'
					]
				}
			]
			// webLinks: ['']
		},
		{
			companyName: 'Velmure Studio',
			position: 'Full Stack Web Developer',
			date: 'Jan 2025 - Apr 2026',
			summary:
				'Built websites from Figma to production, worked across public sites, MVPs, and internal tools, and handled integrations, maintenance, and delivery tasks.',
			pointsBlocks: [
				{
					points: [
						'Built production websites including tyrian.es, exclusive.tyrian.es, and studio.velmure.com using PHP, custom frontend work, and content/API integrations',
						'Rebuilt an internal data parsing and graph visualization tool from SvelteKit, reducing loading and chart rendering time by approximately 5–8x',
						'Built internal CRM-based tools for extracting, restructuring, displaying, and exporting business data to Excel',
						'Developed SvelteKit reusable website templates with JSON-based content, CDN-hosted images',
						'Handled website maintenance, DNS setup, project transfers, deployment tasks, production fixes, and content updates for existing websites',
						'Took ownership of a Nuxt-based website built by another developers team',
						'Developed the Listyco real-estate MVP in SvelteKit with Inmoba CRM integration, implementing property data flows, frontend views, and custom business logic before the project was paused.',
						'Mentored a junior developer in SvelteKit and practical development workflows'
					]
				}
			],
			webLinks: [
				{ n: 'studio.velmure.com', v: 'https://studio.velmure.com/' },
				{ n: 'tyrian.es', v: 'https://tyrian.es/' },
				{ n: 'exclusive.tyrian.es', v: 'https://exclusive.tyrian.es/' }
			]
		},
		{
			companyName: 'Prestige Expo',
			position: 'Web Developer',
			date: 'Nov 2024 - Dec 2024',
			summary:
				'Contributed to an early-stage frontend build, exploring interaction patterns, animations, and technical directions for future functionality.',
			pointsBlocks: [
				{
					points: [
						'Explored frontend implementation approaches based on client references and early website requirements',
						'Experimented with animations, UI interactions, and libraries for a future production website',
						'Researched CRM API capabilities and possible integration approaches',
						'Built an internal tool prototype for parsing website data, storing it in a database, and visualizing it with graph-based views',
						'Proposed technical ideas and implementation options while the final website design was still being prepared'
					]
				}
			]
		},
		{
			companyName: 'The Agency RE',
			position: 'Web Developer / IT Assistant',
			date: 'Aug 2024 - Oct 2024',
			summary:
				'Supported the company website and web-related business workflows, combining WordPress development, bug reporting, developer coordination, HubSpot/email troubleshooting, and ongoing website maintenance.',
			pointsBlocks: [
				{
					points: [
						'Reported website bugs and coordinated fixes, updates, and functionality requests with the development team',
						'Built custom WordPress tools for blog meta descriptions and translation generation workflows integrated with OpenAI',
						'Supported HubSpot lists, contact workflows, and email integration troubleshooting',
						'Handled small DNS, email, QR/form, and website configuration tasks',
						'Worked on translations, content updates, drafts, and property-related website pages'
					]
				}
			]
		}
	],
	sideProjects: [
		{
			shortDesc: 'Internal tool',
			name: 'SEO Content Cluster Automation Tool',
			desc: 'Internal tool for generating SEO content clusters and saving them as WordPress drafts through REST API integrations. Focused on practical content workflows, review, and publishing support.',
			tags: [
				'SvelteKit',
				'WordPress REST API',
				'OpenAI API',
				'GitHub',
				'Content automation',
				'Vercel'
			],
			link: {
				n: 'internal.stockscout.eu',
				v: 'https://internal.stockscout.eu/'
			}
		},
		{
			shortDesc: 'Multilingual sveltekit website',
			name: 'Lumica Center',
			desc: 'Built a multilingual website using SvelteKit with content separated by language-specific JSON files. Integrated WordPress blog content into the website and managed deployment workflow with GitHub and Vercel.',
			tags: ['SvelteKit', 'WordPress blog integration', 'GitHub', 'Vercel'],
			link: {
				n: 'lumicacenter.com',
				v: 'https://lumicacenter.com/'
			}
		}
	],
	educations: [
		{
			title: 'FP Grado Superior de Desarrollo Web',
			years: '2022 - 2025',
			institution: 'I.E.S. Mar de Alborán',
			location: 'Spain'
		}
	],
	contactCta: 'Want to get in touch or see more of my work?',
	contactParagraph:
		'You can reach me by email or find more technical context, projects, and professional information through my profiles.'
};
