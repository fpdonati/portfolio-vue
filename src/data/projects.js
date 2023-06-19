// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Car Reparation Platform',
		category: 'Web Application',
		img: require('@/assets/images/car-project.png'),
		name: "mecanu",
	},
	{
		id: 2,
		title: 'Crypto Wallet Platform',
		category: 'Web Application',
		img: require('@/assets/images/crypto-project.png'),
		name: "skipo",
	},
	{
		id: 3,
		title: 'Managment Agenda Platform',
		category: 'Web Aplication',
		img: require('@/assets/images/web-project-2.jpg'),
		name: "fastagenda"
	},
];

export default projects;
