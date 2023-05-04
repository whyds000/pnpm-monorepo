<script setup lang="ts">
const props = defineProps({
  id: String,
});
const router = useRouter();
console.log(router.currentRoute.value);
console.log(props.id);
const url = `/home/${props.id}/more`;
</script>

<template>
  <div>
    <div>home/[id].vue: {{ id }}</div>
    <router-link :to="url"> more deep </router-link>
    <router-link to="/home/todo">todo</router-link>
    <router-view />
  </div>
</template>

<route>
{
  name: 'home-id',
  meta: {
 
    name:'卢本伟',
    age:123
   
  },
}
</route>
