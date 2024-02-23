<script lang="ts">
    export let eventId: string;
    const content = [

        {
            "name" : "Event Name",
            "technicality" : "Tech",
            "date" : "26/02/2024",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "rules" : "",
            "staffName" : "",
            "studentName1" : "",
            "studentName2" : "",
            "studentName3" : "",
        }
    ]
</script>


<main class="snap-y ">
    <div class="flex justify-center">
        <div class="page-container max-w-3xl xl:max-w-5xl text-white text-align-center">
            <div class="flex flex-col items-center mb-8">
                <h2 class="text-6xl font-bold mb-4 mt-8 text-center">Event Name</h2>
                <div class="glass font-thin uppercase rounded-full px-2 py-1 text-xs m-[2px] ">Tech/Non-Tech</div>
            </div>
            <div class="glass bg-black/20 mb-4 pt-1 rounded-xl self-end ">
                <div class="flex">
                    <div class="flex w-full justify-start text-left">
                        <h2 class="px-8 py-4 text-2xl bg-transparent">Date </h2>
                    </div>
                    <div class="flex w-full justify-end text-right">
                        <button class="px-8 py-4 text-2xl bg-transparent hover:bg-gray-300 transition-colors duration-300 ease-in-out rounded-full">
                            Register
                        </button>
                    </div>
                </div>


                <div class="flex flex-wrap w-full items-center gap-y-2 gap-x-4 p-2 mt-4">
                    <div class="markdown">
                        <p></p>

                        <p>🎞️ Event Description:</p>
                        <ol>
                            <li>
                                <strong><em>Lorem ipsum:</em></strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <li>
                                <em>Lorem ipsum:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                <em>Lorem ipsum:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>
                                <em>Lorem ipsum:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                <em>Lorem ipsum:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                <em>Lorem ipsum:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ol>
                    </div>
                    </div>
                    <div>
                        <h3 class="text-3xl font-bold my-6 ml-3">Staff Coordinator</h3>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <a href="/events/+9190329998919/">
                            <div class="glass rounded-lg p-2 flex items-center hover:bg-slate-500/30">
                            <div class="w-12 h-12 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                </svg>
                            </div>
                            <div class="flex-1 ml=2">
                                <div class="text-xl font-bold text-white">Name</div>
                                <div>Number</div>
                            </div>
                            </div>
                        </a>

                        <div>
                            <h3 class="text-3xl font-bold my-6 ml-3">Staff Coordinator</h3>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <a href="/events/+9190329998919/">
                                <div class="glass rounded-lg p-2 flex items-center hover:bg-slate-500/30">
                                <div class="w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div class="flex-1 ml=2">
                                    <div class="text-xl font-bold text-white">Name</div>
                                    <div>Number</div>
                                </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="Toastify"></div>
  </main>


