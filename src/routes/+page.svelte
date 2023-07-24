<script>
    import Hero from "$lib/components/Hero.svelte";
    import MainProjects from "$lib/components/MainProjects.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<div class="ml-[8rem] min-h-screen">
    <Hero />

    <div id="content" class="min-h-screen">
        <MainProjects />

        <Contact />
    </div>
</div>