<script>
import SidebarIcon from "$lib/components/SidebarIcon.svelte";
import DarkModeSwitch from "$lib/components/DarkModeSwitch.svelte";
</script>

<nav class="h-screen w-[8rem] top-0 left-0 fixed px-[1rem]
            bg-white shadow-lg dark:bg-primary
            hidden md:flex flex-col z-10">
    <SidebarIcon href="/" icon="logo" alt="logo" hover={false} customClass="w-[7rem] h-[7rem] dark:hidden" />
    <SidebarIcon href="/" icon="logo_light" alt="logo" hover={false} customClass="w-[7rem] h-[7rem] hidden dark:flex" />
    <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col gap-y-[2rem] mt-[2rem]">
            <SidebarIcon href="/#experiences" icon="briefcase" alt="experiences" tooltip="Experiences" />
            <SidebarIcon href="/#projects" icon="codes" alt="projects" tooltip="View Selected Projects" />
            <SidebarIcon href="/#contact" icon="mail_light" alt="contact" tooltip="Contact Me" />
        </div>
        <div class="mb-[2rem] bg-primary dark:bg-accent p-[1rem] rounded-full">
            <DarkModeSwitch />
        </div>
    </div>
</nav>