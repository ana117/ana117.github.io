<script>
    import Resume from '$lib/data/Resume_AhmadNaufanW.pdf';
</script>

<section id="hero" class="flex flex-col justify-center items-center py-[1rem] h-screen bg-secondary dark:bg-accent">
    <div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[4rem] grow relative z-0 px-[1rem] lg:px-[4rem] text-primary dark:text-secondary">
        <img src="/assets/icons/objects/logo.svg" alt="logo" class="w-[16rem] xl:w-[32rem] dark:hidden">
        <img src="/assets/icons/objects/logo_light.svg" alt="logo" class="w-[16rem] xl:w-[32rem] hidden dark:block">

        <div class="flex flex-col gap-[1rem]">
            <h1 class="font-bold text-4xl text-center lg:text-start lg:text-4xl">
                <span>Greetings!</span> 
                <span class="lg:whitespace-nowrap">I'm Ahmad Naufan W</span>
            </h1>
            <p class="text-xl text-center lg:text-start">
                Full Stack Developer 
                <span class="hidden lg:inline">
                    • Bachelor of Computer Science from University of Indonesia
                </span>
            </p>

            <div class="">
                <div class="flex gap-[0.5rem] mb-[1rem]">
                    South Tangerang, Indonesia
                </div>
                <div class="flex justify-between items-center gap-[1rem]">
                    <div class="flex justify-center gap-[1rem]">
                        <a href="mailto:work@ana117.com" target="_blank" class="hover:scale-125 transition duration-500">
                            <img src="assets/icons/objects/mail.svg" alt="mail" class="w-[2.5rem] dark:hidden">
                            <img src="assets/icons/objects/mail_light.svg" alt="mail" class="w-[2.5rem] hidden dark:block">
                        </a>
                        <a href="https://www.linkedin.com/in/ahmadnaufanw/" target="_blank" class="hover:scale-125 transition duration-500">
                            <img src="assets/icons/socials/linkedin.svg" alt="linkedin" class="w-[2.5rem] dark:hidden">
                            <img src="assets/icons/socials/linkedin_light.svg" alt="linkedin" class="w-[2.5rem] hidden dark:block">
                        </a>
                        <a href="https://github.com/ana117" target="_blank" class="hover:scale-125 transition duration-500">
                            <img src="assets/icons/socials/github.svg" alt="github" class="w-[2.5rem] dark:hidden">
                            <img src="assets/icons/socials/github_light.svg" alt="github" class="w-[2.5rem] hidden dark:block">
                        </a>
                        
                    </div>
                    <a href={Resume} download="Resume_AhmadNaufanW" target="_blank" class="flex items-center justify-between gap-x-[2rem] hover:scale-105 transition duration-500 rounded-lg border p-2 bg-primary dark:bg-secondary text-secondary dark:text-primary">
                        <span class="font-bold">Resume</span>
                        <img src="assets/icons/objects/cv.svg" alt="cv" class="w-[1.5rem] hidden dark:block">
                        <img src="assets/icons/objects/cv_light.svg" alt="cv" class="w-[1.5rem] dark:hidden">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <a href="#content">
        <img src="/assets/icons/objects/down_arrow.svg" alt="down arrow" class="w-[6rem] lg:w-[5rem] grow-0 animate-bounce dark:hidden">
        <img src="/assets/icons/objects/down_arrow_light.svg" alt="down arrow" class="w-[6rem] lg:w-[5rem] grow-0 animate-bounce hidden dark:block">
    </a>
</section>