<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import NavbarMobile from "$lib/components/NavbarMobile.svelte";
</script>

<Navbar />
<NavbarMobile />

<slot />

<Footer />