<script lang="ts">
    import { onMount } from 'svelte';
    
    let used = false;
    onMount(() => {
        const mail = document.querySelector('#contact-mail');
        if (!mail) return;

        const parse = () => {
            if (used) return;
            used = true;
            const m = ">2:=E@iH@C<o2?2``f]4@>".split('').map(c => c.charCodeAt(0) >= 33 && c.charCodeAt(0) <= 126 ? String.fromCharCode(33 + ((c.charCodeAt(0) + 14) % 94)) : c).join('');
            mail.setAttribute('href', m);
        }

        const timeout = setTimeout(parse, 5000);
        const trigger = () => {
            clearTimeout(timeout);
            parse();
            window.removeEventListener('click', trigger);
            window.removeEventListener('scroll', trigger);
        }

        window.addEventListener('click', trigger);
        window.addEventListener('scroll', trigger);
    });
</script>

<section id="contact"
         class="p-[1rem] md:px-[4rem] md:py-[2rem] divide-y-4 divide-accent
                dark:bg-black dark:text-secondary dark:divide-secondary">
    <header class="flex items-center justify-between">
        <h2 class="text-text font-bold text-3xl md:text-4xl py-[1rem]">Contacts</h2>
    </header>

    <div class="flex flex-col md:flex-row-reverse justify-between pt-[2rem] w-full gap-[3rem]">
        <div class="flex md:flex-col flex-wrap gap-x-[3.5rem] gap-y-[1rem] text-text font-semibold text-2xl md:text-2xl">
            <a href="https://github.com/ana117" target="_blank"
               class="flex items-center gap-x-[0.5rem]
                      hover:underline underline-offset-4 decoration-accent dark:decoration-secondary">
                <img src="assets/icons/socials/github.svg" alt="github" class="w-[3rem] md:w-[2.5rem] dark:hidden">
                <img src="assets/icons/socials/github_light.svg" alt="github" class="w-[3rem] md:w-[2.5rem] hidden dark:block">
                <p>ana117</p>
            </a>
            <a href="https://www.linkedin.com/in/ahmadnaufanw/" target="_blank"
               class="flex items-center gap-x-[0.5rem]
                      hover:underline underline-offset-4 decoration-accent dark:decoration-secondary">
                <img src="assets/icons/socials/linkedin.svg" alt="linkedin" class="w-[3rem] md:w-[2.5rem] dark:hidden">
                <img src="assets/icons/socials/linkedin_light.svg" alt="linkedin"
                     class="w-[3rem] md:w-[2.5rem] hidden dark:block">
                <p>anaufanw</p>
            </a>
        </div>

        <div class="flex flex-col gap-y-[2rem]">
            <p class="text-text text-2xl">
                Feel free to contact me through my email below!
            </p>
            <a id="contact-mail"
               class="w-fit py-[0.5rem] px-[1rem] rounded
                      text-secondary font-bold text-2xl
                      hover:underline underline-offset-4 decoration-bg
                      bg-primary hover:bg-accent">
                Mail Me
            </a>
        </div>
    </div>
</section>