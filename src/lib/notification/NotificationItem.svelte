<!--
   - Notification Component
   -->
<script lang="ts">
    export let heading: string;
    export let content: string;
</script>


<div class="min-w-0.5 bg-slate-400 p-4 rounded-md">
    <h3 class="text-lg mb-4">{heading}</h3>
    <p class="text-sm">{content}</p>
</div>
