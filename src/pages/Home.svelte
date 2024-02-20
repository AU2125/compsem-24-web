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

<main class="snap-y">
    <section class="flex items-center justify-center w-full h-screen bg-slate-600">
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-[186px] text-gray-200">CompSem'24</h1>
            <p class="text-gray-900">Starting in</p>
            <p class="text-gray-900">{formatTime(timeLeft)}</p>
            <button
                class="text-gray-200 text-2xl hover:text-gray-100 hover:bg-slate-700 px-8 py-4 mt-8 bg-slate-800 rounded-md">
                I'm Exicted!
            </button>
        </div>
    </section>


    <section class="flex flex-col items-center py-12 px-48 w-full max-h-1/3 bg-slate-300">
        <!--
           - Notification Section
           -->
        <h2 class="text-2xl text-gray-900 mb-12">Notifications</h2>
        <Notification notifications={notifications}/>
    </section>
    <section class="py-48 px-32 w-full h-screen bg-slate-600">
        <!--
           - About Department Section
           -->
        <h2 class="text-2xl text-gray-300 font-semibold self-start mb-12">About Department</h2>
        <div class="flex justify-between w-3/4">
            <p class="text-gray-300">
                This is some text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem cupiditate eveniet sed
                neque porro quaerat temporibus quia minima dolore? Minima aut est nostrum. Ad mollitia vitae
                tenetur impedit nulla nostrum autem!
            </p>
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
