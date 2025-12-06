<script lang="ts">
    import { browser } from '$app/environment';

    let darkMode = true;
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        darkMode = !darkMode;
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }

    if (browser) {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
                darkMode = true;
            } else {
                document.documentElement.classList.remove('dark');
                darkMode = false;
            }
        }
    }
</script>

<button class="flex justify-center items-center w-full
               hover:rotate-90 transition-transform duration-300"
        on:click={toggleDarkMode}>
    <img src="/assets/icons/objects/sun.svg" alt="sun" class="w-[4rem] h-[4rem] hidden dark:block">
    <img src="/assets/icons/objects/moon.svg" alt="moon" class="w-[4rem] h-[4rem] dark:hidden">
</button>
