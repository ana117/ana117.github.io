<script lang="ts">
    import Link from "./Link.svelte";
    import type { Project as ProjectType } from "$lib/types";
    import TooltipIcon from "./TooltipIcon.svelte";

    export let project: ProjectType;

    const { id, title, description, techStacks, github, website } = project;

    const handleImageFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = '/assets/icons/objects/placeholder.svg';
    }
</script>

<div class="flex flex-col xl:flex-row rounded-xl shadow-lg bg-secondary dark:bg-accent border-2 border-transparent hover:border-accent duration-500 transition-all w-full" id="{id}">
    <div class="min-w-fit min-h-fit">
        <picture>
            <img class="md:min-w-[640px] w-full h-[360px] rounded-t-xl xl:rounded-tr-none object-cover object-top" src="/assets/{id}/{id}-1.webp" alt="{id}" on:error={handleImageFallback}>
        </picture>
    
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
    
    <div class="flex flex-col gap-[0.5rem] p-[1rem] max-h-[440px] lg:max-h-[440px]">
        <p class="text-4xl font-bold">
            {title}
        </p>

        <p class="text-text text-xl">
            {@html description.summary}
        </p>

        <ul class="list-disc mt-[0.5rem] *:mt-[0.25rem] ps-[2rem] pe-[1rem] overflow-y-auto scrollbar">
            {#each description.points as point}
                <li class="text-text text-xl">
                    {@html point}
                </li>
            {/each}
        </ul>
    </div>
</div>