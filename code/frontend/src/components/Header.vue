<template>
  <header class="bg-[#ECF3EB] shadow-md">
    <div class="flex items-center justify-between">
      <img
        src="../assets/logo-de-sprong.svg"
        alt="Logo"
        class="w-44 h-44 ml-10"
      />
      <div class="flex space-x-4 mr-10">
        <router-link :to="`/begeleider/${gebruikerID}`">
          <!-- Use :to binding -->
          <Icon icon="mingcute:home-3-fill" class="text-[#456A50] w-12 h-12" />
        </router-link>

        <!-- Conditionally render the settings icon based on rolID -->

        <router-link v-if="rolID == '1'" :to="`/adminpanel`">
          <Icon
            icon="material-symbols-light:settings-account-box-rounded"
            class="text-[#456A50] w-12 h-12"
          />
        </router-link>

        <Icon
          icon="solar:logout-2-bold"
          class="text-[#C72C41] w-12 h-12 cursor-pointer"
          @click="logout"
        />
      </div>
    </div>
    <div class="h-0.5 bg-[#456A50]"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    Icon,
  },
  data() {
    return {
      gebruikerID: null as string | null,
      rolID: null as string | null,
    }
  },
  mounted() {
    const token = localStorage.getItem('access_token')
    if (token) {
      try {
        const decodedToken = jwtDecode(token) as {
          gebruikerID: string
          rol: { rolID: string }
        }
        this.gebruikerID = decodedToken.gebruikerID
        this.rolID = decodedToken.rol.rolID
      } catch (error) {
        console.error('Error decoding token:', error)
      }
    } 
  },
  setup() {
    const router = useRouter()

    const logout = () => {
      localStorage.removeItem('access_token')
      router.push('/')
    }

    return {
      logout,
    }
  },
})
</script>

<style scoped>
/* Voeg hier eventueel extra stijlen toe als dat nodig is */
</style>
