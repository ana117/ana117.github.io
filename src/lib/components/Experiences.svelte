<script>
    import { slide } from "svelte/transition";

    let expanded = false;

	function clickHandler() {
		expanded = !expanded
	}
</script>
<section id="experiences" class="p-[1rem] md:p-[2rem] divide-y-4 divide-accent dark:bg-black dark:text-secondary dark:divide-secondary">
    <header class="flex items-center justify-between">
        <h2 class="font-bold text-3xl md:text-4xl py-[1rem]">Experiences</h2>
    </header>

    <div class="flex flex-col gap-[1rem] pt-[2rem] w-full text-text text-lg md:text-xl">
        <div class="flex flex-col w-full gap-[0.5rem]">
            <div class="flex flex-col lg:flex-row justify-between">
                <div>
                    <h3 class="text-xl md:text-2xl font-bold hover:underline">
                        <a href="https://futureview.app" target="_blank">
                            FutureView.app
                        </a>
                    </h3>
                    <h3 class="text-xl md:text-2xl">Full Stack Web Developer</h3>
                </div>
                <div class="flex lg:flex-col justify-between lg:text-end">
                    <p>Freelance</p>
                    <p class="italic">Remote</p>
                </div>
            </div>
            <button type="button" on:click={clickHandler} class="w-fit underline underline-offset-4 decoration-accent dark:decoration-secondary hover:bg-accent hover:text-white hover:dark:bg-secondary hover:dark:text-black duration-500 transition-all origin-bottom" aria-expanded={expanded}>
                {expanded ? "Hide" : "Show"} Details
            </button>
            {#if expanded}
            <ul transition:slide class="list-disc ms-[2rem] *:mt-[0.25rem]">
                <li>Designed and developed a Django-based website with TailwindCSS</li>
                <li>Executed a data migration of 300 users from legacy systems by replication the original hashing method</li>
                <li>Developed 5 new features resulting in 75% increase in total users on the first month</li>
                <li>Integrated PayPal API to automate the payment process, reducing the time needed to manually process payments</li>
                <li>Created automated scripts to update/populate the database from spreadsheet data, reducing the time needed to make frequent changes based on user feedback</li>
            </ul>
            {/if}
        </div>
    </div>
</section>