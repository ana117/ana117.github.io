<script lang="ts">
    import { slide } from "svelte/transition";
    export let experience: {
        title: string;
        company: string;
        url?: string;
        location: string;
        date: string;
        type?: string;
        details: string[];
    };

    let showDetails = false;
    function clickHandler() {
        showDetails = !showDetails;
    }
</script>

<div class="flex flex-col w-full gap-[0.5rem]">
    <div class="flex flex-col md:flex-row justify-between">
        <div>
            <h3 class="text-xl md:text-2xl font-bold">
                {#if experience.url}
                <a href={experience.url} target="_blank" class="hover:underline">
                    {experience.company}
                </a>
                {:else}
                <span>{experience.company}</span>
                {/if}
            </h3>
            <h3 class="text-xl font-light">{experience.title}</h3>
        </div>
        <div class="flex md:flex-col justify-between items-end">
            <p>{experience.date}</p>
            <div class="hidden md:flex justify-end gap-x-[0.5rem] italic">
                {#if experience.type}
                <p>{experience.type}</p>
                <span>|</span>
                {/if}
                <p>{experience.location}</p>
            </div>
        </div>
    </div>
    <button type="button" on:click={() => clickHandler()} class="w-fit underline underline-offset-4 decoration-accent dark:decoration-secondary hover:bg-accent hover:text-white hover:dark:bg-secondary hover:dark:text-black duration-500 transition-all origin-bottom" aria-expanded={showDetails}>
        {showDetails ? "Hide" : "Show"} Details
    </button>
    {#if showDetails}
    <ul transition:slide class="list-disc ms-[2rem] *:mt-[0.25rem]">
        {#each experience.details as detail}
        <li>{detail}</li>
        {/each}
    </ul>
    {/if}
</div>