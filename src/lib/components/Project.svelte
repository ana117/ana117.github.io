<script lang="ts">
    import Link from "./Link.svelte";

    export let project, title, summary, points, techStacks, github, website;

    const handleImageFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400';
    }
    
    const handleIconFallback = (e: Event) => {
        (e.target as HTMLImageElement).src = '/assets/icons/question_mark.svg';
    }
</script>

<div class="flex w-full gap-[2rem] py-[2rem]" id="{project}">
    <a href="/projects/#{project}" class="w-6/12 lg:max-h-[32rem]">
        <picture class="object-contain flex justify-center">
            <source srcset="/assets/{project}/{project}-1-mobile.webp" media="(max-width: 1024px)">
            <img src="/assets/{project}/{project}-1.webp" alt="{project}" on:error={handleImageFallback}>
        </picture>
    </a>

    <div class="w-6/12 flex flex-col justify-center lg:justify-start gap-[1rem]">
        <a href="/projects/#{project}"
           class="hover:underline underline-offset-4 decoration-primary dark:decoration-secondary w-fit">
            <h3 class="text-text font-bold text-2xl lg:text-3xl">{title}</h3>
        </a>
        <p class="text-text text-xl mt-[1rem]">
            {@html summary}
        </p>
        <div class="overflow-y-auto max-h-[200px] lg:max-h-[400px] pe-[1rem] scrollbar">
            <ul class="list-disc ms-[2rem] *:mt-[0.25rem]">
                {#each points as point}
                    <li class="text-text text-xl">
                        {@html point}
                    </li>
                {/each}
            </ul>
        </div>

        <div class="flex gap-x-[1rem] text-xl">
            {#if github}
                <Link text="GitHub" rel={github} />
            {/if}
            {#if website}
                <Link text="Website" rel={website} />
            {/if}
        </div>
        <div class="grid grid-cols-4 lg:grid-cols-8 gap-x-[1rem] mt-[1rem] z-0">
            {#each techStacks as techStack}
                <div class="flex">
                    <div class="relative group">
                        <img src="/assets/icons/{techStack}.svg" alt="{techStack}"
                             class="w-[4rem] lg:w-[3rem] z-0" on:error={handleIconFallback}>
                        <div class="bg-primary text-white rounded-md px-[0.5rem]
                                    absolute top-0 left-16 h-full z-10
                                    hidden group-hover:lg:flex items-center">
                            <p class="text-xl font-semibold px-[0.5rem]">
                                {techStack}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>