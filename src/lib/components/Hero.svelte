<script>
    import Resume from '$lib/data/Resume_AhmadNaufanW.pdf';
</script>

<section id="hero" class="flex flex-col justify-center items-center py-[1rem] h-screen bg-secondary dark:bg-accent">
    <div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[4rem] grow relative z-0 px-[1rem] lg:px-[4rem] text-primary dark:text-secondary">
        <img src="/assets/icons/logo.svg" alt="logo" class="w-[16rem] xl:w-[32rem] dark:hidden">
        <img src="/assets/icons/logo_light.svg" alt="logo" class="w-[16rem] xl:w-[32rem] hidden dark:block">

        <div class="flex flex-col gap-[1rem]">
            <h1 class="font-bold text-4xl text-center lg:text-start lg:text-4xl">
                <span>Greetings!</span> 
                <span class="lg:whitespace-nowrap">I'm Ahmad Naufan</span>
            </h1>
            <p class="text-xl text-center lg:text-start">
                Full Stack Developer 
                <span class="hidden lg:inline">
                    • Bachelor of Computer Science from University of Indonesia
                </span>
            </p>

            <div class="flex flex-col lg:flex-row flex-wrap justify-center md:justify-between gap-[1rem]">
                <span class="flex justify-center items-center gap-[0.5rem]">
                    <img src="/assets/icons/location.svg" alt="location" class="w-[2rem] md:w-[2rem] dark:hidden">
                    <img src="/assets/icons/location_light.svg" alt="location"class="w-[2rem] md:w-[2rem] hidden dark:block">
                    South Tangerang, Indonesia
                </span>
                
                <div class="flex justify-center gap-[1rem]">
                    <a href="mailto:anaufan11@gmail.com" target="_blank" class="hover:scale-125 transition duration-500">
                        <img src="assets/icons/mail.svg" alt="mail" class="w-[2.5rem] dark:hidden">
                        <img src="assets/icons/mail_light.svg" alt="mail" class="w-[2.5rem] hidden dark:block">
                    </a>
                    <a href="https://www.linkedin.com/in/ahmadnaufanw/" target="_blank" class="hover:scale-125 transition duration-500">
                        <img src="assets/icons/linkedin.svg" alt="linkedin" class="w-[2.5rem] dark:hidden">
                        <img src="assets/icons/linkedin_light.svg" alt="linkedin" class="w-[2.5rem] hidden dark:block">
                    </a>
                    <a href="https://github.com/ana117" target="_blank" class="hover:scale-125 transition duration-500">
                        <img src="assets/icons/github.svg" alt="github" class="w-[2.5rem] dark:hidden">
                        <img src="assets/icons/github_light.svg" alt="github" class="w-[2.5rem] hidden dark:block">
                    </a>
                    
                    <a href={Resume} target="_blank" download class="hover:scale-125 transition duration-500">
                        <img src="assets/icons/cv.svg" alt="cv" class="w-[2.5rem] dark:hidden">
                        <img src="assets/icons/cv_light.svg" alt="cv" class="w-[2.5rem] hidden dark:block">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <a href="#content">
        <img src="/assets/icons/down_arrow.svg" alt="down arrow" class="w-[6rem] lg:w-[5rem] grow-0 animate-bounce dark:hidden">
        <img src="/assets/icons/down_arrow_light.svg" alt="down arrow" class="w-[6rem] lg:w-[5rem] grow-0 animate-bounce hidden dark:block">
    </a>
</section>