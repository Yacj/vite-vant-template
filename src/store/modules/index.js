import {defineStore} from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        name: "",
        age: '15'
    }),
    actions: {
        setUserName(name) {
            this.name = name
        }
    }
})