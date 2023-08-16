<script lang="ts">
  export let title: string;
</script>

<div class="flex flex-col mr-4 last:mr-0">
  <strong>{title}</strong>
  <div class="flex border-[1px] mt-2 rounded-md border-gray-400">
    <slot />
  </div>
</div>
