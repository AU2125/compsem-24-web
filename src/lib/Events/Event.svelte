<script lang="ts">
    import EventItem from "./EventItem.svelte";
    import type {IEvent} from '../common';
    export let events: IEvent[];
</script>

<div class="flex flex-wrap items-stretch justify-evenly gap-4">
    {#each events as event}
    <EventItem to={event.to} heading={event.heading} date={event.scheduledDate} oneliner={event.oneliner} />
    {/each}
</div>

