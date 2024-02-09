<template>
    <!-- Main -->
    <div class="w-[65%] bg-[#f7f6fe] p-6 overflow-y-scroll">
        <!-- Welcome Message -->
        <div class="flex justify-between">
            <div>
                <h2 class="font-bold text-4xl">
                    Hello, John D.
                </h2>
                <h4 class=" pt-3 font-light text-lg">
                    View and control your fianances here!
                </h4>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="rounded-full h-10 w-10 mx-auto bg-white flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- Balance statistics / Debit Card -->
        <div class="flex justify-between pt-5 space-x-4">
            <!-- Balance Statistics -->
            <div class="w-[60%] h-64 bg-white rounded-2xl px-5 py-4">
                <div class="flex justify-between">
                    <h4 class="font-semibold text-lg">
                        Balance Statistics
                    </h4>
                    <div class="flex justify-center">
                        <div class="relative">
                            <div class="bg-[#f7f6fb] rounded-2xl justify-center">
                                <button @click="openFilter = !openFilter"
                                    class="flex text-black bg-gray-200 px-3 py-2  text-sm font-semibold text-left bg-transparent rounded-lg justify-center items-center">
                                    <span v-text="!filterType ? 'Filters' : `${filterType}`"></span>
                                    <svg fill="currentColor" viewBox="0 0 20 20"
                                        :class="{ 'rotate-180': openFilter, 'rotate-0': !openFilter }"
                                        class="w-4 h-4  transition-transform duration-200 transform ">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <Transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <div v-if="openFilter" class="absolute z-50 w-40 origin-top-right">
                                    <div class="px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                                        <div class="flex flex-col">
                                            <a @click="filterType = '', openFilter = !openFilter"
                                                v-if="filterType ? true : false"
                                                class="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 "
                                                href="#">

                                                <div>
                                                    <p class="font-semibold">Remove Filter</p>
                                                </div>
                                            </a>
                                            <a @click="filterType = 'Filter 1', openFilter = !openFilter"
                                                class="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 "
                                                href="#">

                                                <div class="">
                                                    <p class="font-semibold">Filter 1</p>
                                                </div>
                                            </a>

                                            <a @click="filterType = 'Filter 2', openFilter = !openFilter"
                                                class="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 "
                                                href="#">

                                                <div class="">
                                                    <p class="font-semibold">Filter 2</p>
                                                </div>
                                            </a>

                                            <a @click="filterType = 'Filter 3', openFilter = !openFilter"
                                                class="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 "
                                                href="#">

                                                <div class="">
                                                    <p class="font-semibold">Filter 3</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-[30%]">
                        <h2 class="font-bold text-4xl">
                            $564
                        </h2>
                        <div class="flex w-40">
                            <img :src="imgGoldCoin" class="h-10 w-12 mt-4">
                            <h5 class="font-light text-md flex justify-center items-center pl-2 leading-5 pt-2">
                                Your total balance
                            </h5>
                        </div>
                        <div class="bg-[#f1f1f1] p-0.5 mt-2"></div>
                    </div>
                    <div class="w-[70%]">
                        <div id="chart">
                            <VueApexCharts :options="chartOptions" :series="series" type="bar" height="200" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Debit Card -->
            <div class="flex-1">
                <div class="w-full h-64 m-auto bg-red-100 rounded-2xl relative text-white ">
                    <img class="relative object-cover w-full h-full rounded-2xl" src="https://i.imgur.com/kGkSg1v.png">
                    <div class="w-full h-full p-4 top-0 absolute">
                        <div class="flex flex-col h-full">
                            <div class="flex h-7">
                                <div>
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                            class="h-7 w-7 fill-white"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                            <path
                                                d="M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3C5.1 440.8-3.9 422.7 1.6 405.9s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5L2.1 133.9C9.4 91.4 37.4 62.2 73.9 46.6c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z" />
                                        </svg>
                                        <div class=" font-extrabold text-2xl mt-1 ">
                                            .
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-auto flex justify-center items-center pt-3">
                                    <img :src="imgVisaLogo" class="h-[5rem] w-[5rem]  flex justify-center items-center ">
                                </div>
                            </div>
                            <div class="mt-auto">
                                <div class="flex ">
                                    <div>
                                        **** 9453<br>John Doe
                                    </div>
                                    <div class="ml-auto">
                                        <br>07/25
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Items to buy / Chat -->
        <div class="flex justify-between pt-5 overflow-hidden">
            <!-- Items to buy -->
            <div class="w-[55%] h-64 bg-white rounded-l-2xl px-5 pt-4 pb-10  overflow-hidden">
                <div class="flex justify-between">
                    <h4 class="font-semibold text-lg">
                        List of items to buy
                    </h4>
                </div>
                <div class="pt-2 flex">
                    <p class="text-gray-500">
                        0/3
                    </p>
                    <p class="pl-1">
                        Shopping List
                    </p>
                    <div class="ml-auto flex cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            class="w-[14px] h-[14px] mt-1.5 mr-2"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                            <path
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>
                        Add an item
                    </div>
                </div>
                <div class="py-4 h-full">
                    <div class="grid grid-cols-2 gap-2 pb-4 overflow-y-scroll h-full">
                        <div class="col-span-1 bg-[#f7f6fb] rounded-2xl px-3 py-4" v-for="(item, key) in items" :key="key">
                            <label>
                                <input type="checkbox" :checked="item.checked" v-model="items.item"> {{ item.name }}
                            </label>
                        </div>

                    </div>
                </div>
            </div>
            <div class="px-[1px] bg-[#f0f0f0]">

            </div>
            <!-- Chat -->
            <div class="flex-1">
                <div class="w-full h-64 m-auto bg-white rounded-r-xl relative px-5 pt-3">
                    <div class="w-full font-semibold text-2xl">
                        Jane Doe
                    </div>
                    <div class="h-[60%]">
                        <div class="w-full h-full pb-2 px-5 flex flex-col justify-between overflow-y-scroll" id="chat">
                            <div class="flex flex-col mt-5">
                                <div class="flex justify-end mb-4">
                                    <div
                                        class="mr-2 py-3 px-4 bg-[#525bea] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                        Are you ready?
                                    </div>
                                    <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                        class="object-cover h-8 w-8 rounded-full" alt="" />
                                </div>
                                <div class="flex justify-start mb-4">
                                    <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                        class="object-cover h-8 w-8 rounded-full" alt="" />
                                    <div
                                        class="ml-2 py-3 px-4 bg-[#f7f6fe] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black">
                                        I have prepared Everything
                                    </div>
                                </div>
                                <div class="flex justify-start mb-4">
                                    <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                        class="object-cover h-8 w-8 rounded-full" alt="" />
                                    <div
                                        class="ml-2 py-3 px-4 bg-[#f7f6fe] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black">
                                        Message 2
                                    </div>
                                </div>
                                <div class="flex justify-start mb-4">
                                    <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                        class="object-cover h-8 w-8 rounded-full" alt="" />
                                    <div
                                        class="ml-2 py-3 px-4 bg-[#f5f4f9] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black">
                                        Message 3
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <input class="w-full bg-[#f7f6fb] py-3 px-3 mt-1 rounded-2xl placeholder:text-[#c5c4c9]"
                                type="text" placeholder="Type your message" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- Last transactions / Analytics -->
        <div class="flex justify-between pt-5 space-x-4">
            <!-- Last transactions -->
            <div class="w-[65%] bg-white rounded-2xl px-5 py-4">
                <div class="flex justify-between">
                    <h4 class="font-semibold text-lg">
                        Last transactions
                    </h4>
                    <div class="flex space-x-6 text-[#525156]">
                        <div class="underline">
                            Newest
                        </div>
                        <div>
                            Oldest
                        </div>
                    </div>
                </div>
                <div class="pt-3 flex flex-col space-y-4">
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                James Johnson
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                            <div class="ml-auto flex justify-center items-center font-semibold">
                                -$3,000
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                James Johnson
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                            <div class="ml-auto flex justify-center items-center font-semibold">
                                -$3,000
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                James Johnson
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                            <div class="ml-auto flex justify-center items-center font-semibold">
                                -$3,000
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                James Johnson
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                            <div class="ml-auto flex justify-center items-center font-semibold">
                                -$3,000
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- Analytics -->
            <div class="flex-1">
                <div class="w-full h-64 m-auto bg-white rounded-2xl px-5 py-4">
                    <h4 class="font-semibold text-lg">
                        Analytics
                    </h4>
                    <VueApexCharts :options="gaugeOptions" :series="gaugeSeries" type="radialBar" height="250" />
                </div>
            </div>
        </div>
    </div>
    <!-- Right-col -->
    <!-- Expenses and income -->
    <div class="flex-1 bg-white px-4 pt-4 pb-2 overflow-y-scroll">
        <div class="w-full h-48 bg-white rounded-2xl px-5 py-4 border-2 border-[#ededed] ">
            <div class="flex justify-between">
                <h4 class="font-semibold text-lg">
                    Expenses and income
                </h4>
            </div>
            <div class="flex pt-3 justify-between">
                <div>
                    <div>
                        Expense
                    </div>
                    <div>
                        75%
                    </div>
                    <div class="text-[#c4c3c8] text-sm">
                        5,543
                    </div>
                </div>
                <div>
                    <div class="w-0.5 h-4 ml-1.5 py-0.5 bg-[#939393]">
                    </div>
                    <div>
                        vs
                    </div>
                    <div class="w-0.5 h-4 ml-1.5 py-0.5 bg-[#939393]">
                    </div>
                </div>
                <div>
                    <div>
                        Income
                    </div>
                    <div>
                        25%
                    </div>
                    <div class="text-[#c4c3c8] text-sm">
                        2,543
                    </div>
                </div>
            </div>
            <div class="flex pt-3 space-x-1">
                <div class="py-2 bg-[#515de5] w-[75%] rounded-md">
                </div>
                <div class="py-2 bg-[#ffa713] w-[25%] rounded-md">
                </div>
            </div>
        </div>

        <!-- Latest Spending -->
        <div class="w-full  bg-white rounded-2xl px-5 py-4 mt-8 border-2 border-[#ededed] ">
            <div class="flex justify-between">
                <h4 class="font-semibold text-lg">
                    Latest Spending
                </h4>
            </div>
            <div class="pt-3 flex flex-col space-y-4">
                <div class="pt-3 flex flex-col space-y-4">
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                Online Purchase
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                Rent Payment
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-[1px] bg-[#eaeaea]">
                        </div>
                        <div class="flex pt-4">
                            <div class="flex items-center justify-center">
                                <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                                    <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                        <img :src="imgAvatar" class="object-cover">
                                    </div>
                                </div>

                            </div>
                            <div class="pl-3">
                                James Johnson
                                <div class="text-gray-500">
                                    07 Jun, 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-3 flex justify-center items-center text-[#8a92da] font-bold cursor-pointer">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    class="ml-2 h-4 w-4 fill-[#8a92da]"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
            </div>
        </div>
        <!-- Premium -->
        <div class="w-full  bg-white rounded-2xl px-5 py-4 mt-8 border-2 border-[#ededed] ">
            <div class="flex justify-center items-center">
                <h4 class="font-semibold text-lg">
                    Go to premium
                </h4>
            </div>
            <div class="pt-3 flex flex-col">
                <div>
                    <img :src="imgCrown" class="h-24 w-24">
                </div>

                <div class="font-bold text-2xl text-[#1c1b20] pt-3">
                    Need more features?
                </div>

                <div class="text-lg font-semibold text-[#adacb4] w-[80%]">
                    Upgrade your account to premium to get more features.
                </div>
            </div>
            <button
                class="py-3 mt-5 flex justify-center items-center bg-[#535ce5] text-[#e4ecff] font-bold cursor-pointer w-full rounded-2xl">
                Get now
            </button>
        </div>
    </div>
</template>

<script setup>
import imgGoldCoin from '@/assets/gold-coins.png';
import imgVisaLogo from '@/assets/visa-logo-1.png';
import imgAvatar from '@/assets/avatar.png';
import imgCrown from '@/assets/crown.png'

import VueApexCharts from 'vue3-apexcharts'
import { ref } from 'vue';

const openFilter = ref(false);
const filterType = ref();

// Bar chart variables
const series = ref([
    {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61],
    },
    {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87]
    },
]);
const chartOptions = ref({
    chart: {
        type: 'bar',
        height: 200,
        toolbar: {
            show: false,
        }
    },
    colors: ['#c7c6ff', '#515edf'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Oct', 'Dec', 'Jan', 'Feb', 'Mar'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousand";
            }
        }
    },
});

const items = ref([
    {
        name: 'Macbook',
        checked: true
    },
    {
        name: 'Bicycle',
        checked: false
    },
    {
        name: 'Motorcycle',
        checked: false
    },
    {
        name: 'Item 4',
        checked: false
    },
    {
        name: 'Item 5',
        checked: false
    },
    {
        name: 'Item 6',
        checked: false
    },
    {
        name: 'Item 7',
        checked: false
    },
])

// Gauge chart variables
const gaugeSeries = ref([90]);
const gaugeOptions = ref({
    chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0,
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
            },
            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#5560ee',
                    fontSize: '17px',
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: '#5560ee',
                    fontSize: '36px',
                    show: true,
                },
            },
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
        },
    },
    stroke: {
        lineCap: 'round',
    },
    labels: ['Done'],
});


</script>

<style></style>