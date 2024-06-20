<script>
// @ts-nocheck

    import Project from "$lib/components/Project.svelte";
    import projects from "$lib/data/projects";

    export let displayCount = projects.length;
    export let showDescription = true;
    export let showViewAll = true;

    displayCount = Math.min(displayCount, projects.length);

    const techStacks = {};
    projects.slice(0, displayCount).forEach(project => {
        project.techStacks.forEach(techStack => {
            if (techStacks[techStack] === undefined) {
                techStacks[techStack] = 1;
            } else {
                techStacks[techStack]++;
            }
        });
    });


    let selectedTechStacks = Object.keys(techStacks);
    let filteredProjects = filterProjects();

    function toggleTechStack(techStack) {
        if (techStack === 'clear') {
            selectedTechStacks = [];
        } else if (techStack === 'all') {
            selectedTechStacks = Object.keys(techStacks);
        } else {
            if (selectedTechStacks.includes(techStack)) {
                selectedTechStacks = selectedTechStacks.filter(stack => stack !== techStack);
            } else {
                selectedTechStacks = [...selectedTechStacks, techStack];
            }
        }

        filteredProjects = filterProjects();
    }

    function filterProjects() {
        return projects.filter(project => {
            return project.techStacks.some(techStack => selectedTechStacks.includes(techStack));
        });
    }
</script>

<section id="projects"
         class="p-[1rem] md:px-[4rem] md:py-[2rem] divide-y-4 divide-accent
                dark:bg-black dark:text-secondary dark:divide-secondary h-full">
    <header class="flex items-center justify-between">
        <h2 class="font-bold text-3xl md:text-4xl py-[1rem]">Projects</h2>

        {#if showViewAll}
            <a href="/projects"
               class="italic text-xl hover:underline underline-offset-4 decoration-accent dark:decoration-secondary">
                View All <span class="text-3xl">&#8594;</span>
            </a>
        {/if}
    </header>

    <div class="flex flex-col gap-[1rem] pt-[2rem] w-full">
        <div class="flex flex-col lg:flex-row lg:items-center gap-[1rem] lg:gap-[2rem] text-xl md:text-2xl">
            <p>Tech Stacks</p>
            <div class="flex flex-wrap gap-x-[1rem] gap-y-[0.5rem]">
                {#each Object.keys(techStacks).sort() as techStack}
                    <button 
                        class="text-sm md:text-lg px-[0.5rem] py-[0.25rem] rounded-md bg-primary text-secondary"
                        class:opacity-50={!selectedTechStacks.includes(techStack)}
                        on:click={() => toggleTechStack(techStack)}
                    >
                        {techStack} ({techStacks[techStack]})
                    </button>
                {/each}
                <button class="text-sm md:text-lg px-[0.5rem] py-[0.25rem] rounded-md bg-primary text-secondary"on:click={() => toggleTechStack('all')}>
                    all
                </button>
                <button class="text-sm md:text-lg px-[0.5rem] py-[0.25rem] rounded-md bg-primary text-secondary"on:click={() => toggleTechStack('clear')}>
                    clear
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-y-[4rem]">
            {#each filteredProjects.slice(0, displayCount) as project}
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
    </div>
</section>