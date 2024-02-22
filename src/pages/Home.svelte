<svelte:head>
    <title>Home</title>
</svelte:head>
<script lang="ts">
    import {Link} from 'svelte-routing';
    import {onMount, onDestroy} from 'svelte';
    import Notification from '../lib/notification/Notification.svelte';


    let countdownInterval: any;
    let targetDate: any = new Date("2024-02-26T15:00:00");
    let timeLeft = Math.floor((targetDate - new Date())/ 1000);

    const contacts = [
        {
            "name" : "Jeya Prakash S",
            "designation": "General Secretary, CSEA",
            "phone": "+91 9119119119",
            "email": "gbrow@aubro.com"
        },
        {
            "name" : "Gowtham R",
            "designation": "President, IEI",
            "phone": "+91 9119119119",
            "email": "gbrow@aubro.com"
        },
        {
            "name" : "Bhavani R",
            "designation": "Department Head, CSE",
            "phone": "+91 9119119119",
            "email": "gbrow@aubro.com"
        },
    ]

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
            "name": "Technincal Events",
            "to": "events/technical"
        },
        {
            "name": "Non Technincal Events",
            "to": "events/nontechnical"
        }
    ]
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

<main class="snap-y top-0 left-0 absolute w-screen bg-slate-600 -z-10">
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
                    <span class="text-center text-xs md:text-md w-14 bg-gray-100 p-2 rounded-md ">
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


    <section class="flex flex-col items-center py-12 px-4 md:px-24  max-h-1/3 bg-slate-500">
        <!--
           - Notification Section
           -->
        <h2 class="text-2xl text-gray-200 font-semibold mb-12">Notifications</h2>
        <Notification notifications={notifications}/>
    </section>
    <section class="py-12 px-8 md:py-32 md:px-32 w-full bg-slate-600">
        <!--
           - About Department Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold self-start mb-4 md:mb-12">About Department</h2>
           <p class="text-gray-300 text-justify indent-8 text-xs leading-tight md:text-lg mt-6">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
           </p>
    </section>
    <section class="flex flex-col items-center p-8 lg:py-24 lg:px-48 w-full  bg-slate-500">
        <!--
           - Committee Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-200 mb-12 font-semibold">Committees</h2>
        <div class="flex items-center p-8 bg-gray-300  text-xs md:text-lg text-slate-600 rounded-lg justify-around w-full ">
            {#each committees as comm}
            <div class="flex flex-col items-center w-24">
                <img class=" object-center object-cover w-full" src="/compsem-24-web/{comm.logo}" alt="">
                <p class="mt-2 md:mt-6">{comm.name}</p>
            </div>
            {/each}
        </div>
    </section>
    <section class="py-12 px-8 md:py-32 md:px-32 w-full bg-slate-600">
        <!--
           - About Tech Club Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold self-start mb-4 md:mb-12">About Tech Club</h2>
           <p class="text-gray-300 text-justify text-xs md:text-lg leading-tight indent-8 mt-6">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
           </p>
    </section>
    <section class="py-12 px-8 md:py-32 text-gray-300 md:px-32 w-full bg-slate-500">
        <!--
           - History of CompSem Section
           -->
        <h2 class="text-xl md:text-2xl  font-semibold self-start mb-4 md:mb-12">History of CompSem</h2>
           <p class="text-justify indent-8 mt-6 text-xs md:text-lg leading-tight">
The Department of Computer Science and Engineering was established in the year 1984 to meet the demand for well-qualified computer professionals. Flexible Choice based Credit System. Student Centric Teaching Methodology is adopted. The various Associations and Clubs promote the leadership and organisational skills of the students by conducting various academic events throughout the year. Apart from academics, students also involve themselves in activities that inculcate service and team spirit. The department library has more than 7500 books.
The department has two research laboratories having high-end systems with NVIDIA GeForce RTX 3080 Graphics Card to carry out research in the areas of Speech, Image/Video Processing and Data Analytics. There are six Computer Laboratories having 300 systems, an IoT Laboratory, and three seminar halls with necessary ICT facilities to conduct conferences/seminars and placement activities.
           </p>
    </section>
    <section class="flex flex-col items-center justify-center w-full p-14 bg-slate-300">
        <!--
           - Event Section
           -->
        <h2 class="text-xl md:text-2xl text-gray-900 font-semibold mb-12">Events</h2>
        <div class="flex gap-3 lg:gap-4 items-center max-h-1/2 justify-between md:px-4 w-full md:w-2/3">
            {#each eventsCategories as ev}
                <Link
                    to='compsem-24-web/{ev.to}'
                    class="hover:scale-110 h-32 md:h-80 w-32 md:w-80 flex justify-center items-center p-4 md:p-4 rounded-md bg-blue-200">
                    <p class="text-xs md:text-lg">{ev.name}</p>
                </Link>
            {/each}
        </div>
    </section>
    <section class="flex flex-col w-full justify-center items-center py-6">
        <!--
           - Contact Us
           -->
        <h2 class="text-xl md:text-2xl text-gray-300 font-semibold mb-4">Contact Us</h2>
        <div class="text-[8px] md:text-[12px] text-gray-300 flex justify-around w-full">
            {#each contacts as contact}
            <div class="">
                <p class="text-center">{contact.name}</p>
                <p class="text-center">{contact.designation}</p>
                <a href="tel:{contact.phone}">Phone: {contact.phone}</a><br/>
                <a href="mailto:{contact.email}">Email: {contact.email}</a>
            </div>
            {/each}
        </div>
    </section>
</main>
