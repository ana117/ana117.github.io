<script>
  import { page } from "$app/state";

  let errorMessage = "Something went wrong";
  if (page.status === 404) {
    errorMessage = "Page Not Found";
  } else if (page.error) {
    errorMessage = page.error.message;
  }
</script>

<svelte:head>
  <title>ana117 | {page.status} {errorMessage}</title>
</svelte:head>

<main id="content" class="flex flex-col items-center justify-center gap-[2rem] grow bg-secondary dark:bg-accent">
  <h1 class="text-4xl font-bold text-center text-primary dark:text-secondary flex flex-col md:flex-row gap-[1rem]">
    <span>
      {page.status} 
    </span>
    <span class="hidden md:inline-block"> | </span>
    <span>
      {errorMessage}
    </span>
  </h1>

  <a href="/" class="w-fit px-[2rem] py-[0.5rem] dark:text-secondary hover:bg-accent hover:text-white hover:dark:bg-secondary hover:dark:text-black duration-500 transition-all origin-bottom rounded-md">
    Go Home
  </a>
</main>
