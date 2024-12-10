<template>
    <div class="bg-[#f4f9ff]">
      <div class="wrapper flex py-12 justify-between">
        <div>
          <div class="text-[#757575] pb-4">NAVIGATION</div>
          <ul class="flex flex-col gap-y-2">
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/faq">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/investor-relations">Investor Relations</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/jobs">Jobs</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/about-us">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/help-centre">Help Centre</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div class="text-[#757575] pb-4">LEGAL</div>
          <ul class="flex flex-col gap-y-2">
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/privacy-policy">Privacy Policy</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/terms-of-service">Terms Of Service</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/cookie-preferences">Cookie Preferences</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover:text-[#9e9e9e]" to="/corporate-information">Corporate Information</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <div class="text-[#757575] pb-4">TALK TO US</div>
          <ul class="flex flex-col gap-y-2">
            <li>kogabay21@gmail.com</li>
            <li>+7 708 528 2457</li>
          </ul>
        </div>
        <div>
          <div class="text-[#757575] pb-4">FOLLOW US</div>
          <div class="flex gap-x-4">
            <a>
              <div class="box-border opacity-25 border-2 border-[#424242] rounded-full w-10 h-10 flex justify-center items-center">
                <div class="w-fit">
                  <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.55073 15V7.49941H0V4.91457H1.55073V3.36264C1.55073 1.25393 2.42638 0 4.91418 0H6.98534V2.58514H5.69072C4.72228 2.58514 4.65821 2.94637 4.65821 3.62054L4.65469 4.91428H7L6.72556 7.49912H4.65469V15H1.55073Z" fill="#424242" />
                  </svg>
                </div>
              </div>
            </a>
            <a>
              <div class="box-border opacity-25 border-2 border-[#424242] rounded-full w-10 h-10 flex justify-center items-center">
                <div class="w-fit">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H0V5H3V14Z" fill="#424242" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49108 3H1.47404C0.578773 3 0 2.33303 0 1.49948C0 0.648306 0.5964 0 1.50865 0C2.42091 0 2.98269 0.648306 3 1.49948C3 2.33303 2.42091 3 1.49108 3Z" fill="#424242" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 13.9998H11.0519V9.29535C11.0519 8.11371 10.6253 7.30738 9.55814 7.30738C8.74368 7.30738 8.25855 7.85096 8.04549 8.37598C7.96754 8.56414 7.94841 8.8263 7.94841 9.08911V14H5C5 14 5.03886 6.03183 5 5.20672H7.94841V6.45221C8.33968 5.85348 9.04046 5 10.6057 5C12.5456 5 14 6.25705 14 8.95797L13.9999 13.9998Z" fill="#424242" />
                  </svg>
                </div>
              </div>
            </a>
            <a>
              <div class="box-border opacity-25 border-2 border-[#424242] rounded-full w-10 h-10 flex justify-center items-center">
                <div class="w-fit">
                  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.31224 2.92617L6.34042 3.40195L5.87076 3.34369C4.16119 3.12037 2.66767 2.363 1.39959 1.09102L0.779637 0.459879L0.619952 0.92595C0.281797 1.9649 0.497841 3.06211 1.20233 3.80006C1.57806 4.20787 1.49352 4.26613 0.84539 4.02338C0.619952 3.9457 0.422695 3.88744 0.403908 3.91657C0.338156 3.98454 0.563593 4.86814 0.742064 5.21769C0.986288 5.70318 1.48413 6.17896 2.02893 6.46055L2.4892 6.68387L1.9444 6.69358C1.41838 6.69358 1.39959 6.70329 1.45595 6.9072C1.64381 7.53834 2.38588 8.20831 3.21248 8.49961L3.79486 8.70351L3.28763 9.01423C2.53617 9.46088 1.65321 9.71333 0.770244 9.73275C0.347549 9.74246 0 9.7813 0 9.81043C0 9.90753 1.14597 10.4513 1.81289 10.6649C3.81365 11.296 6.19013 11.0242 7.97484 9.94637C9.24293 9.17929 10.511 7.65485 11.1028 6.17896C11.4222 5.39247 11.7415 3.95541 11.7415 3.26602C11.7415 2.81936 11.7697 2.7611 12.2957 2.22707C12.6057 1.91635 12.8969 1.57651 12.9532 1.47941C13.0472 1.29492 13.0378 1.00858 12.9788 0.792503C12.7951 0.150036 12.3741 -0.285935 11.5152 -0.495104C10.1344 -0.873753 8.54691 -0.313717 7.84773 0.442034C7.40892 0.928251 7.30842 1.24331 6.84714 1.59277C6.67604 1.80967 6.67198 2.17955 6.31331 2.68198C6.31224 2.68557 6.31331 2.68355 6.31224 2.92617Z" fill="#424242" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="text-[#757575] py-6 text-center">© 2023, All Rights Reserved</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  