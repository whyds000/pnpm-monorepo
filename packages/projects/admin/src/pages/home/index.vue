<script setup lang="ts">
import {
  decrypt,
  encrypt,
  generateUUID,
  sessionUtils,
} from 'rl_basic_core/utils'

import type { pageQuery } from '@/api/types'
import type { userItem } from '@/api/User/User'
import { getAll, getById } from '@/api/User/User'

const token = sessionUtils.getItem<string>('token')
if (token) {
  const _token = decrypt(token)
  alert(_token)
}

else { sessionUtils.setItem('token', encrypt(generateUUID())) }

const userList = ref<userItem[]>()
const user = ref<userItem>()
const total = ref(0)
const query = reactive<pageQuery>({
  current: 1,
  size: 20,
})

getUserById('1')

getUserList()

async function getUserList() {
  try {
    const list = await getAll(query)
    userList.value = list.data.list
    total.value = list.data.total
  }
  catch (error) {

  }
}

async function getUserById(id: string) {
  try {
    const item = await getById(id)
    user.value = item.data
  }
  catch (error) {

  }
}
</script>

<template>
  <div class="testBox">
    <img src="@/assets/vue.svg" alt="">
  </div>
  <router-link to="/home/123456">
    id: 123456
  </router-link>
</template>

<style scoped>
.testBox {
  width: 100px;
  height: 100px;
  user-select: none;
  background-color: var(--app-color-warning);
}
</style>
