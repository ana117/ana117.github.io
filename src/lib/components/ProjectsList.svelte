<script>
    import Project from "$lib/components/Project.svelte";
    import projects from "$lib/data/projects";

    export let displayCount = projects.length;
    export let showDescription = true;
    export let showViewAll = true;

    displayCount = Math.min(displayCount, projects.length);
</script>

<section id="projects"
         class="p-[1rem] md:px-[4rem] md:py-[2rem] divide-y-4 divide-accent
                dark:bg-black dark:text-secondary dark:divide-secondary">
    <header class="flex items-center justify-between">
        <h1 class="font-bold text-4xl md:text-3xl py-[1rem]">Projects</h1>

        {#if showViewAll}
            <a href="/projects"
               class="italic text-2xl hover:underline underline-offset-4 decoration-accent dark:decoration-secondary">
                View All <span class="text-3xl">&#8594;</span>
            </a>
        {/if}
    </header>

    <div class="flex flex-col gap-y-[4rem] pt-[2rem] w-full">
        {#each projects.slice(0, displayCount) as project}
            <Project
                project={project.project}
                title={project.title}
                description={showDescription ? project.description : project.summary}
                techStacks={project.techStacks}
                github={project.github}
                website={project.website}
            />
        {/each}
    </div>
</section>