<!--
   - Notification Component
  ) -->
<script lang="ts">
    import { onMount } from 'svelte';
    import {Link} from 'svelte-routing';
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const months = ["JAN", "FEB", "MAR", "APR"]
    export let heading: string;
    export let oneliner: string;
    export let date: Date;
    export let to:string;
</script>
<Link class="max-w-[24rem]" to="/{to}">
    <div class="group glass h-full p-4 rounded-lg text-white w-[20em] flex-wrap flex flex-col cursor-pointer hover:bg-slate-500/20">
    <div class="flex-1 mt-2 flex flex-col">
        <div class="font-bold text-xl text-wrap uppercase leading-tight flex-1 my-2">{heading}</div>
        <span class="w-full text-center">
            <div class="text-sm">{`${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth() % 4]}`}</div>
            <div class="glass font-thin text-5xl uppercase rounded-full px-2 py-1 text-xs m-[2px]">{oneliner}</div>
        </span>
    </div>
    </div>
</Link>
