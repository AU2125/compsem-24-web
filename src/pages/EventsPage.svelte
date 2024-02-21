<script lang="ts">
    import events from '../data/events.json';
    import Events from '../lib/Events/Event.svelte';
    export let evType: string;


    const title = evType == "technical" ? "Technical Events" : "Non-Technical Events";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>


<main class="snap-y">
    <section class="flex flex-col z-10 absolute top-0 left-0 items-center w-full h-screen bg-slate-600">
        <!--
           - Event Section
           -->
        <h2 class="text-5xl text-white mt-20 mb-12">
            {title}
        </h2>
        <div class="flex flex-wrap items-stretch justify-evenly gap-4">
            <Events events = {events.filter((e) => e.type==evType).map((e) => ({...e, "scheduledDate": new Date(e["scheduledDate"])}))} />
        </div>
    </section>

</main>
