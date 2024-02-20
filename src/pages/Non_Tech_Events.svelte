<script lang="ts">

    import Events from '../lib/Events/Event.svelte';

    const events = [
            {
                "heading": "Technical Quiz",
            },
            {
                "heading": "Technical Connection",
            },
            {
                "heading": "Coding Challenge",
            },
            {
                "heading": "Debugging",
            },
            {
                "heading": "Aptitude and Reasoning",
            },
            {
                "heading": "Poster Design",
            },
            {
                "heading": "Web Design",
            },
            {
                "heading": "UI / UX Design",
            },
            {
                "heading": "Paper Presentation",
            },
        ]
</script>

<main class="snap-y">
    <section class="flex flex-col items-center w-full h-screen bg-slate-600">
        <!--
           - Event Section
           -->
        <h2 class="text-5xl text-white mt-20 mb-12">Non-Technical Events</h2>
        <div class="flex flex-wrap items-stretch justify-evenly gap-4">
            <Events events = {events} />
            
        </div>
    </section>

</main>
