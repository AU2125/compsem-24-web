<!--
   - Notification Component
   -->
<script lang="ts">
    export let heading: string;
    export let content: string;
</script>


<div class="min-w-0.5 border-2 border-rose-400 bg-gray-800/60 text-gray-100 shadow-md shadow-rose-400/50 p-2 md:p-4 rounded-md">
    <h3 class="md:text-lg mb-2 md:mb-4">{heading}</h3>
    <p class="text-xs md:text-md">{content}</p>
</div>
