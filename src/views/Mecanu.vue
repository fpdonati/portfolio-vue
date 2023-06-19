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
				singleProjectTitle: 'Car Reparation Platform',
				singleProjectDate: 'July, 2021',
				singleProjectTag: 'Backend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Meclic',
					img: require('@/assets/images/car-project.png'),
				},
				{
					id: 2,
					title: 'Meclic',
					img: require('@/assets/images/car-project-3.png'),
				},
				{
					id: 3,
					title: 'Meclic',
					img: require('@/assets/images/car-project-2.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Company',
						details: 'Mecanu.',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Car reparation.',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://www.mecanu.com',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Develop an API rest for a web and mobile aplication.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Node.js',
							'Express.js',
							'TypeScript',
							'PostgreSQL',
							'Firebase',
							'Swagger.',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Mecanu is a platform that connects users with mechanics in a comprehensive ecosystem. When a client requests a repair service, mechanics registered in the app receive a notification and can offer their prices to take on the service. The client can then choose from the offers, considering factors such as price, references, and service quality.',
					},
					{
						id: 2,
						details:
							'In addition to connecting users with mechanics, Mecanu also serves as a provider of repair parts for some services. By offering lower prices to clients who repair their cars through the app, Mecanu aims to provide added value.',
					},
					{
						id: 3,
						details:
							'As part of the backend development team, I played a role in starting the web application from scratch. The main challenge was developing a REST API to serve both the web and mobile applications. This involved selecting the appropriate stack and technologies, designing the database schema, implementing user authentication, and integrating with cloud services.',
					},
					{
						id: 4,
						details:
							'I also contributed to the organization of the business by suggesting an administration platform with a user-friendly interface for accessing and managing database tables with preselected filters. Initially, we implemented the Admin JS library, which facilitated modifications and quick access to database instances. However, our goal was to develop an independent platform with a focus on business orientation.',
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
