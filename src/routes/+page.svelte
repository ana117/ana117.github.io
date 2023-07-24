<script>
    import Hero from "$lib/components/Hero.svelte";
    import MainProjects from "$lib/components/MainProjects.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
    <title>ana117 | Naufan</title>
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">
</svelte:head>

<div class="md:ml-[8rem] min-h-screen">
    <Hero />

    <div id="content" class="min-h-screen">
        <MainProjects />

        <Contact />
    </div>
</div>