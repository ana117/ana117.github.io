<script lang="ts">
    import "../app.css";
    import SidebarIcon from "$lib/components/SidebarIcon.svelte";
</script>

<nav class="h-screen w-[8rem] top-0 left-0 fixed
            bg-white shadow-lg px-[1rem]
            flex flex-col gap-y-[2rem]">
    <SidebarIcon href="/" icon="logo" alt="logo" hover={false} customClass="w-[7rem] h-[7rem]" />
    <SidebarIcon href="#projects" icon="projects" alt="projects" tooltip="View Selected Projects" />
    <SidebarIcon href="#contact" icon="mail" alt="contact" tooltip="Contact Me" />
</nav>

<slot />

<footer class="py-[2rem] mt-[2rem] ml-[8rem] bg-secondary text-center">
    <p class="text-bg font-semibold text-3xl md:text-lg">
        © 2023 Ahmad Naufan
    </p>
</footer>