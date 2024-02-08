<script>
    import { slide } from "svelte/transition";
    import Link from "./Link.svelte";

    let expanded = false;

	function clickHandler() {
		expanded = !expanded
	}
</script>
<section id="experiences" class="p-[1rem] md:px-[4rem] md:py-[2rem] divide-y-4 divide-accent dark:bg-black dark:text-secondary dark:divide-secondary">
    <header class="flex items-center justify-between">
        <h2 class="font-bold text-3xl md:text-4xl py-[1rem]">Experiences</h2>
    </header>

    <div class="flex flex-col gap-[1rem] pt-[2rem] w-full text-text text-lg md:text-xl">
        <div class="flex flex-col w-full gap-[0.5rem]">
            <div class="flex flex-col lg:flex-row justify-between">
                <div>
                    <h3 class="text-xl md:text-2xl font-bold">FutureView.app</h3>
                    <h3 class="text-xl md:text-2xl">Web Developer (Freelance)</h3>
                </div>
                <div class="flex lg:flex-col justify-between lg:text-end">
                    <p>2024 - Present</p>
                    <p class="italic">Remote</p>
                </div>
            </div>
            <button type="button" on:click={clickHandler} class="w-fit underline underline-offset-4 decoration-accent dark:decoration-secondary hover:bg-accent hover:text-white hover:dark:bg-secondary hover:dark:text-black duration-500 transition-all origin-bottom" aria-expanded={expanded}>
                {expanded ? "Hide" : "Show"} Details
            </button>
            {#if expanded}
            <ul transition:slide class="list-disc list-inside">
                <li>Designed, developed, and managed the website for <Link text="FutureView.app" rel="https://futureview.app" target="_blank"/>.</li>
                <li>Converted spreadsheet data into dedicated web pages.</li>
                <li>Implemented PayPal payment gateway for monetization purposes.</li>
                <li>Successfully migrated data from the previous website to the new platform.</li>
                <li>Achieved a significant increase in viewership within the first week of relaunch.</li>
            </ul>
            {/if}
        </div>
    </div>
</section>