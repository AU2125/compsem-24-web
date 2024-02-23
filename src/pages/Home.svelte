<svelte:head>
    <title>Home</title>
</svelte:head>
<script lang="ts">
    import {Link} from 'svelte-routing';
    import {onMount, onDestroy} from 'svelte';
    import Notification from '../lib/notification/Notification.svelte';
    import Footer from '../lib/Footer.svelte';

    import contacts from '../data/contacts.json';
    import notifications from '../data/notifications.json';

    

    let countdownInterval: any;
    let targetDate: any = new Date("2024-02-26T15:00:00");
    let timeLeft = Math.floor((targetDate - new Date())/ 1000);

    let compSemYear = 0;
    let comSemYearCounter: any;

    onMount(() => {
        comSemYearCounter = setInterval(() => {
            if (compSemYear < 24){
                compSemYear = (compSemYear + 1) % 100;
            } else {
                clearInterval(comSemYearCounter);
            }
        }, 50);

    });

    const committees = [
        {
            "name": "CSEA",
            "logo": "CSEA_LOGO.png"
        },
        {
            "name": "IEI",
            "logo": "IEI_LOGO.png"
        },
        {
            "name": "CSI",
            "logo": "CSI_LOGO.png"
        },


    ]

    const eventsCategories = [
        {
            "name": "Technical Events",
            "to": "events/technical"
        },
        {
            "name": "Non Technical Events",
            "to": "events/nontechnical"
        }
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



<!-- Add other elements here for overlay -->
<main class="snap-y absolute top-0 left-0 w-screen z-5">
    <section class="flex items-center justify-center w-full h-screen " >
        <!--
           - Hero Section
           -->
        <div class="flex flex-col items-center justify-center">
            <h1 class="lg:text-[12rem] md:text-[6rem] text-[3rem] mb-4 text-gray-100">
                <span class="animate-clip-text-from-below">Comp</span><span class="animate-clip-text-from-above">Sem</span><span
                class="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-red-400">'{compSemYear}</span>
            </h1>
            <div class="border-red-400 border-2  text-sm md:text-lg border py-3 rounded-md px-4 flex flex-col items-center">
                <p class="text-red-400">Starting in</p>
                <span class="flex gap-2 text-gray-900 bg-gray-900 rounded-md justify-between mt-2">
                    {#each Object.entries(countdown) as [key, value]}
                    <span class="text-center text-sm text-rose-400 md:text-md w-14  p-2 rounded-md ">
                        <p>{value}</p>
                        <p>{key}</p>
                    </span>
                    {/each}
                </span>
            </div>
        </div>
    </section>

    {#if notifications.length > 0}

    <section class="flex flex-col items-center px-8 py-12 px-4 md:px-24  max-h-1/3 ">
        <!--
           - Notification Section
           -->
        <h2 class="text-2xl text-gray-300 font-semibold mb-4">Notifications</h2>
        <Notification notifications={notifications}/>
    </section>

    {/if}
    <section class="py-12 px-8 md:py-24 md:px-32 w-full ">
        <!--
           - About Department Section
           -->
        <div class="bg-gray-900 py-8 px-10 rounded-md">
           <h2 class="text-xl md:text-2xl text-gray-300 font-semibold self-start mb-4 md:mb-12">About Department</h2>
           <p class="text-gray-300 text-justify indent-8 text-xs leading-tight md:text-lg mt-6">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
           </p>

        </div>
    </section>
    <section class="flex flex-col items-center p-8 lg:py-24 lg:px-48 w-full">
        <!--
           - Committee Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-200 mb-12 font-semibold">Committees</h2>
        <div class="flex items-center px-8 py-8 md:py-16 bg-gray-800  text-xs md:text-lg text-slate-300 rounded-lg justify-around w-full ">
            {#each committees as comm}
            <div class="flex flex-col items-center w-16 md:w-24">
                <img class=" object-center object-cover w-full" src="/compsem-24-web/{comm.logo}" alt="">
                <p class="mt-2 md:mt-6">{comm.name}</p>
            </div>
            {/each}
        </div>
    </section>
    <section class="py-12 px-8 md:py-24 md:px-32 w-full">
        <!--
           - About Tech Club Section
           -->
        <div class="bg-gray-900 py-8 px-10 rounded-md">
           <h2 class="text-xl md:text-2xl text-gray-300 font-semibold self-start mb-4 md:mb-12">About Tech Club</h2>
           <p class="text-gray-300 text-justify indent-8 text-xs leading-tight md:text-lg mt-6">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
           </p>

        </div>
    </section>
    <section class="py-12 px-8 md:py-32 text-gray-300 md:px-32 w-full ">
        <!--
           - History of CompSem Section
           -->
        <h2 class="text-xl md:text-2xl  font-semibold self-start mb-4 md:mb-12">History of CompSem</h2>
           <p class="text-justify indent-8 mt-6 text-xs md:text-lg leading-tight">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
           </p>
    </section>
    <section class="flex flex-col items-center justify-center w-full p-6 lg:px-32 ">
        <!--
           - Event Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Events</h2>
        <div class="flex gap-3 lg:gap-4 items-center justify-around rounded-md bg-gray-900 py-6 md:p-12 w-full ">
            {#each eventsCategories as ev}
                <Link
                    to='compsem-24-web/{ev.to}'
                    class="text-xs text-gray-100 md:text-lg hover:scale-110 hover:text-2xl border-rose-500 border-2 h-24 md:h-80 w-24 md:w-80 flex justify-center items-center p-4 md:p-4 rounded-md  shadow-lg shadow-rose-500/50">
                    <p>{ev.name}</p>
                </Link>
            {/each}
        </div>
    </section>
    <section id="contacts" class="flex flex-col w-full lg:px-32 justify-center items-center py-6">
        <!--
           - Contact Us
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Contact Us</h2>
        <div class="text-[8px] text-gray-300 md:text-sm p-8 bg-gray-800 rounded-md flex justify-around w-full">
            {#each contacts as contact}
            <div class="text-center ">
                <p class="md:text-lg font-semibold">{contact.name}</p>
                <p>{contact.designation}</p>
                <a href="tel:{contact.phone}" class="text-rose-400 text-[6px] md:text-sm"><span class="hidden md:inline text-gray-300" >Phone: </span>{contact.phone}</a><br/>
                <a href="mailto:{contact.email}" class="text-rose-400 text-[6px] md:text-sm"><span class="hidden md:inline text-gray-300" >Email: </span>{contact.email}</a>
            </div>
            {/each}
        </div>
    </section>
    <Footer />
</main>



