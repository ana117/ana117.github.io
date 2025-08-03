<script lang="ts">
    import Link from "./Link.svelte";
    import type { Project as ProjectType } from "$lib/types";
    import TooltipIcon from "./TooltipIcon.svelte";

    export let project: ProjectType;

    const { id, title, techStacks, github, website } = project;

    const handleImageFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = '/assets/icons/objects/placeholder.svg';
    }
</script>

<div class="w-fit rounded-xl shadow-lg bg-secondary dark:bg-accent text-white border-2 border-transparent hover:border-accent duration-500 transition-all group hover:scale-105" id="{id}">
    <div class="relative">
        <a href="/projects/#{id}" class="w-full relative z-0 block">
            <picture>
                <img class="w-[400px] h-[200px]  rounded-t-xl object-cover object-top" src="/assets/{id}/{id}-1.webp" alt="{id}" on:error={handleImageFallback}>
            </picture>
            <div class="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 h-full w-full backdrop-blur-sm rounded-t-xl">
                <p class="bg-secondary dark:bg-accent text-black dark:text-white p-[1rem] text-2xl font-bold mt-auto rounded-t-lg">
                    {title}
                </p>
            </div>
        </a>
    </div>

    <div class="flex flex-wrap justify-between items-center p-[1rem] gap-[1rem]">
        <div class="flex gap-[1rem] z-0">
            {#each techStacks as techStack}
                <TooltipIcon imageUri="/assets/icons/techs/{techStack}.svg" alt="{techStack}" tooltip="{techStack}" />
            {/each}
        </div>

        <div class="flex gap-[1rem] text-lg md:text-xl text-primary dark:text-white">
            {#if github}
                <Link text="GitHub" rel={github} />
            {/if}
            {#if website}
                <Link text="Website" rel={website} />
            {/if}
        </div>
    </div>
</div>