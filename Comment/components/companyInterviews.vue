<template>
  <div v-if="interviews.length > 0">
    <div class="text-3xl font-medium mb-10">
      Interviews for {{ company.companyName }}
    </div>
    <ul>
      <li v-for="(interview, index) in interviews" :key="index">
        <div class="border bg-white px-8 py-6 rounded-xl mb-4">
          <div class="flex justify-between">
            <div class="font-bold text-xl my-auto">{{ interview.jobTitle }}</div>
            <div class="flex">
              <div class="my-auto font-semibold text-lg">Difficulty: </div>
              <StarRating :rating="interview.difficulty" />
            </div>
          </div>
          <div>
              <span v-if="authors[interview.userId]">
                <span>{{ authors[interview.userId].username}}</span>
              </span>
              <span v-else>Loading...</span>
            </div>
          <div class="h-px bg-gray-200 mt-4"></div>
          <div class="mt-4 font-bold">Description:</div>
          <pre class="break-words">{{ interview.description }}</pre>
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="text-3xl font-medium mb-10">
    No Interviews for {{ company.companyName }}
  </div>
</template>

<script>
import { getUserByID } from "../services/userService";
export default {
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      interviews: [],
      authors: {}
    };
  },
  async created() {
    await this.fetchInterviews()
    await this.fetchAuthors();
  },
  methods: {
    async fetchInterviews() {
      if (this.company && this.company.interviews) {
        const interviewsList = [...this.company.interviews];
        this.interviews = interviewsList;
      }
    },
    async fetchAuthors() {
      const newAuthors = {};
      for (const interview of this.interviews) {
        const author = await getUserByID(interview.userId);
        newAuthors[interview.userId] = author;
      }
      this.authors = newAuthors;
      console.log(newAuthors)
    }
  }
};
</script>