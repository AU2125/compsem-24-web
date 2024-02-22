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

    <section class="bg-gray-800  gap-4 flex p-8 flex-col justify-center items-center">
        <div class="w-3/4 bg-slate-500 mt-40 p-6 flex justify-between items-center rounded-md">
            <div class="flex flex-col justify-evenly items-start">
                <h1 class="text-6xl">{eventDetails.heading}</h1>
                <span class="px-4 mt-4">
                    <p>{evType}</p>
                    <p>{calcDate(new Date(eventDetails.scheduledDate))}</p>
                </span>
            </div>
            <a class="bg-gray-300 px-8 rounded-md py-6" href="{eventDetails.form}">Register !</a>
        </div>
        <div class="w-3/4 bg-slate-500 p-6 rounded-md">
            <h2 class="text-4xl">Description</h2>
            <p class="w-full indent-5 p-8">{eventDetails.description}</p>
            <h2 class="text-4xl">Handlers</h2>
            <div class="w-full flex mt-8 justify-around">
                <div>
                    <h3 class="text-center text-2xl">Student Co-ordinators</h3>
                    <ul class="flex flex-col px-5 py-2 mt-4 justify-around">
                        {#each eventDetails.students as stdu}
                            <li class="p-2  rounded-md">
                                <p class="font-bold">{stdu.name}</p>
                                <a class="text-sky-600" href="tel:{stdu.phone}">{stdu.phone}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <h3 class="text-center text-2xl">Staffs Co-ordinators</h3>
                    <ul class="flex flex-col px-5 py-2 mt-4 justify-around">
                        {#each eventDetails.staffs as staff}
                            <li >
                                <p class="font-bold">{staff.name}</p>
                                <p >{staff.designation}</p>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>

</main>
