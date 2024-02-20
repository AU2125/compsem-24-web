<script lang="ts">
    import EventItem from "./EventItem.svelte";
    interface Ievent {
        heading: string
    };

    export let events: Ievent[];
</script>

<div class="flex flex-wrap items-stretch justify-evenly gap-4">
            {#each events as event}
            <EventItem heading={event.heading} />
            {/each}
</div>
  
