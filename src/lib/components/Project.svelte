<script lang="ts">
    export let project, title, description: string;
    export let techStacks: string[];
</script>

<div class="flex w-full gap-[2rem]">
    <picture class="w-6/12 md:max-h-[32rem] object-contain inline-block">
        <source srcset="assets/{project}/{project}-1-mobile.png" media="(max-width: 768px)">
        <img src="assets/{project}/{project}-1.png" alt="{project}">
    </picture>

    <div class="w-6/12 flex flex-col justify-center md:justify-start">
        <h2 class="text-text font-bold text-4xl md:text-3xl">{title}</h2>
        <p class="text-text text-2xl mt-[1rem]">{description}</p>

        <div class="grid grid-cols-4 md:grid-cols-8 gap-x-[1rem] mt-[2rem]">
            {#each techStacks as techStack}
                <img src="assets/icons/{techStack}.svg" alt="{techStack}" class="w-[4rem] md:w-[3rem] inline-block">
            {/each}
        </div>
    </div>
</div>