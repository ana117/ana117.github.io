<script>
    import Hero from "$lib/components/Hero.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Experiences from "$lib/components/Experiences.svelte";
</script>

<svelte:head>
    <title>ana117 | Ahmad Naufan Wicaksonoputra</title>
</svelte:head>


<Hero/>

<main id="content" class="min-h-screen lg:*:px-[5rem] xl:*:px-[10rem]">
    <Experiences/>
    <Projects displayCount={4} preview={true}/>

    <Contact/>
</main>
