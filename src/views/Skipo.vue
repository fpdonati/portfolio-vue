<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Crypto Wallet Platform',
				singleProjectDate: 'May, 2023',
				singleProjectTag: 'Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Skipo',
					img: require('@/assets/images/crypto-project.png'),
				},
				{
					id: 2,
					title: 'Skipo',
					img: require('@/assets/images/crypto-project-3.png'),
				},
				{
					id: 3,
					title: 'Skipo',
					img: require('@/assets/images/crypto-project-2.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Company',
						details: 'Skipo.',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Crypto wallet.',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://www.skipo.io',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Develop an Web Aplication.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Vue3.js',
							'Vite',
                            'Pinia',
							'TypeScript.',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Skipo is a user-friendly and secure digital wallet for storing and managing cryptocurrencies. The mission of the company is to make it easy for everyone to access and use cryptocurrencies, even for people who are new to the world of digital assets.',
					},
					{
						id: 2,
						details:
							'The platform supports features to buy, sell, or convert cryptocurrencies. The company analyzes different markets and offers the best prices. Skipo focuses on providing the best user experience, making it easy to manage a crypto portfolio and stay up-to-date on market trends. The web application includes top-notch security features to ensure that digital assets are always safe and secure.',
					},
					{
						id: 3,
						details:
							'I was part of the frontend development team. The main challenge was developing a web application with different features depending on the type and permissions of each user. The application is based on authentication flows using facial and Passport ID recognition with Persona (Identity Verification Solution).',
					},
					{
						id: 4,
						details:
							'The implementation of reusable components was key for the application design because different user interactions share similar flows. Depending on the type of user, the application provides permissions to perform different types of activities.',
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

	</div>
</template>

<style scoped></style>
