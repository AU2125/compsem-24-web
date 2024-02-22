<script lang="ts">
    import EventItem from "./EventItem.svelte";
    interface Ievent {
        heading: string,
        type: string,
        oneliner: string,
        scheduledDate: Date,
        to: string,
    };

    export let events: Ievent[];
</script>

<div class="flex flex-wrap items-stretch justify-evenly gap-4">
    {#each events as event}
    <EventItem to={event.to} heading={event.heading} date={event.scheduledDate} oneliner={event.oneliner} />
    {/each}
</div>

