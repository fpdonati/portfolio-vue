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
				singleProjectTitle: 'Managment appointments Platform',
				singleProjectDate: 'Jun, 2023',
				singleProjectTag: 'Personal project',
			},
			projectImages: [
				{
					id: 1,
					title: 'FastAgenda',
					img: require('@/assets/images/web-project-2.jpg'),
				},
				{
					id: 2,
					title: 'FastAgenda',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 3,
					title: 'FastAgenda',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Company',
						details: 'FastAgenda.',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Managment solutions.',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Develop an Web Aplication.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Node.js',
							'PostgreSQL.',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Actually working on a personal project, developing an agenda for managing appointments, clients, sales and online payments. We are on initial phase of the project, iterating in the business model, features and UX/UI design.',
					},
					{
						id: 2,
						details:
							'More details coming soon...',
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