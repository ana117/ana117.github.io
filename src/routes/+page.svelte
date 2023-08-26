<script>
    import Hero from "$lib/components/Hero.svelte";
    import ProjectsList from "$lib/components/ProjectsList.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
    <title>Ahmad Naufan</title>
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">

    <meta name="description" content="Ahmad Naufan's portfolio website.">
</svelte:head>


<Hero/>

<div id="content" class="min-h-screen">
    <ProjectsList displayCount="3" showDescription={false}/>

    <Contact/>
</div>
