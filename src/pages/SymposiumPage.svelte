<svelte:head>
    <title>Symposium'24</title>
</svelte:head>
<script lang="ts">
    import {onMount} from 'svelte';
    import Footer from '../lib/Footer.svelte';
    import coordinators from '../data/sympCoordinators.json';

    import {sym} from '../lib/store';
    sym.set(true);


    let compSemYear = 0;
    let comSemYearCounter: any;

    onMount(() => {
        comSemYearCounter = setInterval(() => {
            if (compSemYear < 24){
                compSemYear = (compSemYear + 1) % 100;
            } else {
                clearInterval(comSemYearCounter);
            }
        }, 30);

    });
</script>



<!-- Add other elements here for overlay -->
<main class="snap-y absolute top-0 left-0 w-screen z-5">
    <section class="flex items-center justify-center w-full h-screen " >
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="lg:text-[12rem] md:text-[6rem] text-[3rem] mb-4 text-gray-100">
                <span class="animate-clip-text-from-below font-anta">TechFusion</span><span
                class="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-400 font-anta">'{compSemYear}</span>
            </h1>
            <div class="border-red-400 border-2  text-sm md:text-lg border py-3 rounded-md px-4 flex flex-col items-center">
                <p class="text-red-400">On</p>
                <span class="flex gap-2 text-gray-900 bg-gray-800/40 backdrop-blur-sm rounded-md justify-between mt-2">
                   <span class="text-center  text-rose-400 md:text-md p-6 md:text-2xl rounded-md ">
                    45-85-2224
                   </span>
                </span>
            </div>
        <a href="https://google.com" class="md:text-2xl border-2 border-slate-800 bg-gray-800 mt-8 bg-gray-100 inline-flex text-center text-rose-500  backdrop-blur-sm rounded">
            <p class="px-4 font-anta py-2">Register Now</p>
        </a>
    </section>

    <section class="flex flex-col w-full lg:px-32 justify-center items-center p-6">
        <!--
           - Coordinators Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Coordinators</h2>
        <div class="text-[8px] sm:text-xs text-gray-300 gap-2 p-3 md:text-sm md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-md grid grid-rows-1 grid-cols-2 ">
            {#each coordinators as contact}
            <div class="text-center p-1 md:p-4">
                <p class="font-anta md:text-lg font-semibold">{contact.name}</p>
                <p>{contact.designation}</p>
                <a href="tel:{contact.phone}" class="text-rose-400  md:text-sm"><span class="hidden md:inline text-gray-300" >Phone: </span>{contact.phone}</a><br/>
                <a href="mailto:{contact.email}" class="text-rose-400  md:text-sm"><span class="hidden md:inline text-gray-300" >Email: </span>{contact.email}</a>
            </div>
            {/each}
        </div>
    </section>
    <Footer />
</main>



