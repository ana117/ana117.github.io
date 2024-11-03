<script lang="ts">
    import Link from "./Link.svelte";

    export let project, title, summary, points, techStacks, github, website;

    const handleImageFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = '/assets/icons/objects/placeholder.svg';
    }
    
    const handleIconFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = '/assets/icons/objects/question_mark.svg';
    }
</script>

<div class="flex flex-col xl:flex-row rounded-xl shadow-lg bg-secondary dark:bg-accent border-2 border-transparent hover:border-accent duration-500 transition-all w-full" id="{project}">
    <div class="min-w-fit min-h-fit">
        <picture>
            <img class="md:min-w-[640px] w-full h-[360px] rounded-t-xl xl:rounded-tr-none object-cover object-top" src="/assets/{project}/{project}-1.webp" alt="{project}" on:error={handleImageFallback}>
        </picture>
    
        <div class="flex flex-wrap justify-between items-center p-[1rem]">
            <div class="flex gap-[1rem] z-0">
                {#each techStacks as techStack}
                    <div class="flex">
                        <div class="relative group/tech">
                            <img src="/assets/icons/techs/{techStack}.svg" alt="{techStack}"
                                    class="w-[4rem] lg:w-[3rem] z-0" on:error={handleIconFallback}>
                            <div class="bg-primary text-white rounded-md px-[0.5rem]
                                        absolute top-0 left-16 h-full z-10
                                        hidden group-hover/tech:lg:flex items-center">
                                <p class="text-xl font-semibold px-[0.5rem]">
                                    {techStack}
                                </p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="flex gap-[1rem] text-xl text-primary dark:text-white">
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
            {@html summary}
        </p>

        <ul class="list-disc mt-[0.5rem] *:mt-[0.25rem] ps-[2rem] pe-[1rem] overflow-y-auto scrollbar">
            {#each points as point}
                <li class="text-text text-xl">
                    {@html point}
                </li>
            {/each}
        </ul>
    </div>
</div>