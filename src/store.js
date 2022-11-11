import { reactive } from "vue";
export const store = reactive({
  listCharacters: [],
  loading: false,
  filterCategory: "",
});
