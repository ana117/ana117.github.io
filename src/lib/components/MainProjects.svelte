<script>
    import Project from "$lib/components/Project.svelte";

    let projects = [
        {
            "project": "imdifoods",
            "title": "Imdifoods",
            "description": "E-commerce website for a food business in Indonesia",
            "techStacks": [
                "spring",
                "postgre"
            ]
        },
        {
            "project": "kordict",
            "title": "Korean Dictionary",
            "description": "Korean-English dictionary web app using Korean Dictionary API",
            "techStacks": [
                "react",
                "python"
            ]
        },
    ];
</script>

<section id="projects"
         class="p-[1rem] md:px-[4rem] md:py-[2rem] divide-y-4 divide-accent
                dark:bg-black dark:text-secondary dark:divide-secondary">
    <header class="flex items-center justify-between">
        <h1 class="font-bold text-4xl md:text-3xl py-[1rem]">Projects</h1>
        <a href="#projects"
           class="italic text-2xl hover:underline underline-offset-4 decoration-accent dark:decoration-secondary">
            View All <span class="text-3xl">&#8594;</span>
        </a>
    </header>

    <div class="flex flex-col gap-y-[4rem] pt-[2rem] w-full">
        {#each projects as project}
            <Project
                project={project.project}
                title={project.title}
                description={project.description}
                techStacks={project.techStacks}
            />
        {/each}
    </div>
</section>