import { addIcons, OhVueIcon } from 'oh-vue-icons';
import { FaEdit } from 'oh-vue-icons/icons';

addIcons(FaEdit);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VIcon', OhVueIcon);
});
