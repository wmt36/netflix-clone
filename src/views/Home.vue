<template>
  <div class="home">
    <Slider
      v-for="(rowMovies, index) in movies"
      :key="index"
      :items="rowMovies"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { chunkArray } from '@/utils'

export default {
  name: 'Home',
  components: {
    Slider
  },
  data() {
    return {
      movies: []
    }
  },
  created() {
    fetch('csvjson.json')
    .then(res => res.json())
		.then(res => {
      this.movies = chunkArray(res, 20)
		})
	},
  methods: {
    enlarge(event) {
      event.currentTarget.classList.add('large')
    }
  }
}
</script>
