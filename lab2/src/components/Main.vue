<template>
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
            <div @click="closeModal"
                class="menu">Menu
            </div>
            <div class="menu-block">
                <ul class="topics">
                <li v-for="topic in topics" :key="topic" @click="filterByTopic(topic)"
                    class="topic jersey-36">
                    {{ topic }} BLOG
                </li>
            </ul>
            <div
                class="contacts">
                <div style="margin-bottom: 1rem; text-align: center;">
                    CONTACTS
                </div>
                <div style="margin-bottom: 1rem;">PHONE: +1(234)-23-45-22</div>
                <div style="margin-bottom: 1rem;">ADDRESS: Green st., Yalow
                    park</div>
                <div style="margin-bottom: 1rem;">EMAIL: Yallow@park.info</div>
            </div>
            </div>
        </div>
    </div>

    <div class="header">
        <button class="menublock" @click="toggleModal">
            <img class="menu-button" src="../assets/menu.png">
        </button>
        <div class="textblock">
            <h1 class="text">New trips on Fall season! Full details on our Instagram accounts.</h1>
        </div>
        <div class="userblock">
            <img class="user-button" src="../assets/user.png">
        </div>
    </div>

    <div style="display: flex; flex: center; justify-content: center;">
        <div class="hexagon-div">
            <div style="text-align: left; margin-top: 10rem;">
                <div class="date">
                    <div class="border-blue" style="box-shadow: 0px 0px 15px #5BB9CD;">
                        13.09.2024
                    </div>
                </div>
                <div style="display: flex;
        justify-content: space-between;
        align-items: center; margin-top: 2rem;">
                    <div class="border-blue jersey" style=" font-size: 2.5rem;">
                        {{ selectedTopic }}
                    </div>
                    <div class="filter" @click="toggleDropdown" ref="dropdown" style="position: relative;">
                        <div class="dropdown-toggle" :class="{ open: isOpen }">
                            <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/filter--v1.png"
                                alt="filter--v1" />
                            <span style="margin-left: 1rem;">{{ selectedLabel }}</span> &#9660;
                        </div>

                        <ul v-if="isOpen" class="dropdown-menu">
                            <li @click="selectFilter('rating')">Rating</li>
                            <li @click="selectFilter('pubDate')">Publication Date</li>
                        </ul>
                    </div>
                    <button @click="nextPage" :disabled="currentPage >= totalPages"
                        style="color: white; cursor: pointer; border: none; background: none;">
                        <img class="arrow" src="https://www.svgrepo.com/show/4356/right-arrow.svg" alt="arrow" />
                        <div class="current-page">
                            {{ currentPage }} / {{ totalPages }}
                        </div>
                    </button>
                </div>
            </div>

            <div class="reviews">
                <div v-for="person in paginatedPersons" :key="person.id" class="review-card">
                    <div class="review-details  jersey-20">
                        <div style="display: flex; justify-content: space-between;">
                            <div style="background: #FFFFF526; padding: 0.5rem; text-align: start;">
                                <p><strong>{{ person.PersonName }}</strong> </p>
                                <p>{{ formatDateTime(new Date(person.PubDate)) }}</p>
                            </div>
                            <div>
                                <p><strong>Rating</strong> </p>
                                <p class="rating">
                                    <span class="stars" :style="getStarStyle(person.Rating)">
                                        ★★★★★
                                    </span>
                                </p>
                            </div>
                            <img :src="person.Avatar" :alt="person.PersonName" width="50" height="50">
                        </div>
                        <p style="word-break: break-all;">{{ person.Commentary }}</p>
                        <div style="display: flex; justify-content: end;">
                            <button class="like-button jersey-20" @click="incrementStars(person)">LIKE</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import PersonList from '../objects/PersonList.vue';
import { format, formatDistanceToNowStrict, isToday } from 'date-fns';

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            persons: [...PersonList.data().persons],
            filteredPersons: [...PersonList.data().persons],
            topics: ['ADVENTURE', 'NATURE', 'FASHION'],
            selectedTopic: 'ADVENTURE',
            currentPage: 1,
            itemsPerPage: 4,
            sortByRating: true,
            isModalOpen: false,
            isOpen: false,
            selectedFilter: 'rating',
            options: {
                rating: 'Rating',
                pubDate: 'Publication Date'
            }
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredPersons.length / this.itemsPerPage);
        },
        paginatedPersons() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredPersons.slice(startIndex, endIndex);
        },
        selectedLabel() {
            return this.options[this.selectedFilter];
        }
    },
    mounted() {
        this.filteredPersons = this.persons.filter(person => person.Topic === 'ADVENTURE');
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        filterByRatingOrDate() {
            if (this.sortByRating) {
                this.filteredPersons = _.orderBy(this.persons, ['Rating'], ['desc']);
                this.filterItem = 'PubDate';
            } else {
                this.filteredPersons = _.orderBy(this.persons, ['PubDate'], ['desc']);
                this.filterItem = 'Rating';
            }

            this.sortByRating = !this.sortByRating;
            this.currentPage = 1;
        },
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectFilter(option) {
            this.selectedFilter = option;
            this.isOpen = false;
            this.filterByRatingOrDate();
        },
        getStarStyle(rating) {
            const percentage = (rating * 100) / 5;

            return {
                background: `linear-gradient(90deg, yellow 0%, yellow ${percentage}%, #e4e4e4 ${percentage}%, #e4e4e4 100%)`,
                '-webkit-background-clip': 'text',
                'color': 'transparent',
            };
        },
        handleClickOutside(event) {
            const dropdown = this.$refs.dropdown;
            if (dropdown && !dropdown.contains(event.target)) {
                this.isOpen = false;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        filterByTopic(topic) {
            this.filteredPersons = this.persons.filter(person => person.Topic === topic);
            this.selectedTopic = topic;
            this.currentPage = 1;
            this.closeModal();
        },
        formatDateTime(date) {
            if (isToday(date)) {
                return `Today, ${format(date, 'HH:mm')}`;
            } else {
                return `${formatDistanceToNowStrict(date, { addSuffix: true })}, ${format(date, 'HH:mm')}`;
            }
        },
        incrementStars(person) {
            person.Rating += 0.1;
            if (!this.sortByRating) {
                this.filteredPersons = _.orderBy(this.persons, ['Rating'], ['desc']);
                this.filterItem = 'PubDate';
            }
        },
    }
}
</script>

<style scoped>
.date {
    font-size: 2em;
    color: #4b9cd3;
}

.filter {
    background: #EEFCF7;
    font-size: 2rem;
    font-weight: 900;
    color: #a6e168;
    cursor: pointer;
    padding: 0rem 1rem;
}

.dropdown-toggle {
    background: #EEFCF7;
    font-size: 2rem;
    font-weight: 900;
    color: #a6e168;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
}

.dropdown-toggle.open {
    background-color: #d1f2eb;
}

.dropdown-menu {
    position: absolute;
    top: 3rem;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
    padding: 1rem;
    font-size: 1.8rem;
    font-weight: 900;
    color: #555;
    cursor: pointer;
    background-color: #EEFCF7;
}

.dropdown-menu li:hover {
    background-color: #d1f2eb;
    color: #333;
}

.reviews {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.review-card {
    background: #5BB9CD;
    border-radius: 10px;
    width: 45%;
    margin: 10px 0;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    color: white;
}

.review-card img {
    border-radius: 50%;
    margin-right: 20px;
}

.review-details {
    flex-grow: 1;
}

.review-details p {
    margin: 5px 0;
}

.rating {
    color: #ffcc00;
}

.stars {
    font-size: 1.5em;
    letter-spacing: 6px;
    background: linear-gradient(90deg, #ffb904 0, #ffb904 55%, #e4e4e4 0, #e4e4e4 100%);
    color: transparent;
    line-height: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.like-button {
    background-color: #a6e168;
    padding: 2px 17px;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

.hexagon-div {
    width: 80%;
    background: linear-gradient(180deg, #FEFEFE 0%, #CED2D2 40%, #C1C5C5 62%, #B8BBBB 100%);
    clip-path: polygon(50% 10%, 100% 15%, 100% 85%, 50% 80%, 0% 85%, 0% 15%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px 20px 200px 20px;
}

.border-blue {
    background: #5BB9CD;
    color: white;
    padding: 0rem 1rem;
    width: 200px;
    border-radius: 8px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    z-index: 99999;
}

.modal-content {
    background-color: white;
    background: #C1EBF1;
    padding: 20px;
    width: 400px;
    height: 100vh;
    text-align: center;
}

.modal ul {
    list-style: none;
    padding: 0;
}

.modal ul li {
    cursor: pointer;
    margin-bottom: 21px;
    text-align: center;
}

.modal ul li:hover {
    text-decoration: underline;
}

.menu {
    background: #FFFFFF; 
    padding: 1rem; 
    font-size: 2rem; 
    border-radius: 10px; 
    cursor: pointer;
}

.menu-button {
    width: 51px;
    height: 51px;
}

.menublock {
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
}

.userblock {
    padding: 7px;
    display: flex;
    background-color: #7EEFFF;
    border: none;
    border-radius: 50%;
}

.user-button {
    width: 37px;
    height: 37px;
}

.textblock {
    width: 100%;
    background: linear-gradient(90deg, #E5F67C 0%, #ECEF64 33%, #D2E037 66%, #EAEE3A 100%);
    display: flex;
    border: none;
    border-radius: 10px;
}

.text {
    font-family: Inknut Antiqua;
    font-size: 17px;
    font-weight: 400;
    line-height: 43.84px;
    color: #FFADAD;
    margin: auto;
}

.header {
    margin-top: 6px;
    padding: 6px 0;
    width: 100vw;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    background: #FFFFFFBD;
}
.topics {
    background: #FFFFFF; 
    padding: 1rem 0rem; 
    border-radius: 12px;
}
.topic {
    background: linear-gradient(90deg, #4CD87C 0%, #42D669 63.42%, #3DD55E 100%); 
    padding: 1rem; 
    color: white;
}
.contacts {
    margin-top: 3rem; background: linear-gradient(180deg, #AFF090 0%, #45C330 100%); 
    padding: 1rem; 
    color: white;
    font-size: 1.5rem; 
    text-align: left;
    border: none;
    border-radius: 10px;
    margin: 0 10px;
}
.menu-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
    margin-top: 15px;
    background-color: #FFF;
    padding: 15px 0;
    border: none;
    border-radius: 12px;
}
.arrow {
    width: 93px;
    height: 75px;
}
.current-page {
    font-family: Italianno;
    font-size: 48px;
    font-weight: 400;
    line-height: 60px;
    text-align: left;
}
.jersey {
    font-family: "Jersey 15";
    font-size: 64px;
    font-weight: 400;
    line-height: 64px;
    text-align: left;
}
.jersey-20 {
    font-family: "Jersey 15";
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
}
.jersey-36 {
    font-family: "Jersey 15";
    font-size: 36px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;

}
</style>