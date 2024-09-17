<script lang="ts">
    import { page } from "$app/stores";

    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import NavbarMobile from "$lib/components/NavbarMobile.svelte";

    const image = "/assets/icons/logo.svg";
    const title = "Ahmad Naufan Wicaksonoputra's Portfolio";
    const description = "Ahmad Naufan Wicaksonoputra's (ana117) portfolio website showcasing experiences, projects, skills, and contact information.";

    const domain = "https://ana117.github.io";  
    const path = $page.url.pathname;
    const url = domain + path;    
</script>

<svelte:head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
    
    <meta name="description" content={description} />
    
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
</svelte:head>

<Navbar/>
<NavbarMobile/>

<div class="flex flex-col min-h-screen">
    <div class="md:ml-[8rem] dark:bg-black grow">
        <slot/>
    </div>
    <Footer/>
</div>

