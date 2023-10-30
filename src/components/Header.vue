<template>
    <header class="bg-violet-600 lg:bg-transparent z-30 sticky lg:static top-0">
        <div>
            <div class="md:flex hidden justify-between items-center lg:container px-4 lg:px-0 mx-auto py-3">
                <div class="flex items-center justify-start w-2/4">
                    <div class="headerSocial items-center hidden lg:flex justify-between gap-1">
                        <a class="cursor-pointer">
                            <img src="../assets/img/icons8-facebook-20.png" alt="">
                        </a>
                        <a class="cursor-pointer">
                            <img src="../assets/img/icons8-twitter-squared-20.png" alt="">
                        </a>
                        <a class="cursor-pointer">
                            <img src="../assets/img/icons8-instagram-20.png" alt="">
                        </a>
                        <a class="cursor-pointer">
                            <img src="../assets/img/icons8-linkedin-20.png" alt="">
                        </a>
                    </div>
                    <p
                        class="text-white transition-all hover:text-black duration-500 lg:border-x-2 border-r px-3 mx-3 border-white cursor-pointer">
                        +011 234 567 89</p>
                    <p class="text-white transition-all hover:text-black duration-500 cursor-pointer">contact@domain.com</p>
                </div>
                <div class="w-2/4">
                    <ul class="flex text-white items-center justify-end gap-6">
                        <li class="transition-all hover:text-black duration-500 cursor-pointer">
                            <a href="login.html" id="login">
                                {{ $t("nav.login") }}
                            </a>
                        </li>
                        <li class="border-l-2 pl-5 transition-all hover:text-black duration-500 cursor-pointer">
                            <a href="signUp.html" id="signUp">
                                {{ $t("nav.sign up") }}
                            </a>
                        </li>
                        <!--  -->
                        <li>
                            <LanguageSwitcher></LanguageSwitcher>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="text-white absolute w-full">
            <div class="flex justify-between items-center lg:container mx-auto py-3 px-4 lg:px-0">
                <div class="flex items-center gap-20">
                    <a class="text-white text-4xl font-bold">
                        {{ $t("nav.flight lady") }}
                    </a>
                    <ul id="mobileMnu"
                        class="bg-black text-center overflow-y-scroll lg:overflow-visible py-4 lg:bg-transparent z-30 w-72 lg:w-auto text-white items-center lg:justify-end gap-6 fixed lg:static inset-y-0 transition-all duration-300 block lg:flex text-xl lg:text-base">
                        <li
                            class="py-4 lg:py-0 transition-all lg:hover:text-black justify-center duration-500 cursor-pointer">
                            <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
                        </li>
                        <li class="py-4 lg:py-0 transition-all lg:hover:text-black relative duration-500  group">
                            <div class="justify-center flex items-center">
                                <a class="cursor-pointer" id="Tours">
                                    {{ $t("nav.tours") }}
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div
                                class="dropdown lg:absolute lg:text-left bg-white lg:rounded-xl transition-all duration-300 w-full lg:w-60 text-black text-center lg:hidden lg:group-hover:block lg:group-hover:top-6 top-44 overflow-hidden">
                                <ul class="list-none font-bold flex flex-col gap-2">
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Tour search result.html" id="Tour">
                                            Tour
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="TourDetails.html" id="TourDetails">
                                            Tour Details
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="TourSubmission.html" id="TourBooking">
                                            Tour Booking
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Top destinations.html" id="TopDestination">
                                            Top Destination
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Destination details.html" id="DestinationDetails">
                                            Destination Details
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="py-4 lg:py-0 transition-all lg:hover:text-black group relative duration-500 ">
                            <div class="justify-center flex items-center">
                                <a class="cursor-pointer" id="Flights">
                                    {{ $t("nav.flights") }}
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div
                                class="dropdown lg:absolute lg:text-left bg-white lg:rounded-xl transition-all duration-300 w-full lg:w-60 text-black text-center lg:hidden lg:group-hover:block lg:group-hover:top-6 top-44 overflow-hidden">
                                <ul class="list-none font-bold flex flex-col gap-2">
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Flight search result.html" id="Flight">
                                            Flight
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Flight submission.html" id="FlightBooking">
                                            Flight Booking
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="py-4 lg:py-0 transition-all lg:hover:text-black relative group duration-500 ">
                            <div class="justify-center flex items-center">
                                <a class="cursor-pointer" id="Hotels">
                                    {{ $t("nav.hotel") }}
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="dropdown lg:absolute lg:text-left bg-white lg:rounded-xl transition-all duration-300 w-full lg:w-60 text-black text-center lg:hidden lg:group-hover:block lg:group-hover:top-6 top-44 overflow-hidden">
                                <ul class="list-none font-bold flex flex-col gap-2">
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="HotelSearchResult.html" id="Hotel">
                                            Hotel
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Hotel details.html" id="HotelBooking">
                                            Hotel Booking
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="RoomDetails.html" id="HotelDetails">
                                            Hotel Details
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="roomBooking.html" id="RoomBooking">
                                            Room Booking
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="py-4 lg:py-0 transition-all lg:hover:text-black group relative duration-500">
                            <div class="justify-center flex items-center">
                                <a class="cursor-pointer" id="Newses">
                                    {{ $t("nav.news") }}
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="dropdown lg:absolute lg:text-left bg-white lg:rounded-xl transition-all duration-300 w-full lg:w-60 text-black text-center lg:hidden lg:group-hover:block lg:group-hover:top-6 top-44 overflow-hidden">
                                <ul class="list-none font-bold flex flex-col gap-2">
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="News.html" id="News">
                                            News
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="NewsDetails.html" id="NewsDetails">
                                            News Details
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="py-4 lg:py-0 transition-all relative lg:hover:text-black group duration-500 ">
                            <div class="justify-center flex items-center">
                                <a class="cursor-pointer" id="Pages">
                                    {{ $t("nav.pages") }}
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div
                                class="dropdown lg:absolute lg:text-left bg-white lg:rounded-xl transition-all duration-300 w-full lg:w-60 text-black text-center lg:hidden lg:group-hover:block lg:group-hover:top-6 top-44 overflow-hidden">
                                <ul class="list-none font-bold flex flex-col gap-2">
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="about.html" id="About">
                                            About
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="team.html" id="Team">
                                            Team
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Testimonials.html" id="Testimonials">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Faqs.html" id="FAQ">
                                            FAQ
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="Booking Confirmation.html" id="BookingConfirmation">
                                            Booking Confirmation
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a id="UserPages">
                                            User Pages
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a id="CustomerDashboard">
                                            Customer Dashboard
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="PrivacyPolicy.html" id="PrivacyPolicy">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li
                                        class="cursor-pointer transition-all px-4 py-2 duration-300 hover:text-violet-600 hover:bg-gray-200">
                                        <a href="error404.html" id="Error">
                                            404 Error
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            class="py-4 lg:py-0 transition-all lg:hover:text-black duration-500 cursor-pointer justify-center flex items-center">
                            <a href="contact.html" id="Contact">
                                {{ $t("nav.contact") }}
                            </a>
                        </li>
                        <div class="items-center flex justify-center mt-4 lg:hidden text-white gap-5">
                            <div id="searchContent2"
                                class="searchContent fixed flex justify-center items-center w-full bg-[#000000d9] z-50 transition-all duration-700">
                                <svg xmlns="http://www.w3.org/2000/svg" onclick="closeSearchContent2()"
                                    class="h-9 w-9 top-7 transition-all duration-300 hover:text-red-700 cursor-pointer right-10 text-white absolute z-50"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <div class="relative">
                                    <input type="search"
                                    class="w-96 rounded-full h-14 bg-white text-black outline-none pl-4 font-bold"
                                    placeholder="search here...">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="transition-all duration-300 hover:text-violet-600 cursor-pointer h-16 w-16 absolute right-0 -top-1 text-black"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <img src="../assets/img/icons8-search-40.png" alt="" class="cursor-pointer hue-rotate-60"
                            onclick="showSearchResult2()">
                        <a id="BecomePartner" href="partner.html"
                            class="font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 p-2 transition-all duration-500 hover:bg-transparent">
                            {{ $t("nav.partner") }}
                        </a>
                    </div>
                </ul>
            </div>
            <div class="items-center hidden lg:flex text-white gap-5">
                <div id="searchContent"
                    class=" fixed flex justify-center items-center w-full bg-[#000000d9] z-50 transition-all duration-700">
                    <svg xmlns="http://www.w3.org/2000/svg" onclick="closeSearchContent()"
                        class="h-9 w-9 top-7 transition-all duration-300 hover:text-red-700 cursor-pointer right-10 text-white absolute z-50"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div class="relative">
                        <input type="search"
                            class="w-96 rounded-full h-14 bg-white text-black outline-none pl-4 font-bold"
                            placeholder="search here...">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="transition-all duration-300 hover:text-violet-600 cursor-pointer h-16 w-16 absolute right-0 -top-1 text-black"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <img src="../assets/img/icons8-search-40.png" alt="" class="cursor-pointer hue-rotate-60"
                    onclick="showSearchResult()">
                <a id="BecomePartner2" href="partner.html"
                    class="font-bold rounded-lg cursor-pointer bg-violet-600 border-2 border-violet-600 p-2 transition-all duration-500 hover:bg-transparent">
                    {{ $t("nav.partner") }}
                </a>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" id="hamIcon" onclick="toggleMenu()"
                class="h-9 w-9 flex lg:hidden text-white cursor-pointer" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    </div>
</header></template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
import Tr from "@/i18n/translation"

export default {
    components: { LanguageSwitcher },
    setup() {
        return { Tr }
    }
}
</script>

<style></style>