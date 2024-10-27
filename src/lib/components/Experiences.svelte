<script lang="ts">
    import experiences from "$lib/data/experiences";
    import Experience from "./Experience.svelte";
</script>
<section id="experiences" class="p-[1rem] md:p-[2rem] divide-y-4 divide-accent dark:bg-black dark:text-secondary dark:divide-secondary">
    <header class="flex items-center justify-between">
        <h2 class="font-bold text-3xl md:text-4xl py-[1rem]">Experiences</h2>
    </header>

    <div class="flex flex-col gap-[4rem] pt-[2rem] w-full text-text text-lg md:text-xl">
        {#each experiences as experience}
        <Experience experience={experience} />
        {/each}
    </div>
</section>