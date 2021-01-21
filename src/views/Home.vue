<template>
  <div class="home">
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Slider
  },
  methods: {
    enlarge(event) {
      event.currentTarget.classList.add('large');
    }
  }
}
</script>
