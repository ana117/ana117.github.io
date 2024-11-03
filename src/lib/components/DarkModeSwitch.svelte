<script>
    function toggleDarkMode() {
        const html = document.querySelector('html');
        html.classList.toggle('dark');
    }
</script>

<button class="flex justify-center items-center w-full
               hover:rotate-90 transition-transform duration-300"
        on:click={toggleDarkMode}>
    <img src="/assets/icons/objects/sun.svg" alt="sun" class="w-[4rem] h-[4rem] hidden dark:block">
    <img src="/assets/icons/objects/moon.svg" alt="moon" class="w-[4rem] h-[4rem] dark:hidden">
</button>
