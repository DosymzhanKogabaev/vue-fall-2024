<template>
  <div class="list-manager">
    <div class="title">Manage Your List</div>

    <div class="flex">
      <input class="input" v-model="newItem" placeholder="Add a new item" @keyup.enter="addItem" />
      <div class="buttons">
        <button @click="addItem" class="add-button">Add Item</button>
        <button @click="toggleVisibility" class="hide-button">{{ isListVisible ? 'Hide' : 'Show' }} List</button>
      </div>
    </div>
    <p v-if="items.length === 0">The list is empty!</p>

    <ul v-show="isListVisible">
      <li v-for="(item, index) in items" :key="index">
        <div class="item-title">{{ item }}</div>
        <button @click="removeItem(index)" class="remove-button">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      newItem: '',
      isListVisible: true
    };
  },
  mounted() {
    this.items = ['Item 1', 'Item 2', 'Item 3'];
    console.log('Component mounted! Initial items set.');
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        this.items.push(this.newItem);
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    toggleVisibility() {
      this.isListVisible = !this.isListVisible;
    }
  }
};
</script>

<style scoped>
.flex {
  gap: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.buttons {
  gap: 20px;
  display: flex;
}
.input {
  width: 100%;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.remove-button {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 0px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.remove-button:hover,
.remove-button:focus {
  background-color: #F082AC;
}

.hide-button {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.hide-button:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.hide-button:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.hide-button:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.hide-button:focus {
  outline: 1px transparent;
}

.hide-button:before {
  display: none;
}

.hide-button:-webkit-details-marker {
  display: none;
}

.add-button {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.add-button:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.add-button:hover {
  background-color: #2c974b;
}

.add-button:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.add-button:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.add-button:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

.list-manager {
  width: 80%;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  font-size: larger;
}
.title {
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: x-large;
}
.item-title {
  margin: auto 0;
}
</style>
