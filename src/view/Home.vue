<template>
    <div>

        <section class="banner bg-no-repeat bg-center flex justify-center items-center">
            <div class="text-white">
                <h1 class="text-5xl text-center md:text-7xl font-bold" id="bannerTitle">{{ $t("home.banner") }}</h1>
                <h5 id="bannerSubTitle" class="text-center text-2xl mt-4"> {{ $t("home.bannerSubTitle") }} </h5>
            </div>
        </section>

        <section class="booking p-7 container mx-auto mt-[-166px] bg-white rounded-3xl shadow-lg overflow-hidden">
            <div class="flex md:justify-between justify-center gap-5 items-center font-bold flex-wrap">
                <div class="flex items-center gap-7">
                    <div
                        class="tripType flex items-center rounded-lg border-2 bg-violet-600 text-white border-violet-600 py-2 px-4 gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16 " height="16" fill="currentColor"
                            class="bi bi-airplane-fill rotate-45" viewBox="0 0 16 16">
                            <path
                                d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                        </svg>
                        <p id="flightTab">Flights</p>
                    </div>
                    <div
                        class="tripType flex items-center rounded-lg border-2 border-violet-600 py-2 px-4 gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-globe" viewBox="0 0 16 16">
                            <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <p id="ToursTab">Tours</p>
                    </div>
                    <div
                        class="tripType flex items-center rounded-lg border-2 border-violet-600 py-2 px-4 gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fill-rule="evenodd"
                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                        <p id="HotelsTab">Hotels</p>
                    </div>
                </div>
                <div class="flex items-center gap-7" id="ways">
                    <p class="text-violet-600 cursor-pointer flightBtn" id="OneWayBtn">One Way</p>
                    <p class="cursor-pointer flightBtn" id="RoundtripBtn">Roundtrip</p>
                    <p class="cursor-pointer flightBtn" id="MultiCityBtn">Multi city</p>
                </div>
            </div>
            <div id="flights">
                <div id="OneWay" class="grid xl:grid-cols-2 grid-cols-1 items-center justify-center mt-10 gap-6">
                    <div class="grid items-center justify-center lg:grid-cols-2 grid-cols-1 gap-4">
                        <div
                            class="relative grid grid-cols-12 items-start justify-between p-3 gap-4 bg-gray-200 rounded-xl">
                            <div class="col-span-10">
                                <p class="text-gray-600 font-bold" id="from">From</p>
                                <input value="New York" class="outline-none text-xl font-bold my-3 bg-transparent">
                                <p class="text-gray-800 font-bold text-xs" id="fromSubDescription">JFK - John F. Kennedy
                                    International...</p>
                            </div>
                            <div class="col-span-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-airplane-fill rotate-45" viewBox="0 0 16 16">
                                    <path
                                        d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                </svg>
                            </div>
                            <div
                                class="cursor-pointer absolute -right-10 top-10 w-14 h-14 hidden rounded-full border-2 text-violet-600 border-white lg:flex justify-center items-center bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 items-start justify-between p-3 gap-4 pl-7 bg-gray-200 rounded-xl">
                            <div class="col-span-10">
                                <p class="text-gray-600 font-bold" id="to">To</p>
                                <input value="London" class="outline-none text-xl font-bold my-3 bg-transparent">
                                <p class="text-gray-800 font-bold text-xs" id="toSubDescription">LCY, London city airport
                                </p>
                            </div>
                            <div class="col-span-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                    class="bi bi-airplane-fill rotate-[145deg]" viewBox="0 0 16 16">
                                    <path
                                        d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 items-center gap-4">
                        <div class="p-2 pr-56 bg-gray-200 rounded-xl md:col-span-7 col-span-12">
                            <div>
                                <p class="text-gray-600 font-bold" id="tripDate">Journey date</p>
                                <input value="22/09/2022" type="date"
                                    class="outline-none text-xl font-bold my-3 bg-transparent">
                                <p class="text-gray-800 font-bold" id="tripDay">Thursday</p>
                            </div>
                        </div>
                        <div class="p-2 pr-24 bg-gray-200 rounded-xl md:col-span-5 col-span-12">
                            <div>
                                <p class="text-gray-600 font-bold" id="passengerClass">Passenger, Class</p>
                                <p class="text-xl font-bold my-3 bg-transparent cursor-pointer" id="passengerNum">0
                                    Passenger</p>
                                <p class="text-gray-800 font-bold" id="passengerSubTitle">Business</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Roundtrip" class="hidden">
                    <div class="grid xl:grid-cols-2 grid-cols-1 items-center justify-center mt-10 gap-6">
                        <div class="grid items-center justify-center lg:grid-cols-2 grid-cols-1 gap-4">
                            <div
                                class="relative grid grid-cols-12 items-start justify-between p-3 gap-4 bg-gray-200 rounded-xl">
                                <div class="col-span-10">
                                    <p class="text-gray-600 font-bold" id="from2">From</p>
                                    <input value="New York" class="outline-none text-xl font-bold my-3 bg-transparent">
                                    <p class="text-gray-800 font-bold text-xs" id="from2SubDescription">JFK - John F.
                                        Kennedy International...</p>
                                </div>
                                <div class="col-span-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                        class="bi bi-airplane-fill rotate-45" viewBox="0 0 16 16">
                                        <path
                                            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                    </svg>
                                </div>
                                <div
                                    class="cursor-pointer absolute -right-10 top-10 w-14 h-14 hidden rounded-full border-2 text-violet-600 border-white lg:flex justify-center items-center bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                        class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="grid grid-cols-12 items-start justify-between p-3 gap-4 pl-7 bg-gray-200 rounded-xl">
                                <div class="col-span-10">
                                    <p class="text-gray-600 font-bold" id="to2">To</p>
                                    <input value="London" class="outline-none text-xl font-bold my-3 bg-transparent">
                                    <p class="text-gray-800 font-bold text-xs" id="to2SubDescription">LCY, London city
                                        airport</p>
                                </div>
                                <div class="col-span-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                        class="bi bi-airplane-fill rotate-[145deg]" viewBox="0 0 16 16">
                                        <path
                                            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 items-center gap-4">
                            <div class="p-2 bg-gray-200 rounded-xl md:col-span-8 col-span-12">
                                <div class="grid grid-cols-2">
                                    <div>
                                        <p class="text-gray-600 font-bold" id="tripDate2">Journey date</p>
                                        <input value="22/09/2022" type="date"
                                            class="outline-none text-xl font-bold my-3 bg-transparent">
                                        <p class="text-gray-800 font-bold" id="tripDay2">Thursday</p>
                                    </div>
                                    <div>
                                        <p class="text-gray-600 font-bold" id="returnDate">Return date</p>
                                        <input value="22/09/2022" type="date"
                                            class="outline-none text-xl font-bold my-3 bg-transparent">
                                        <p class="text-gray-800 font-bold" id="returnDay">Saturday</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 pr-14 bg-gray-200 rounded-xl md:col-span-4 col-span-12">
                                <div>
                                    <p class="text-gray-600 font-bold" id="passengerClass2">Passenger, Class</p>
                                    <p class="text-xl font-bold my-3 bg-transparent cursor-pointer" id="PassengerNum2">0
                                        Passenger</p>
                                    <p class="text-gray-800 font-bold" id="passengerSubTitle2">Business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="MultiCity" class="hidden">
                    <div id="flightLists">
                        <div class="grid xl:grid-cols-2 grid-cols-1 items-center justify-center mt-10 gap-6">
                            <div class="grid items-center justify-center lg:grid-cols-2 grid-cols-1 gap-4">
                                <div
                                    class="relative grid grid-cols-12 items-start justify-between p-3 gap-4 bg-gray-200 rounded-xl">
                                    <div class="col-span-10">
                                        <p class="text-gray-600 font-bold">From</p>
                                        <input value="New York" class="outline-none text-xl font-bold my-3 bg-transparent">
                                        <p class="text-gray-800 font-bold text-xs">JFK - John F. Kennedy International...
                                        </p>
                                    </div>
                                    <div class="col-span-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                            class="bi bi-airplane-fill rotate-45" viewBox="0 0 16 16">
                                            <path
                                                d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                        </svg>
                                    </div>
                                    <div
                                        class="cursor-pointer absolute -right-10 top-10 w-14 h-14 hidden rounded-full border-2 text-violet-600 border-white lg:flex justify-center items-center bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="grid grid-cols-12 items-start justify-between p-3 gap-4 pl-7 bg-gray-200 rounded-xl">
                                    <div class="col-span-10">
                                        <p class="text-gray-600 font-bold">To</p>
                                        <input value="London" class="outline-none text-xl font-bold my-3 bg-transparent">
                                        <p class="text-gray-800 font-bold text-xs">LCY, London city airport</p>
                                    </div>
                                    <div class="col-span-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                            class="bi bi-airplane-fill rotate-[145deg]" viewBox="0 0 16 16">
                                            <path
                                                d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 items-center gap-4">
                                <div class="p-2 bg-gray-200 rounded-xl md:col-span-8 col-span-12">
                                    <div class="grid grid-cols-2">
                                        <div>
                                            <p class="text-gray-600 font-bold">Journey date</p>
                                            <input value="22/09/2022" type="date"
                                                class="outline-none text-xl font-bold my-3 bg-transparent">
                                            <p class="text-gray-800 font-bold">Thursday</p>
                                        </div>
                                        <div>
                                            <p class="text-gray-600 font-bold">Return date</p>
                                            <input value="22/09/2022" type="date"
                                                class="outline-none text-xl font-bold my-3 bg-transparent">
                                            <p class="text-gray-800 font-bold">Saturday</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 pr-14 bg-gray-200 rounded-xl md:col-span-4 col-span-12">
                                    <div>
                                        <p class="text-gray-600 font-bold">Passenger, Class</p>
                                        <p class="text-xl font-bold my-3 bg-transparent cursor-pointer">0 Passenger</p>
                                        <p class="text-gray-800 font-bold">Business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid xl:grid-cols-2 grid-cols-1 items-center justify-center mt-10 gap-6">
                            <div class="grid items-center justify-center lg:grid-cols-2 grid-cols-1 gap-4">
                                <div
                                    class="relative grid grid-cols-12 items-start justify-between p-3 gap-4 bg-gray-200 rounded-xl">
                                    <div class="col-span-10">
                                        <p class="text-gray-600 font-bold">From</p>
                                        <input value="New York" class="outline-none text-xl font-bold my-3 bg-transparent">
                                        <p class="text-gray-800 font-bold text-xs">JFK - John F. Kennedy International...
                                        </p>
                                    </div>
                                    <div class="col-span-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                            class="bi bi-airplane-fill rotate-45" viewBox="0 0 16 16">
                                            <path
                                                d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                        </svg>
                                    </div>
                                    <div
                                        class="cursor-pointer absolute -right-10 top-10 w-14 h-14 hidden rounded-full border-2 text-violet-600 border-white lg:flex justify-center items-center bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                            class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="grid grid-cols-12 items-start justify-between p-3 gap-4 pl-7 bg-gray-200 rounded-xl">
                                    <div class="col-span-10">
                                        <p class="text-gray-600 font-bold">To</p>
                                        <input value="London" class="outline-none text-xl font-bold my-3 bg-transparent">
                                        <p class="text-gray-800 font-bold text-xs">LCY, London city airport</p>
                                    </div>
                                    <div class="col-span-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                            class="bi bi-airplane-fill rotate-[145deg]" viewBox="0 0 16 16">
                                            <path
                                                d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 items-center gap-4">
                                <div class="p-2 bg-gray-200 rounded-xl md:col-span-8 col-span-12">
                                    <div class="grid grid-cols-2">
                                        <div>
                                            <p class="text-gray-600 font-bold">Journey date</p>
                                            <input value="22/09/2022" type="date"
                                                class="outline-none text-xl font-bold my-3 bg-transparent">
                                            <p class="text-gray-800 font-bold">Thursday</p>
                                        </div>
                                        <div>
                                            <p class="text-gray-600 font-bold">Return date</p>
                                            <input value="22/09/2022" type="date"
                                                class="outline-none text-xl font-bold my-3 bg-transparent">
                                            <p class="text-gray-800 font-bold">Saturday</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 pr-14 bg-gray-200 rounded-xl md:col-span-4 col-span-12">
                                    <div>
                                        <p class="text-gray-600 font-bold">Passenger, Class</p>
                                        <p class="text-xl font-bold my-3 bg-transparent cursor-pointer">0 Passenger</p>
                                        <p class="text-gray-800 font-bold">Business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="text-violet-600 font-bold text-right mt-5 cursor-pointer block" onclick="AddFlight()">
                        + Add another flight
                    </a>
                </div>
            </div>
            <div id="tours" class="mt-8 hidden">
                <div class="grid xl:grid-cols-2 grid-cols-1 items-center w-full gap-7">
                    <div>
                        <div class="relative flex items-start p-4 gap-6 bg-gray-200 rounded-xl">
                            <div>
                                <p class="text-gray-600 font-bold">Destination</p>
                                <input value="Where are you going?"
                                    class="outline-none text-xl font-bold my-3 bg-transparent">
                                <p class="text-gray-800 font-bold">Where are you going?</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-7">
                        <div class="p-4 bg-gray-200 rounded-xl lg:col-span-8 col-span-12">
                            <div class="flex items-center justify-between gap-12">
                                <div>
                                    <p class="text-gray-600 font-bold">Check In date</p>
                                    <input value="22/09/2022" type="date"
                                        class="outline-none text-lg font-bold my-3 bg-transparent">
                                    <p class="text-gray-800 font-bold">Thursday</p>
                                </div>
                                <div>
                                    <p class="text-gray-600 font-bold">Check Out date</p>
                                    <input value="22/09/2022" type="date"
                                        class="outline-none text-lg font-bold my-3 bg-transparent">
                                    <p class="text-gray-800 font-bold">Thursday</p>
                                </div>
                            </div>

                        </div>

                        <div class="p-4 pr-10 bg-gray-200 rounded-xl lg:col-span-4 col-span-12">
                            <div>
                                <p class="text-gray-600 font-bold">Passenger, Class</p>
                                <p class="text-xl font-bold my-3 bg-transparent cursor-pointer">0 Passenger</p>
                                <p class="text-gray-800 font-bold">Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="hotels" class="mt-8 hidden">
                <div class="grid xl:grid-cols-2 grid-cols-1 items-center w-full gap-7">
                    <div>
                        <div class="relative flex items-start p-4 gap-6 bg-gray-200 rounded-xl">
                            <div>
                                <p class="text-gray-600 font-bold">Destination</p>
                                <input value="Where are you going?"
                                    class="outline-none text-xl font-bold my-3 bg-transparent">
                                <p class="text-gray-800 font-bold">Where are you going?</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 gap-7">
                        <div class="p-4 bg-gray-200 rounded-xl lg:col-span-8 col-span-12">
                            <div class="flex items-center justify-between gap-12">
                                <div>
                                    <p class="text-gray-600 font-bold">Check In date</p>
                                    <input value="22/09/2022" type="date"
                                        class="outline-none text-lg font-bold my-3 bg-transparent">
                                    <p class="text-gray-800 font-bold">Thursday</p>
                                </div>
                                <div>
                                    <p class="text-gray-600 font-bold">Check Out date</p>
                                    <input value="22/09/2022" type="date"
                                        class="outline-none text-lg font-bold my-3 bg-transparent">
                                    <p class="text-gray-800 font-bold">Thursday</p>
                                </div>
                            </div>

                        </div>

                        <div class="p-4 pr-10 bg-gray-200 rounded-xl lg:col-span-4 col-span-12">
                            <div>
                                <p class="text-gray-600 font-bold">Passenger, Class</p>
                                <p class="text-xl font-bold my-3 bg-transparent cursor-pointer">0 Passenger</p>
                                <p class="text-gray-800 font-bold">Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a id="search"
                class="text-white font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 py-3 w-40 flex justify-center items-center mx-auto mt-10 px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                Search
            </a>
        </section>

        <section class="imagination container mx-auto mt-24">
            <div class="grid grid-cols-12 gap-8 items-center">
                <div class="xl:col-span-3 col-span-12">
                    <h3 id="imaginationHeading"
                        class="pb-4 text-center md:text-left md:border-b-2 border-violet-600 text-4xl mb-4 text-gray-800 font-bold">
                        Go beyond your imagination</h3>
                    <p id="imaginationDesc" class="text-gray-400 font-bold text-center md:text-left">
                        Discover your ideal experience with us
                    </p>
                </div>
                <div class="xl:col-span-9 col-span-12 bg-white">
                    <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7 px-4">
                        <div class="relative group h-[494px] overflow-hidden rounded-2xl">
                            <img src="../assets/img//imagination1.png" alt=""
                                class="absolute inset-0 w-full h-full cursor-pointer transition-all duration-500 group-hover:scale-125">
                            <p id="Discount" class="z-10 absolute inset-x-0 bottom-8 text-white text-center text-4xl">
                                7% Discount for all Airlines
                            </p>
                            <div
                                class="absolute h-32 bg-black opacity-50 w-full -bottom-60  transition-all duration-500 group-hover:bottom-0">
                            </div>
                        </div>
                        <div class="relative group h-[494px] overflow-hidden rounded-2xl">
                            <img src="../assets/img//imagination2.png" alt=""
                                class="absolute inset-0 w-full h-full cursor-pointer transition-all duration-500 group-hover:scale-125">
                            <p id="travelAround" class="z-10 absolute inset-x-0 bottom-8 text-white text-center text-4xl">
                                the world<br> Travel around
                            </p>
                            <div
                                class="absolute h-32 bg-black opacity-50 w-full -bottom-60  transition-all duration-500 group-hover:bottom-0">
                            </div>
                        </div>
                        <div class="relative group h-[494px] overflow-hidden rounded-2xl">
                            <img src="../assets/img//imagination3.png" alt=""
                                class="absolute inset-0 w-full h-full cursor-pointer transition-all duration-500 group-hover:scale-125">
                            <p id="topDeals" class="z-10 absolute inset-x-0 bottom-8 text-white text-center text-4xl">
                                Luxury resorts<br>top deals
                            </p>
                            <div
                                class="absolute h-32 bg-black opacity-50 w-full -bottom-60  transition-all duration-500 group-hover:bottom-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto destinations mt-24 px-4">
            <h2 class="before:w-56 before:-bottom-5 before:right-0 before:left-0 before:mx-auto before:h-1 before:bg-violet-600 before:absolute relative  text-center text-gray-900 text-4xl font-bold"
                id="TopDestinationsHeading">Top destinations</h2>
            <div class="grid xl:grid-cols-2 grid-cols-1 gap-7 mt-14 lg:h-[799px] text-white">
                <div
                    class="relative flex justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                    <img src="../assets/img/big-img.png" alt=""
                        class="group-hover:scale-125 group-hover:opacity-50 w-full transition-all duration-500 h-full absolute inset-0">
                    <div class="absolute font-bold">
                        <p class="text-2xl" id="Upto">Up to</p>
                        <div>
                            <span class="text-9xl">50%</span> <span class="text-2xl" id="off">Off</span>
                        </div>
                        <p class="text-2xl" id="Holidaypackages">Holiday packages</p>
                        <a id="bookNow"
                            class="text-white font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 py-3 w-40 flex justify-center items-center mt-10 px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                            Book now
                        </a>
                    </div>
                </div>
                <div class="grid md:grid-cols-3 grid-cols-1 gap-7">
                    <div
                        class="relative flex h-96 md:h-[226px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/china.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="china">China</a>
                        </div>
                    </div>
                    <div
                        class="relative flex h-96 md:h-[308px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/gangtok.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="Gangtok">Gangtok</a>
                        </div>
                    </div>
                    <div
                        class="relative flex h-96 md:h-[350px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/london.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="London">London</a>
                        </div>
                    </div>
                    <div
                        class="mt-1 md:mt-[-124px] relative flex h-96 md:h-[226px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/Darjeeling.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="Darjeeling">Darjeeling</a>
                        </div>
                    </div>
                    <div
                        class="mt-1 md:mt-[-39px] relative flex h-96 md:h-[226px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/Thailand.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="Thailand">Thailand</a>
                        </div>
                    </div>
                    <div
                        class="relative flex h-96 md:h-[350px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/usa.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer" id="USA">USA</a>
                        </div>
                    </div>
                    <div
                        class="mt-1 md:mt-[-243px] relative flex h-96 md:h-[308px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/malaysia.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="Malaysia">Malaysia</a>
                        </div>
                    </div>
                    <div
                        class="mt-1 md:mt-[-160px] relative flex h-96 md:h-[226px] justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/australia.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full h-full transition-all duration-500 absolute inset-0">
                        <div class="absolute">
                            <a class="text-2xl transition-all duration-500 hover:text-black cursor-pointer"
                                id="Australia">Australia</a>
                        </div>
                    </div>
                    <a id="viewAll"
                        class="text-white mt-1 md:mt-[9px] font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 py-3 xl:h-14 md:h-14 flex justify-center items-center px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                        View all
                    </a>
                </div>
            </div>
        </section>

        <section class="container mx-auto Explore mt-24 px-4">
            <h2 class="before:w-56 before:-bottom-5 before:right-0 before:left-0 before:mx-auto before:h-1 before:bg-violet-600 before:absolute relative  text-center text-gray-900 text-4xl font-bold"
                id="hotdeals">Explore our hot deals</h2>
            <div
                class="max-w-5xl w-full px-4 border mx-auto mt-24 shadow-lg rounded-xl flex flex-wrap gap-2 items-center justify-around py-6">
                <div @click="toggleTabs(1)"
                    :class="{ 'text-black bg-transparent': openTab !== 1, 'bg-violet-600 text-white': openTab === 1, }"
                    class="rounded border-2  border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Hotels
                </div>
                <div @click="toggleTabs(2)"
                    :class="{ 'text-black bg-transparent': openTab !== 2, 'bg-violet-600 text-white': openTab === 2, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Tours
                </div>
                <div @click="toggleTabs(3)"
                    :class="{ 'text-black bg-transparent': openTab !== 3, 'bg-violet-600 text-white': openTab === 3, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Space
                </div>
                <div @click="toggleTabs(4)"
                    :class="{ 'text-black bg-transparent': openTab !== 4, 'bg-violet-600 text-white': openTab === 4, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Events
                </div>
            </div>
            <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-7 px-4">
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel1.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p id="NewbeachThailand">New beach, Thailand</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer"
                            id="KantuahotelThailand">Kantua hotel, Thailand</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3" id="Excellent">4.8/5 Excellent</p>
                            <p class="text-gray-700" id="reviewes">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p id="Pricestarts">Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel2.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            paradise international</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel3.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kualalampur</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            kualalampur</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel4.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Mariana island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            deluxe</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel5.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kathmundu, Nepal</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            rajavumi</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel6.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Beach view</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Thailand
                            grand suit</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel7.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Long island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Zefi
                            resort and spa</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel8.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Philippine</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Manila
                            international resort</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel1.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p id="NewbeachThailand">New beach, Thailand</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer"
                            id="KantuahotelThailand">Kantua hotel, Thailand</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3" id="Excellent">4.8/5 Excellent</p>
                            <p class="text-gray-700" id="reviewes">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p id="Pricestarts">Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel2.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            paradise international</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel3.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kualalampur</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            kualalampur</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel4.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Mariana island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            deluxe</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel5.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kathmundu, Nepal</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            rajavumi</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel6.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Beach view</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Thailand
                            grand suit</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel7.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Long island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Zefi
                            resort and spa</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel8.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Philippine</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Manila
                            international resort</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel1.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p id="NewbeachThailand">New beach, Thailand</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer"
                            id="KantuahotelThailand">Kantua hotel, Thailand</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3" id="Excellent">4.8/5 Excellent</p>
                            <p class="text-gray-700" id="reviewes">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p id="Pricestarts">Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel2.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            paradise international</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel3.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kualalampur</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            kualalampur</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel4.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Mariana island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            deluxe</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel5.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kathmundu, Nepal</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            rajavumi</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel7.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Long island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Zefi
                            resort and spa</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel8.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Philippine</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Manila
                            international resort</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel1.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p id="NewbeachThailand">New beach, Thailand</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer"
                            id="KantuahotelThailand">Kantua hotel, Thailand</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3" id="Excellent">4.8/5 Excellent</p>
                            <p class="text-gray-700" id="reviewes">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p id="Pricestarts">Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel2.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            paradise international</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel3.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kualalampur</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            kualalampur</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel4.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Mariana island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            deluxe</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel5.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Kathmundu, Nepal</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                            rajavumi</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel6.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Beach view</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Thailand
                            grand suit</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
                    class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                    <div class="relative overflow-hidden h-72">
                        <img src="../assets/img/hotel7.png" alt=""
                            class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                        <div class="absolute flex items-center text-white bottom-3 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            <p>Long island</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <a
                            class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Zefi
                            resort and spa</a>
                        <div class="flex items-center mb-4">
                            <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                            <p class="text-gray-700">(1214 reviewes)</p>
                        </div>
                        <div class="flex items-end">
                            <p class="font-bold text-3xl mr-3">$99.00</p>
                            <p>Price starts from</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 lg:h-[36rem] mt-24 gap-7">
                <div
                    class="h-96 md:h-full relative flex justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                    <img src="../assets/img/offer1.png" alt=""
                        class="group-hover:scale-125 group-hover:opacity-50 w-full transition-all duration-500 h-full absolute inset-0">
                    <div class="absolute font-bold text-white left-6 bottom-6">
                        <div>
                            <span class="text-4xl" id="SpecialOffers">Special Offers</span>
                        </div>
                        <p class="text-lg my-10 pr-8" id="SpecialOffersDesc">Invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <a id="Holidaydeals"
                            class="text-white font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 py-3 w-44 flex justify-center items-center px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                            Holiday deals
                        </a>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 grid-cols-1 gap-7">
                    <div
                        class="h-96 md:h-full relative flex justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/offer2.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full transition-all duration-500 h-full absolute inset-0">
                        <div class="absolute font-bold text-white left-6 bottom-6">
                            <div>
                                <span class="text-4xl">News letter</span>
                            </div>
                            <p class="text-lg my-10 pr-8">Invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et.</p>
                            <a
                                class="text-white font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 py-3 w-44 flex justify-center items-center px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                                Subscribe now
                            </a>
                        </div>
                    </div>
                    <div
                        class="h-96 md:h-full relative flex justify-center items-center group overflow-hidden rounded-2xl hover:bg-violet-600 transition-all duration-500">
                        <img src="../assets/img/offer3.png" alt=""
                            class="group-hover:scale-125 group-hover:opacity-50 w-full transition-all duration-500 h-full absolute inset-0">
                        <div class="absolute font-bold text-white left-6 bottom-6">
                            <div>
                                <span class="text-4xl">Travel tips</span>
                            </div>
                            <p class="text-lg my-10 pr-8">Invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et.</p>
                            <a
                                class="text-white font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 py-3 w-40 flex justify-center items-center px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                                Get tips
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto bestpromotional mt-24 px-4">
            <h2
                class="before:w-56 before:-bottom-5 before:right-0 before:left-0 before:mx-auto before:h-1 before:bg-violet-600 before:absolute relative  text-center text-gray-900 text-4xl font-bold">
                Our best promotional tours</h2>
            <!-- Swiper -->
            <div class="swiper mySwiper1 mt-24 pb-14 md:px-6" ref="bestTours">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div class="relative overflow-hidden h-72">
                                <img src="../assets/img/hotel1.png" alt=""
                                    class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                                <div class="absolute flex items-center text-white bottom-3 left-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>New beach, Thailand</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <a
                                    class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Kantua
                                    hotel, Thailand</a>
                                <div class="flex items-center mb-4">
                                    <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                                    <p class="text-gray-700">(1214 reviewes)</p>
                                </div>
                                <div class="flex items-end">
                                    <p class="font-bold text-3xl mr-3">$99.00</p>
                                    <p>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div class="relative overflow-hidden h-72">
                                <img src="../assets/img/hotel2.png" alt=""
                                    class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                                <div class="absolute flex items-center text-white bottom-3 left-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>Indonesia</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <a
                                    class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                                    paradise international</a>
                                <div class="flex items-center mb-4">
                                    <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                                    <p class="text-gray-700">(1214 reviewes)</p>
                                </div>
                                <div class="flex items-end">
                                    <p class="font-bold text-3xl mr-3">$99.00</p>
                                    <p>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div class="relative overflow-hidden h-72">
                                <img src="../assets/img/hotel3.png" alt=""
                                    class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                                <div class="absolute flex items-center text-white bottom-3 left-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>Kualalampur</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <a
                                    class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                                    kualalampur</a>
                                <div class="flex items-center mb-4">
                                    <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                                    <p class="text-gray-700">(1214 reviewes)</p>
                                </div>
                                <div class="flex items-end">
                                    <p class="font-bold text-3xl mr-3">$99.00</p>
                                    <p>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div class="relative overflow-hidden h-72">
                                <img src="../assets/img/hotel4.png" alt=""
                                    class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                                <div class="absolute flex items-center text-white bottom-3 left-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>Mariana island</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <a
                                    class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                                    deluxe</a>
                                <div class="flex items-center mb-4">
                                    <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                                    <p class="text-gray-700">(1214 reviewes)</p>
                                </div>
                                <div class="flex items-end">
                                    <p class="font-bold text-3xl mr-3">$99.00</p>
                                    <p>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div class="relative overflow-hidden h-72">
                                <img src="../assets/img/hotel2.png" alt=""
                                    class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                                <div class="absolute flex items-center text-white bottom-3 left-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>Indonesia</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <a
                                    class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                                    paradise international</a>
                                <div class="flex items-center mb-4">
                                    <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                                    <p class="text-gray-700">(1214 reviewes)</p>
                                </div>
                                <div class="flex items-end">
                                    <p class="font-bold text-3xl mr-3">$99.00</p>
                                    <p>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-500">
                            <div class="relative overflow-hidden h-72">
                                <img src="../assets/img/hotel3.png" alt=""
                                    class="group-hover:scale-125 h-full transition-all duration-500 absolute inset-0 w-full cursor-pointer">
                                <div class="absolute flex items-center text-white bottom-3 left-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p>Kualalampur</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <a
                                    class="transition-all duration-500 hover:text-violet-600 text-lg text-gray-900 font-bold mb-4 block cursor-pointer">Hotel
                                    kualalampur</a>
                                <div class="flex items-center mb-4">
                                    <p class="text-violet-600 mr-3">4.8/5 Excellent</p>
                                    <p class="text-gray-700">(1214 reviewes)</p>
                                </div>
                                <div class="flex items-end">
                                    <p class="font-bold text-3xl mr-3">$99.00</p>
                                    <p>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto yourdestinations mt-24 px-4">
            <h2
                class="before:w-56 before:-bottom-5 before:right-0 before:left-0 before:mx-auto before:h-1 before:bg-violet-600 before:absolute relative  text-center text-gray-900 text-4xl font-bold">
                Destinations for you</h2>
            <div
                class="w-full max-w-5xl mx-auto mt-24 px-5 border shadow-xl rounded-xl flex flex-wrap gap-4 items-center justify-around py-6">
                <div @click="toggleDestinationsTabs(1)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 1, 'bg-violet-600 text-white': openDestinationsTab === 1, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Nepal
                </div>
                <div @click="toggleDestinationsTabs(2)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 2, 'bg-violet-600 text-white': openDestinationsTab === 2, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Malaysia
                </div>
                <div @click="toggleDestinationsTabs(3)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 3, 'bg-violet-600 text-white': openDestinationsTab === 3, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Indonesia
                </div>
                <div @click="toggleDestinationsTabs(4)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 4, 'bg-violet-600 text-white': openDestinationsTab === 4, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Turkey
                </div>
                <div @click="toggleDestinationsTabs(5)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 5, 'bg-violet-600 text-white': openDestinationsTab === 5, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    China
                </div>
                <div @click="toggleDestinationsTabs(6)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 6, 'bg-violet-600 text-white': openDestinationsTab === 6, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Darjeeling
                </div>
                <div @click="toggleDestinationsTabs(7)"
                    :class="{ 'text-black bg-transparent': openDestinationsTab !== 7, 'bg-violet-600 text-white': openDestinationsTab === 7, }"
                    class="rounded border-2 border-violet-600 py-2 px-7 gap-2 cursor-pointer">
                    Italy
                </div>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-6">
                <div v-bind:class="{ hidden: openDestinationsTab !== 1, flex: openDestinationsTab === 1 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small1.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 1, flex: openDestinationsTab === 1 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small2.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 2, flex: openDestinationsTab === 2 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small3.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 2, flex: openDestinationsTab === 2 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small4.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 3, flex: openDestinationsTab === 3 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small5.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 3, flex: openDestinationsTab === 3 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small6.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 4, flex: openDestinationsTab === 4 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small1.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 5, flex: openDestinationsTab === 5 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small2.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 5, flex: openDestinationsTab === 5 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small3.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 6, flex: openDestinationsTab === 6 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small4.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 6, flex: openDestinationsTab === 6 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small5.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
                <div v-bind:class="{ hidden: openDestinationsTab !== 7, flex: openDestinationsTab === 7 }"
                    class="flex items-stretch border rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-lg">
                    <img src="../assets/img/destination-small6.png">
                    <div class="p-5">
                        <a
                            class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer">Everest
                            trek to Base Camp</a>
                        <div class="flex items-center">
                            <span class="font-bold text-gray-600">Price starts at</span>
                            <span class="text-violet-600 font-bold ml-2">$105.00</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="container mx-auto latestTravel mt-24 px-4">
            <h2
                class="before:w-56 before:-bottom-5 before:right-0 before:left-0 before:mx-auto before:h-1 before:bg-violet-600 before:absolute relative  text-center text-gray-900 text-4xl font-bold">
                Latest travel news</h2>
            <div class="grid lg:grid-cols-2 grid-cols-1 justify-center gap-4 mt-20">
                <div>
                    <div class="flex items-scretch mb-4 overflow-hidden bg-white">
                        <img src="../assets/img/destination-small6.png">
                        <div class="md:p-5 p-3">
                            <a
                                class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer md:pr-36">Revolutionising
                                the travel industry, one partnership at a time</a>
                            <div class="flex items-center">
                                <span class="text-violet-600 font-bold ml-2">26 Oct 2021</span>
                                <span class="font-bold text-gray-600 ml-7">5min read</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-scretch mb-4 overflow-hidden bg-white">
                        <img src="../assets/img/small2.png">
                        <div class="md:p-5 p-3">
                            <a
                                class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer md:pr-36">it
                                is a long established fact that a reader will be distracted.</a>
                            <div class="flex items-center">
                                <span class="text-violet-600 font-bold ml-2">26 Oct 2021</span>
                                <span class="font-bold text-gray-600 ml-7">5min read</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-scretch mb-4 overflow-hidden bg-white">
                        <img src="../assets/img/small3.png">
                        <div class="md:p-5 p-3">
                            <a
                                class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer md:pr-36">There
                                are many variations of passages of sum available</a>
                            <div class="flex items-center">
                                <span class="text-violet-600 font-bold ml-2">26 Oct 2021</span>
                                <span class="font-bold text-gray-600 ml-7">5min read</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-scretch mb-4 overflow-hidden bg-white">
                        <img src="../assets/img/small4.png">
                        <div class="md:p-5 p-3">
                            <a
                                class="md:text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer md:pr-36">Contrary
                                to popular belief, Lorem Ipsum is not simply.</a>
                            <div class="flex items-center">
                                <span class="text-violet-600 font-bold ml-2">26 Oct 2021</span>
                                <span class="font-bold text-gray-600 ml-7">5min read</span>
                            </div>
                        </div>
                    </div>
                    <a href="News.html"
                        class="flex items-center transition-all duration-500 mt-6 hover:text-black cursor-pointer text-violet-600 font-bold">
                        <span class="text-2xl">See all article</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 mt-2 ml-2 font-bold" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
                <div>
                    <div class="w-full md:h-96 overflow-hidden rounded-2xl">
                        <img src="../assets/img/new-big.png" alt=""
                            class="w-full h-full transition-all duration-500 hover:scale-125 cursor-pointer">
                    </div>
                    <a
                        class="text-xl font-bold text-gray-700 mb-3 block transition-all duration-500 hover:text-violet-600 cursor-pointer md:pr-36 my-5">There
                        are many variations of passages available but</a>
                    <p class="text-xl text-gray-500">
                        It is a long established fact that a reader will be distracted by the readable content of. The point
                        of using Lorem Ipsum is that it has a more
                    </p>
                    <p class="text-xl text-gray-500 mt-5">
                        It is a long established fact that a reader will be distracted by the readable long established fact
                        that a reader will be distracted content of a page when looking at its layout.
                    </p>
                    <a href="NewsDetails.html"
                        class="flex items-center transition-all duration-500 mt-2 hover:text-black cursor-pointer text-violet-600 font-bold">
                        <span class="text-2xl">Read full article</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 mt-2 ml-2 font-bold" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <section class="container mx-auto Ourpartners mt-24 px-4">
            <h2
                class="before:w-56 before:-bottom-5 before:right-0 before:left-0 before:mx-auto before:h-1 before:bg-violet-600 before:absolute relative  text-center text-gray-900 text-4xl font-bold">
                Our partners</h2>
            <!-- Swiper -->
            <div class="swiper mySwiper2 my-24" ref="brands">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../assets/img/1.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/2.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/3.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/4.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/5.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/6.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/8.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/6.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/8.png" alt=""
                            class="transition-all duration-200 block mx-auto cursor-pointer contrast-0 hover:contrast-200">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>

        <section class="newsLetter bg-[#F3F6FD] py-24 px-4">
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-7 text-center sm:text-start">
                    <div class="flex flex-wrap justify-center md:justify-start items-center">
                        <img src="../assets/img/email.png" alt="" class="md:w-36 w-24">
                        <div class="ml-4">
                            <p class="font-bold mb-2 mt-2 text-xl">Get the latest news and offers</p>
                            <h3 class="text-4xl font-bold">Subscribe to our newsletter</h3>
                        </div>
                    </div>
                    <form class="flex items-center">
                        <input type="email" placeholder="Enter your mail address"
                            class="transition-all duration-150 w-full shadow-xl outline-2 pl-3 h-16 rounded-tl-lg rounded-bl-lg border-none focus:outline-dashed outline-violet-600">
                        <a
                            class="text-white font-bold rounded-lg rounded-tl-none rounded-bl-none cursor-pointer bg-violet-600 border-2 border-violet-600 py-5 w-40 flex justify-center items-center ml-auto px-6 transition-all duration-500 hover:bg-slate-900 hover:border-slate-900">
                            Subscribe
                        </a>
                    </form>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore from 'swiper/core';
SwiperCore.use()
// import { useI18n } from 'vue-i18n';

export default {

    setup() {
    //   const { t } = useI18n()
    //   return { t }
    },
    data() {
        return {
            openTab: 1,
            openDestinationsTab: 1,
        };
    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber;
        },
        toggleDestinationsTabs: function (tabNumber) {
            this.openDestinationsTab = tabNumber;
        }
    },
    mounted() {
        new Swiper(this.$refs.bestTours, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 9,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 2.1,
                    spaceBetween: 24,
                },
                1020: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        }),
            new Swiper(this.$refs.brands, {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 9,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                breakpoints: {
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    876: {
                        slidesPerView: 5,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 7,
                        spaceBetween: 24,
                    },
                },
            })
    }

}
</script>

<style></style>