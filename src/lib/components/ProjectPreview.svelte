<script lang="ts">
    import Link from "./Link.svelte";

    export let project, title, techStacks, github, website;

    const handleImageFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400';
    }
    
    const handleIconFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = '/assets/icons/question_mark.svg';
    }
</script>

<div class="w-fit rounded-xl shadow-lg bg-secondary dark:bg-accent text-white border-2 border-transparent hover:border-accent duration-500 transition-all group" id="{project}">
    <div class="relative">
        <a href="/projects/#{project}" class="w-full relative z-0">
            <picture>
                <img class="w-[640px] h-[360px] rounded-t-xl object-cover object-top" src="/assets/{project}/{project}-1.webp" alt="{project}" on:error={handleImageFallback}>
            </picture>
            <div class="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 h-full w-full backdrop-blur-sm rounded-t-xl">
                <p class="bg-secondary dark:bg-accent text-black dark:text-white p-[1rem] text-4xl font-bold mt-auto rounded-t-lg">
                    {title}
                </p>
            </div>
        </a>
    </div>

    <div class="flex flex-wrap justify-between items-center p-[1rem]">
        <div class="flex gap-[1rem] z-0">
            {#each techStacks as techStack}
                <div class="flex">
                    <div class="relative group/tech">
                        <img src="/assets/icons/{techStack}.svg" alt="{techStack}"
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