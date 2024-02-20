<script lang="ts">
    import {onMount, onDestroy} from 'svelte';
    import Notification from '../lib/notification/Notification.svelte';

    let countdown: any;
    let targetDate: any = new Date("2024-02-26T15:00:00");
    let timeLeft = Math.floor((targetDate - new Date())/ 1000);



    const notifications = [
        {
            "heading": "Heading 1",
            "content": "some text for heading"
        },
        {
            "heading": "Heading 2",
            "content": "some text for heading"
        },
        {
            "heading": "Heading 3",
            "content": "some text for heading"
        },
        {
            "heading": "Heading 4",
            "content": "some text for heading"
        },
        {
            "heading": "Heading 5",
            "content": "some text for heading"
        },
    ]


    onMount(() => {
        countdown = setInterval(() => {
          if (timeLeft > 0) {
                timeLeft--;
          } else {
            clearInterval(countdown);
          }
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(countdown);
    });
    console.log(timeLeft);
    function formatTime(seconds: number) {
        const days = Math.floor(seconds/ 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${days} days ${hours} h ${minutes} m ${remainingSeconds} s`;
    }
</script>

<main>
    <section class="flex items-center justify-center w-full h-screen bg-slate-600">
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-[128px] text-gray-200">CompSem'24</h1>
            <p class="text-gray-900">Starting in</p>
            <p class="text-gray-900">{formatTime(timeLeft)}</p>
        </div>
    </section>


    <section class="flex flex-col items-center p-48 w-full h-screen bg-slate-300">
        <!--
           - Notification Section
           -->
        <h2 class="text-2xl text-gray-900 mb-12">Notifications</h2>
        <Notification notifications={notifications}/>
    </section>
    <section class="flex flex-col items-center justify-center w-full h-screen bg-slate-600">
        <!--
           - About Compsem Section
           -->
        <h2 class="text-2xl text-gray-900 mb-12">Events</h2>
        <div class="flex justify-between px-8 w-2/3">
            <div class="h-80 w-80 flex justify-center items-center p-4 rounded-md bg-blue-200">
                Technical Events
            </div>
            <div class="h-80 w-80 flex justify-center items-center p-4 rounded-md bg-blue-200">
                Non-Technical Events
            </div>
        </div>
    </section>
    <section class="flex flex-col items-center justify-center w-full h-screen bg-slate-300">
        <!--
           - Event Section
           -->
        <h2 class="text-2xl text-gray-900 mb-12">Events</h2>
        <div class="flex justify-between px-8 w-2/3">
            <div class="h-80 w-80 flex justify-center items-center p-4 rounded-md bg-blue-200">
                Technical Events
            </div>
            <div class="h-80 w-80 flex justify-center items-center p-4 rounded-md bg-blue-200">
                Non-Technical Events
            </div>
        </div>
    </section>

</main>
