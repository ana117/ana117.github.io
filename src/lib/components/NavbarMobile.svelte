<script>
    import SidebarIcon from "$lib/components/SidebarIcon.svelte";
    import DarkModeSwitch from "$lib/components/DarkModeSwitch.svelte";

    let showMenu = false;

    function toggle() {
        showMenu = !showMenu;
    }
</script>

<nav class="md:hidden z-50">
    <button on:click={toggle}
            class="flex items-center justify-center bg-primary {showMenu ? 'rounded-b-[3rem]' : 'rounded-[3rem]'}
                   w-[5rem] h-[5rem] fixed bottom-[2rem] right-[1rem] transition-all duration-100 no-highlight z-10">
        <SidebarIcon icon="logo_light" alt="logo" hover={false}/>
    </button>
    <div class="bg-primary rounded-t-3xl {showMenu ? 'scale-100' : 'scale-0'} z-10
                w-[5rem] fixed bottom-[7.5rem] right-[1rem] px-[1rem] pb-[0.5rem]
                transition-all origin-bottom duration-100">
                
        <SidebarIcon href="/#experiences" icon="briefcase" alt="experiences"/>
        <SidebarIcon href="/#projects" icon="codes" alt="projects"/>
        <SidebarIcon href="/#contact" icon="mail_light" alt="contact"/>
        <DarkModeSwitch/>
    </div>
</nav>