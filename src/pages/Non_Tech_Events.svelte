<script lang="ts">

    import Events from '../lib/Events/Event.svelte';

    const events = [
            {
                "heading": "Essay",
            },
            {
                "heading": "Brain Teaser",
            },
            {
                "heading": "Speech Competition (Elocution)",
            },
            {
                "heading": "Debate",
            },
            {
                "heading": "Skit",
            },
            {
                "heading": "Group Discussion",
            },
            {
                "heading": "Photography",
            },
            {
                "heading": "Treasure Hunt",
            },
            {
                "heading": "Meme Creation",
            },
            {
                "heading": "Poetry",
            },
            {
                "heading": "Cook without fire",
            },
            {
                "heading": "E-Sports",
            },
            {
                "heading": "Drawing",
            },
        ]
</script>

<main class="snap-y">
    <section class="flex flex-col items-center w-full h-full bg-slate-600">
        <!--
           - Event Section
           -->
        <h2 class="text-5xl text-white mt-20 mb-12">Non-Technical Events</h2>
        <div class="flex flex-wrap items-stretch justify-evenly gap-4">
            <Events events = {events} />
            
        </div>
    </section>

</main>
