<script>
import SidebarIcon from "$lib/components/SidebarIcon.svelte";
</script>

<nav class="h-screen w-[8rem] top-0 left-0 fixed
            bg-white shadow-lg px-[1rem]
            hidden md:flex flex-col gap-y-[2rem]">
    <SidebarIcon href="/" icon="logo" alt="logo" hover={false} customClass="w-[7rem] h-[7rem]" />
    <SidebarIcon href="#projects" icon="projects_white" alt="projects" tooltip="View Selected Projects" />
    <SidebarIcon href="#contact" icon="mail_white" alt="contact" tooltip="Contact Me" />
</nav>