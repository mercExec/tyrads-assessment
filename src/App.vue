<template>
    <div class="flex">
        <!-- Side-nav -->
        <aside
            class="flex flex-col w-[6%] h-screen px-5 pb-8 pt-6 overflow-y-hidden bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <div class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    class="h-7 w-7 "><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                    <path
                        d="M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3C5.1 440.8-3.9 422.7 1.6 405.9s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5L2.1 133.9C9.4 91.4 37.4 62.2 73.9 46.6c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z" />
                </svg>
                <div class=" font-extrabold text-2xl pt-2">
                    .
                </div>
            </div>

            <div class="flex flex-col justify-between flex-1 pt-8 w-full    ">
                <div class="flex items-center justify-center">
                    <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                        <div class="rounded-full h-12 w-12 mx-auto bg-[#fae1bb] flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                class="h-6 w-6"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                <path
                                    d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="flex items-center justify-center">
                    <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14 ">
                        <div class="rounded-full h-12 w-12 mx-auto bg-[#5962d3] flex items-center justify-center ">
                            <svg width="196px" height="196px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" stroke="#ffffff"
                                style="--darkreader-inline-stroke: #93918f;" data-darkreader-inline-stroke="">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                    stroke="#CCCCCC" stroke-width="0.192" style="--darkreader-inline-stroke: #76726e;"
                                    data-darkreader-inline-stroke=""></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                                        stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                        style="--darkreader-inline-stroke: #93918f;" data-darkreader-inline-stroke="">
                                    </path>
                                    <path d="M9 17H15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" style="--darkreader-inline-stroke: #93918f;"
                                        data-darkreader-inline-stroke=""></path>
                                </g>
                            </svg>
                        </div>
                        <div class="rounded-full h-12 w-12 mx-auto flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                <path
                                    d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                            </svg>
                        </div>
                        <div class="rounded-full h-12 w-12 mx-auto flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                                <path
                                    d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                        </div>
                        <div class="rounded-full h-12 w-12 mx-auto flex items-center justify-center ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        style="--darkreader-inline-stroke: #000000;" data-darkreader-inline-stroke="">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="rounded-full h-12 w-12 mx-auto flex items-center justify-center ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M16.5008 14.1502H16.5098M19 4.00098H6.2C5.0799 4.00098 4.51984 4.00098 4.09202 4.21896C3.71569 4.41071 3.40973 4.71667 3.21799 5.093C3 5.52082 3 6.08087 3 7.20098V16.801C3 17.9211 3 18.4811 3.21799 18.909C3.40973 19.2853 3.71569 19.5912 4.09202 19.783C4.51984 20.001 5.07989 20.001 6.2 20.001H17.8C18.9201 20.001 19.4802 20.001 19.908 19.783C20.2843 19.5912 20.5903 19.2853 20.782 18.909C21 18.4811 21 17.9211 21 16.801V11.201C21 10.0809 21 9.52082 20.782 9.093C20.5903 8.71667 20.2843 8.41071 19.908 8.21896C19.4802 8.00098 18.9201 8.00098 17.8 8.00098H7M16.9508 14.1502C16.9508 14.3987 16.7493 14.6002 16.5008 14.6002C16.2523 14.6002 16.0508 14.3987 16.0508 14.1502C16.0508 13.9017 16.2523 13.7002 16.5008 13.7002C16.7493 13.7002 16.9508 13.9017 16.9508 14.1502Z"
                                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        style="--darkreader-inline-stroke: #000000;" data-darkreader-inline-stroke="">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="rounded-full h-12 w-12 mx-auto flex items-center justify-center ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z"
                                        stroke="#000000" stroke-width="1.5" style="--darkreader-inline-stroke: #000000;"
                                        data-darkreader-inline-stroke=""></path>
                                    <path
                                        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                        stroke="#000000" stroke-width="1.5" style="--darkreader-inline-stroke: #000000;"
                                        data-darkreader-inline-stroke=""></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="pb-6">
                    <div class="flex items-center justify-center">
                        <div class="flex flex-col rounded-full justify-around bg-[#f7f6fe] pb-2 space-y-5 w-14">
                            <div class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                <img src="./assets/avatar.png" class="object-cover">
                            </div>
                        </div>

                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            class="h-5 w-5"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                            <path
                                d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                        </svg>
                    </div>

                </div>
            </div>

        </aside>
        <!-- Main -->
        <div class="w-[65%] bg-[#f7f6fe] p-6 ">
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
                                <img src="./assets/gold-coins.png" class="h-10 w-12 mt-4">
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
                                        <img src="./assets/visa-logo-1.png"
                                            class="h-[5rem] w-[5rem]  flex justify-center items-center ">
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
                            <div class="col-span-1 bg-[#f7f6fb] rounded-2xl px-3 py-4" v-for="(item, key) in items"
                                :key="key">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
        <div class="flex-1 bg-white px-4 pt-4 pb-2">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
                                        <div
                                            class="rounded-full h-12 w-12 mx-auto bg-white flex items-center justify-center ">
                                            <img src="./assets/avatar.png" class="object-cover">
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
                        <img src="./assets/crown.png" class="h-24 w-24">
                    </div>
                    
                    <div class="font-bold text-2xl text-[#1c1b20] pt-3">
                        Need more features?
                    </div>
                    
                    <div class="text-lg font-semibold text-[#adacb4] w-[80%]">
                        Upgrade your account to premium to get more features.
                    </div>
                </div>
                <button class="py-3 mt-5 flex justify-center items-center bg-[#535ce5] text-[#e4ecff] font-bold cursor-pointer w-full rounded-2xl">
                    Get now
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

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
        name: 'Motorcycle',
        checked: false
    },
    {
        name: 'Motorcycle',
        checked: false
    },
    {
        name: 'Motorcycle',
        checked: false
    },
    {
        name: 'Motorcycle',
        checked: false
    },
])

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
<style scoped></style>
