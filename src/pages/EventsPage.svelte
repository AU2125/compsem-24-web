<script lang="ts">
    import events from '../data/events.json';
    import Events from '../lib/Events/Event.svelte';
    import Footer from '../lib/Footer.svelte';
    export let evType: string;


    const title = evType == "technical" ? "Technical Events" : "Non-Technical Events";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>


<main class="snap-y h-screen w-screen">
    <section class="flex overflow-x-hidden  py-14 flex-col absolute min-h-screen top-0 left-0 items-center w-full ">
        <!--
           - Event Section
           -->
        <h2 class="text-2xl md:text-5xl text-white mt-32">
            {title}
        </h2>
        <Events events = {
            events.filter((e) => e.type==evType)
                .map((e) => ({...e, "scheduledDate": new Date(e["scheduledDate"])}
                ))} />
    </section>

    <Footer />
</main>
