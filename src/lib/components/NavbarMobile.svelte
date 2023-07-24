<script>
    import SidebarIcon from "$lib/components/SidebarIcon.svelte";

    let showMenu = false;

    function toggle() {
        showMenu = !showMenu;
    }
</script>

<nav class="md:hidden">
    <button on:click={toggle}
            class="flex items-center justify-center bg-primary {showMenu ? 'rounded-b-[3rem]' : 'rounded-[3rem]'}
                   w-[5rem] h-[5rem] fixed bottom-[2rem] right-[1rem] transition-all duration-100 no-highlight">
        <SidebarIcon href="" icon="logo_white" alt="logo" hover={false}/>
    </button>
    <div class="bg-primary rounded-t-3xl {showMenu ? 'scale-100' : 'scale-0'} z-10
                w-[5rem] fixed bottom-[7.5rem] right-[1rem] px-[1rem] transition-all origin-bottom duration-100">
        <SidebarIcon href="#projects" icon="projects_white" alt="projects"/>
        <SidebarIcon href="#contact" icon="mail_white" alt="contact"/>
    </div>
</nav>