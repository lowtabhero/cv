<script>
	import SectionAbout from '$lib/components/sections/SectionAbout.svelte';
	import SectionSkills from '$lib/components/sections/SectionSkills.svelte';
	import SectionExperience from '$lib/components/sections/SectionExperience.svelte';
	import SectionSideProjects from '$lib/components/sections/SectionSideProjects.svelte';
	import SectionEducation from '$lib/components/sections/SectionEducation.svelte';
	import SectionContact from '$lib/components/sections/SectionContact.svelte';
	import { data } from '$lib/data';
</script>

<svelte:head>
	<title>CV {data.name}</title>
</svelte:head>

<SectionAbout
	name={data.name}
	jobTitle={data.jobTitle}
	located={data.located}
	openToWork={data.openToWork}
	summary={data.shortSummary}
/>
<SectionSkills skills={data.skills} routineWork={data.routineWork} />
<SectionExperience companies={data.companies} />
<SectionSideProjects sideProjects={data.sideProjects} />
<SectionEducation educations={data.educations} />
<SectionContact />
