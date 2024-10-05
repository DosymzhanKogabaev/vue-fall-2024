<template>
    <div class="blog-card" :style="cardStyle">
      <div class="content">
        <div v-if="tags" class="tags">
            <div class="red">
                Random tag 1
            </div>
            <div class="green">
                Random tag 2
            </div>
        </div>
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      imgurl: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      tags: {
        type: Boolean,
        required: true,
      },
    },
    computed: {
      cardStyle() {
        return {
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0)),url(${this.imgurl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .red {
    border: none;
    border-radius: 12px;
    padding: 8px 0;
    width: 30%;
    background-color: rgb(209, 110, 110);
  }
  .green {
    border: none;
    border-radius: 12px;
    padding: 8px 0;
    width: 30%;
    background-color: rgb(61, 124, 61);
  }
  .tags {
    gap: 12px;
    display: flex;
    margin-bottom: 12px;
    text-align: center;
  }
  .content {
    color: white;
    padding: 10px 20px;
    width: 100%;
  }
  
  .title {
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
  }
  
  .description {
    margin-top: 10px;
    font-size: 1em;
    width: 100%;
    color: rgb(151, 151, 151);
  }
  .blog-card {
    cursor: pointer;
  }
  </style>
  