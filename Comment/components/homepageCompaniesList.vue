<template>
    <div class="w-full bg-[#f4f9ff] py-24 mt-6">
        <div class="wrapper grid grid-cols-2">
            <div>
                <div class="text-4xl font-medium">
                    Thousands of companies<br />
                    with honest reviews
                </div>
                <div class="text-xl mt-8">
                    Jumys.kz - the largest resource<br />
                    with reviews from employees.<br /><br />
                    Your feedback helps people make<br />informed career decisions.
                </div>
                <nuxt-link to="/signIn" v-if="isAuth">
                    <button
                        class="flex mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg pl-5 pr-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Leave Review
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill="#fff"
                                d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                        </svg>
                    </button>
                </nuxt-link>
                <nuxt-link to="/add-review-to-company" v-else-if="isUser">
                    <button
                        class="flex mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg pl-5 pr-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Leave Review
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill="#fff"
                                d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                        </svg>
                    </button>
                </nuxt-link>
                <nuxt-link to="/add-review-to-company" v-else>
                    <button
                        class="flex mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg pl-5 pr-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Leave Review
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill="#fff"
                                d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                        </svg>
                    </button>
                </nuxt-link>
            </div>
            <div class=" bg-[#f4f9ff] flex flex-col gap-2 origin-center m-auto gradient-container">
                <div class="scroll-wrapper">
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://img.utdstc.com/icon/0d0/5d1/0d05d15dbc0d566ba90396fe8ad5a6c761a9c44120fd12c48aa64e359290887a:200">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://icons-for-free.com/iff/png/512/book+contact+contacts+cyrillic+email+mail+yandex+icon-1320073244576592997.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://play-lh.googleusercontent.com/xOnLjnGv3K470sVBZsoRC-NMBWn9wFIUicTx9ADcagzRMOzY6o4TTwNl_1kXc85aHDM">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://wholesgame.com/wp-content/uploads/Valve-Logo-Thumb-Square.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrdMAjBRh6yaRMaZ7Smx7JKiPXVTW__OeKw&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn-icons-png.freepik.com/512/2496/2496098.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://play-lh.googleusercontent.com/RSp_R_7LHZhfZqqnB5TC1umwJskQ2a4Aio7_vcoo0XvpRyMOaept0Jy8WUrOzBSjFXo">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://pbs.twimg.com/profile_images/1694281832643104769/69-WQCQU_400x400.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-amd-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-14-pack-icons-283608.png?f=webp">
                        </div>
                    </div>
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://img.utdstc.com/icon/0d0/5d1/0d05d15dbc0d566ba90396fe8ad5a6c761a9c44120fd12c48aa64e359290887a:200">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://icons-for-free.com/iff/png/512/book+contact+contacts+cyrillic+email+mail+yandex+icon-1320073244576592997.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://play-lh.googleusercontent.com/xOnLjnGv3K470sVBZsoRC-NMBWn9wFIUicTx9ADcagzRMOzY6o4TTwNl_1kXc85aHDM">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://wholesgame.com/wp-content/uploads/Valve-Logo-Thumb-Square.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOrdMAjBRh6yaRMaZ7Smx7JKiPXVTW__OeKw&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn-icons-png.freepik.com/512/2496/2496098.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://play-lh.googleusercontent.com/RSp_R_7LHZhfZqqnB5TC1umwJskQ2a4Aio7_vcoo0XvpRyMOaept0Jy8WUrOzBSjFXo">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://pbs.twimg.com/profile_images/1694281832643104769/69-WQCQU_400x400.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-amd-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-14-pack-icons-283608.png?f=webp">
                        </div>
                    </div>
                </div>
                <div class="scroll-wrapper">
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://www.researchgate.net/publication/315876622/figure/fig1/AS:481771348336640@1491874648697/The-logo-of-Tesla-Inc.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://photos.prnewswire.com/prnfull/20140227/672103">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://images.freeimages.com/fic/images/icons/2794/metro_ui/512/asus.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://steamuserimages-a.akamaihd.net/ugc/853847626043375675/1D3E4D530149041F5A8B0EC452498F04BE24B701/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://paternostersquare.info/wp-content/uploads/2021/04/paternoster-aquare-retailer-starbucks@2x.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/epkf5xup9yoeb0lut6ax">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNJzVu9vKR5brykcvWrA9Y8OphHvi2K9vQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwT7wRkV7TwBEH9J-eb3RgI458xpqn5QMujg&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://st5.depositphotos.com/32634758/65017/i/450/depositphotos_650178162-stock-photo-logo-monogram-gaming-hexagon-geometric.jpg">
                        </div>
                    </div>
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://www.researchgate.net/publication/315876622/figure/fig1/AS:481771348336640@1491874648697/The-logo-of-Tesla-Inc.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://photos.prnewswire.com/prnfull/20140227/672103">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://images.freeimages.com/fic/images/icons/2794/metro_ui/512/asus.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://steamuserimages-a.akamaihd.net/ugc/853847626043375675/1D3E4D530149041F5A8B0EC452498F04BE24B701/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://paternostersquare.info/wp-content/uploads/2021/04/paternoster-aquare-retailer-starbucks@2x.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/epkf5xup9yoeb0lut6ax">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNJzVu9vKR5brykcvWrA9Y8OphHvi2K9vQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwT7wRkV7TwBEH9J-eb3RgI458xpqn5QMujg&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://st5.depositphotos.com/32634758/65017/i/450/depositphotos_650178162-stock-photo-logo-monogram-gaming-hexagon-geometric.jpg">
                        </div>
                    </div>
                </div>
                <div class="scroll-wrapper">
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuFet-N7i0DU9xhlSb9vSoswxYRpA6HVUYw&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UyjP39MgKJZPL9kYWUCS0yeSpW7-9x25ig&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-twitch-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461838.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Blue_square_B.PNG">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.prod.website-files.com/65cafeae0d62d9e4163d1545/66c4a043167cefa18e336c48_AD_4nXehPOTB-53PP_7112KJAX9MIGmsPTf9bBuC1mSCmYM93jL2QzZ-edVqO6nt0hkEM8Jml8kyAgSy1ijctKcU8pAWdebNfeOrXorninN4Q9PX0KGIrxzKnnOwbrW86IlfzvYxGQjzHsU15tW5-cmF29bcSCM.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuLBYb52BS9s5Px_oPqYgCKIX4b7M69-86Q&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdgVXcHtltpjKbYajzrGHHCLhPfeBVcASYQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://play-lh.googleusercontent.com/O08oIs6uFjlLqLdV205X7VRuT8QiO_xm3G5VgQc8paHSf6_QH0PKJYPZIxMRR0AzBQ">
                        </div>
                    </div>
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuFet-N7i0DU9xhlSb9vSoswxYRpA6HVUYw&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UyjP39MgKJZPL9kYWUCS0yeSpW7-9x25ig&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-twitch-logo-icon-download-in-svg-png-gif-file-formats--major-websites-set-pack-logos-icons-461838.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Blue_square_B.PNG">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.prod.website-files.com/65cafeae0d62d9e4163d1545/66c4a043167cefa18e336c48_AD_4nXehPOTB-53PP_7112KJAX9MIGmsPTf9bBuC1mSCmYM93jL2QzZ-edVqO6nt0hkEM8Jml8kyAgSy1ijctKcU8pAWdebNfeOrXorninN4Q9PX0KGIrxzKnnOwbrW86IlfzvYxGQjzHsU15tW5-cmF29bcSCM.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuLBYb52BS9s5Px_oPqYgCKIX4b7M69-86Q&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdgVXcHtltpjKbYajzrGHHCLhPfeBVcASYQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://play-lh.googleusercontent.com/O08oIs6uFjlLqLdV205X7VRuT8QiO_xm3G5VgQc8paHSf6_QH0PKJYPZIxMRR0AzBQ">
                        </div>
                    </div>
                </div>
                <div class="scroll-wrapper">
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://habrastorage.org/getpro/moikrug/uploads/company/100/007/226/2/logo/medium_e195e2a733fedddddf7e07c5c9760574.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwxco5jiCyi-UMbSDtjtLr4O-mP6sRr3qZQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/aliexpress_logo_icon_167892.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://d-cb.jc-cdn.com/sites/crackberry.com/files/styles/large/public/article_images/2023/08/openai-logo.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24v_cDQFzKntk4IyClvs9BBWOUGSdXmyYGA&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://companieslogo.com/img/orig/2222.SR-99009d53.png?t=1720244490">
                        </div>
                    </div>
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://habrastorage.org/getpro/moikrug/uploads/company/100/007/226/2/logo/medium_e195e2a733fedddddf7e07c5c9760574.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwxco5jiCyi-UMbSDtjtLr4O-mP6sRr3qZQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/aliexpress_logo_icon_167892.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://d-cb.jc-cdn.com/sites/crackberry.com/files/styles/large/public/article_images/2023/08/openai-logo.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24v_cDQFzKntk4IyClvs9BBWOUGSdXmyYGA&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://companieslogo.com/img/orig/2222.SR-99009d53.png?t=1720244490">
                        </div>
                    </div>
                </div>
                <div class="scroll-wrapper">
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvlXr4p8knQvkuzNbG1-gdItKO4M5F3RJLw&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4fsfUGargvM5MNK-B1LHAnuh3yQNqS8Gbg&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://static.vecteezy.com/system/resources/previews/033/043/241/non_2x/letter-bp-logo-b-p-bp-logo-design-illustration-for-creative-company-business-industry-vector.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlElSYKhM9hZxdC4Y09Sc38f2dCw8Gu-Zgg&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://banner2.cleanpng.com/20180515/kwe/kisspng-cvs-pharmacy-cvs-health-health-care-prescription-d-5afb2725737601.7790088415264089974729.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.prod.website-files.com/63c140cca12dc30690fce304/66ac682af3eb9a615c892680_657c515d84608be885381b1f_UnitedHealth%2520Group.webp">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxIVmNXBsPHRYo7CH5uOhEVBjSuo3KT_7IQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-amd-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-14-pack-icons-283608.png?f=webp">
                        </div>
                    </div>
                    <div class=" scroll-row">
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvlXr4p8knQvkuzNbG1-gdItKO4M5F3RJLw&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4fsfUGargvM5MNK-B1LHAnuh3yQNqS8Gbg&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://static.vecteezy.com/system/resources/previews/033/043/241/non_2x/letter-bp-logo-b-p-bp-logo-design-illustration-for-creative-company-business-industry-vector.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlElSYKhM9hZxdC4Y09Sc38f2dCw8Gu-Zgg&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://banner2.cleanpng.com/20180515/kwe/kisspng-cvs-pharmacy-cvs-health-health-care-prescription-d-5afb2725737601.7790088415264089974729.jpg">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.prod.website-files.com/63c140cca12dc30690fce304/66ac682af3eb9a615c892680_657c515d84608be885381b1f_UnitedHealth%2520Group.webp">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxIVmNXBsPHRYo7CH5uOhEVBjSuo3KT_7IQ&s">
                        </div>
                        <div class="scroll-item">
                            <img class="rounded-xl"
                                src="https://cdn.iconscout.com/icon/free/png-256/free-amd-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-14-pack-icons-283608.png?f=webp">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isUser: false,
            isAuth: false,
        }
    },
    mounted() {
        this.isUser = this.isAuthorizedUser();
        this.isAuth = this.isAuthorized();
    },
    methods: {
        isAuthorizedUser() {
            return !!localStorage.getItem('user');
        },
        isAuthorized() {
            return !localStorage.getItem('user') && !localStorage.getItem('company')
        }
    },
}
</script>

<style scoped>
.gradient-container {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.gradient-container::before,
.gradient-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    /* Adjust the width of the gradient area */
    z-index: 10;
}

.gradient-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(244, 249, 255, 1), rgba(244, 249, 255, 0));
}

.gradient-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(244, 249, 255, 1), rgba(244, 249, 255, 0));
}

.scroll-wrapper {
    display: flex;
    width: 200%; /* Twice the width of the container */
    animation: scroll-loop 10s linear infinite;
}
.scroll-wrapper:nth-child(odd) {
    animation-direction: normal;
}

/* Even rows scroll to the right */
.scroll-wrapper:nth-child(even) {
    animation-direction: reverse;
}

.scroll-row {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-left: 16px;
}

.scroll-item {
    width: 50px;
    height: 50px;
    flex-shrink: 0; /* Prevent resizing */
}

.scroll-item img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

@keyframes scroll-loop {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%); /* Scroll one set of items */
    }
}
</style>