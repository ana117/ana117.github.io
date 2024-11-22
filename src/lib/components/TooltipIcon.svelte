<script lang="ts">
  export let imageUri: string;
  export let alt: string;
  export let tooltip: string;

  const handleIconFallback = (e: Event) => {
      (e.target as HTMLImageElement).src = '/assets/icons/objects/question_mark.svg';
  }
</script>

<div class="flex">
  <div class="relative group/tech">
    <img src={imageUri} alt="{alt}" class="w-[3rem] z-0" on:error={handleIconFallback}>
    <div class="bg-primary text-white rounded-md px-[0.5rem]
                absolute top-0 left-16 h-full z-10
                hidden group-hover/tech:lg:flex items-center">
      <p class="text-xl font-semibold px-[0.5rem]">
          {tooltip}
      </p>
    </div>
  </div>
</div>