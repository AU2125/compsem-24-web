<script lang="ts">
    import events from '../data/events.json';
    import type {IEvent} from '../lib/common';
    import {calcDate} from '../lib/common';

    export let eventId: string;
    const eventDetails: IEvent = events.find((e) => e.to == eventId) || events[0]

    const evType = eventDetails.type == "technical" ? "Technical Events" : "Non-Technical Events";

</script>


<div class="w-screen h-screen  fixed top-0 left-0 -z-5"></div>
<main class="snap-y absolute top-0 left-0 w-screen">

    <section class=" gap-4 px-8 flex md:p-16 flex-col justify-center items-center">
        <div class="md:w-3/4 border-red-400 border-2 text-white mt-40 w-full p-6 gap-8  flex flex-col md:flex-row justify-between items-center rounded-md backdrop-blur-sm bg-gray-800/40">
            <div class="flex flex-col justify-center  md:justify-evenly items-start">
                <h1 class=" font-anta text-2xl md:text-6xl">{eventDetails.heading}</h1>
                <div class="flex w-full items-center flex-col md:px-4 mt-4 text-center">
                    <p>{evType}</p>
                    <p>{calcDate(new Date(eventDetails.scheduledDate))}</p>
                </div>
            </div>
            {#if (eventDetails.scheduledDate - new Date() >= 0)}
                <p class="text-green-500 px-8 rounded-md py-6">On Going</p>
            {:else if (new Date() - eventDetails.scheduledDate > 2 * 3600 * 1000)}
                <p class="text-green-500 px-8 rounded-md py-6">Completed</p>
            {:else if  eventDetails.form != null}
                <a class="block border-2 border-red-400 px-8 rounded-md py-6 group" href="{eventDetails.form}"><span class="group-hover:text-lg tansition transition-all duration-100">Register !</span></a>
            {:else}
                <p class="text-red-500 px-8 rounded-md py-6">Registration Not Available</p>
            {/if}
        </div>
        <div class="md:w-3/4 text-white border-red-400 border-2 p-6 w-full rounded-md backdrop-blur-sm bg-gray-800/40">
            <h2 class="text-xl md:text-4xl">Description</h2>
            <p class="w-full indent-5 text-justify py-4 md:p-8 text-sm md:text-base">{eventDetails.description}</p>
            <h2 class="text-xl md:text-4xl">Handlers</h2>
            <div class="w-full flex mt-8 -p-2 justify-between md:justify-around">
                <div>
                    <h3 class="font-anta text-center text-xs md:text-2xl">Student Co-ordinators</h3>
                    <ul class="flex gap-2 flex-col md:px-5 py-2 mt-4 items-center justify-between md:justify-around">
                        {#each eventDetails.students as stdu}
                            <li class="w-full rounded-md">
                                <p class="font-bold text-xs md:text-lg">{stdu.name}</p>
                                <a class="text-rose-400 text-xs md:text-lg" href="tel:{stdu.phone}">+91 {stdu.phone}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <h3 class="font-anta text-center text-xs md:text-2xl">Staffs Co-ordinators</h3>
                    <ul class="flex flex-col gap-2 md:px-5 py-2 mt-4 justify-between md:justify-around">
                        {#each eventDetails.staffs as staff}
                            <li class="w-full rounded-md">
                                <p class="font-bold text-xs md:text-lg">{staff.name}</p>
                                <p class="text-xs md:text-lg">{staff.designation}</p>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>
