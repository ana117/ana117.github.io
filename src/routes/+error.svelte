<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>ana117 | {$page.status} {$page.error?.message}</title>
</svelte:head>

<main id="content" class="flex flex-col items-center justify-center gap-[2rem] grow">
  <h1 class="text-4xl font-bold text-center text-primary">
    {$page.status} {$page.error?.message}
  </h1>

  <a href="/" class="w-fit px-[2rem] py-[0.5rem] hover:bg-accent hover:text-white hover:dark:bg-secondary hover:dark:text-black duration-500 transition-all origin-bottom rounded-md">
    Go Home
  </a>
</main>
