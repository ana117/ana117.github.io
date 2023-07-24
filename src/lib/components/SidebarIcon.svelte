<script lang="ts">
    export let icon, alt, href, tooltip, customClass : string;
    export let hover : boolean = true;


    let hoverClass : string = hover ?
        "bg-primary rounded-[3rem] hover:bg-accent hover:rounded-[1.5rem] transition-all duration-300 ease-linear"
        : "";
</script>

<a {href} class="{hoverClass} group">
    <div class="relative">
        <img src="/assets/{icon}.svg" {alt} class="w-[4rem] h-[4rem] mx-auto my-4 {customClass}" />
        {#if hover}
            <span class="absolute left-32 top-0 mt-[0.5rem] min-w-max px-[1rem] py-[0.5rem]
                         text-white font-bold
                         bg-accent rounded-md
                         transition-all duration-200 scale-0 origin-left group-hover:scale-100">
                {tooltip}
            </span>
        {/if}
    </div>
</a>