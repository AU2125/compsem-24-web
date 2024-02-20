<svelte:head>
    <title>Home</title>
</svelte:head>
<script lang="ts">
    import {onMount, onDestroy} from 'svelte';
    import Notification from '../lib/notification/Notification.svelte';


    let countdownInterval: any;
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

    let countdown: {
        days: number,
        hrs: number,
        mins: number,
        secs: number
    } = formatTime(timeLeft);

    onMount(() => {
        countdownInterval = setInterval(() => {
          if (timeLeft > 0) {
                timeLeft--;

                countdown = formatTime(timeLeft);

          } else {
            clearInterval(countdownInterval);
          }
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(countdownInterval);
    });
    function formatTime(seconds: number) {
        const days = Math.floor(seconds / 86400);
        const hrs = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds% 3600) / 60);
        const secs = seconds % 60;
        return {
            days, hrs, mins, secs
        }
    }
</script>

<main class="snap-y">
    <section class="flex items-center justify-center w-full h-screen bg-slate-600" >
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="lg:text-[12rem] md:text-[6rem] text-[3rem] mb-4 text-gray-100">CompSem<span class="text-gray-800">'24</span></h1>
            <div class="text-gray-800 text-sm md:text-lg bg-slate-400 py-3 rounded-md px-4 flex flex-col items-center">
                <p>Starting in</p>
                <span class="flex gap-2 text-gray-900 justify-between mt-2">
                    {#each Object.entries(countdown) as [key, value]}
                    <span class="text-center w-14 bg-gray-100 p-2 rounded-md ">
                        <p>{value}</p>
                        <p>{key}</p>
                    </span>
                    {/each}
                </span>
            </div>
            <button
                class="text-gray-200 lg:text-2xl hover:text-gray-100 hover:bg-slate-700 px-8 py-4 mt-8 bg-slate-800 rounded-md">
                I'm Excited!
            </button>
        </div>
    </section>


    <section class="flex flex-col hidden items-center py-12 px-48 w-full max-h-1/3 bg-slate-300">
        <!--
           - Notification Section
           -->
        <h2 class="text-2xl text-gray-900 mb-12">Notifications</h2>
        <Notification notifications={notifications}/>
    </section>
    <section class="py-48 px-32 w-full hidden h-screen bg-slate-600">
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
    <section class="flex flex-col items-center hidden justify-center w-full h-screen bg-slate-300">
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
