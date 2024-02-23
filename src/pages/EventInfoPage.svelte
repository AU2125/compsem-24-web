<script lang="ts">
    import events from '../data/events.json';
    import type {IEvent} from '../lib/common';
    import {calcDate} from '../lib/common';

    export let eventId: string;
    const eventDetails: IEvent = events.find((e) => e.to == eventId) || events[0]

    const evType = eventDetails.type == "technical" ? "Technical Events" : "Non-Technical Events";

</script>


<div class="w-screen h-screen bg-black fixed top-0 left-0 -z-5"></div>
<main class="snap-y absolute top-0 left-0 w-screen">

    <section class=" gap-4 px-16 flex md:p-16 flex-col justify-center items-center">
        <div class="md:w-3/4 border-red-400 border-2 text-white mt-40 w-full p-6 gap-8  flex flex-col md:flex-row justify-between items-center rounded-md">
            <div class="flex flex-col justify-center  md:justify-evenly items-start">
                <h1 class="text-2xl md:text-6xl">{eventDetails.heading}</h1>
                <div class="flex w-full items-center flex-col md:px-4 mt-4 text-center">
                    <p>{evType}</p>
                    <p>{calcDate(new Date(eventDetails.scheduledDate))}</p>
                </div>
            </div>
            <a class="border-2 border-red-400 px-8 rounded-md py-6" href="{eventDetails.form}">Register !</a>
        </div>
        <div class="md:w-3/4 text-white border-red-400 border-2 p-6 w-full rounded-md">
            <h2 class="text-xl md:text-4xl">Description</h2>
            <p class="w-full indent-5 py-4 md:p-8 text-sm">{eventDetails.description}</p>
            <h2 class="text-xl md:text-4xl">Handlers</h2>
            <div class="w-full flex mt-8 -p-2 justify-between md:justify-around">
                <div>
                    <h3 class="text-center text-xs md:text-2xl">Student Co-ordinators</h3>
                    <ul class="flex flex-col md:px-5 py-2 mt-4 justify-between md:justify-around">
                        {#each eventDetails.students as stdu}
                            <li class="p-2 rounded-md">
                                <p class="font-bold text-xs md:text-lg">{stdu.name}</p>
                                <a class="text-sky-600 text-xs md:text-lg" href="tel:{stdu.phone}">{stdu.phone}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <h3 class="text-center text-xs md:text-2xl">Staffs Co-ordinators</h3>
                    <ul class="flex flex-col md:px-5 py-2 mt-4 justify-between md:justify-around">
                        {#each eventDetails.staffs as staff}
                            <li class="p-2 rounded-md">
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
