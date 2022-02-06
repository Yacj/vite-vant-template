<template>
  {{ age }}
  {{ name }}
  <van-button @click="setName">获取名字</van-button>
</template>

<script setup>
import {computed, ref} from "vue";
import {useUserStore} from "../../store/modules";

const store = useUserStore()
const title = ref('首页')
const name = computed(() => store.name)
const age = computed(() => store.age)

const setName = () => {
  store.setUserName('john')
}
</script>

<style scoped>

</style>
