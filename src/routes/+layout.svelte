<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import NavbarMobile from "$lib/components/NavbarMobile.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://www.ana117.com/"/>
</svelte:head>

<Navbar/>
<NavbarMobile/>

<div class="flex flex-col min-h-screen">
    <div class="md:ml-[8rem] dark:bg-black flex flex-col grow">
        <slot/>
    </div>
    <Footer/>
</div>

