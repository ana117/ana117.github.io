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

<section id="projects" class="px-[4rem] py-[2rem] divide-y-4 divide-accent">
    <header class="flex items-center justify-between">
        <h1 class="text-text font-bold text-5xl md:text-3xl py-[1rem]">Projects</h1>
        <a href="#"
           class="text-text italic text-3xl md:text-2xl hover:underline underline-offset-4 decoration-accent">
            View All <span class="text-5xl md:text-3xl">&#8594;</span>
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