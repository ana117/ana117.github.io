<script lang="ts">
    export let text: string;
    export let rel: string;
    export let target="_blank";
    export let css="";
</script>

<a href={rel} target={target} class="underline underline-offset-4 decoration-accent dark:decoration-secondary hover:bg-accent hover:text-white hover:dark:bg-secondary hover:dark:text-black duration-500 transition-all origin-bottom {css}">
    {text}
</a>