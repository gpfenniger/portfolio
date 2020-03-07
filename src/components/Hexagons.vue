<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400">
    <path
      v-for="(hex, index) in hexagons"
      :key="index"
      :d="makePath(hex[0], hex[1])"
      fill="#d8dee9"
      stroke="#eceff4"
    />
  </svg>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Hexagons",
  data: function() {
    return {
      hexagons: [
        [0, 300],
        [90, 300],
        [180, 300],
        [46, 230],
        [136, 230]
      ]
    };
  },
  methods: {
    makePath: (x, y) => {
      console.log(x);
      return `
        M${x},${y}
        L${x - 41.5},${y + 21.25}
        L${x - 41.5},${y + 64.75}
        L${x},${y + 85}
        L${x + 41.5},${y + 64.75}
        L${x + 41.5},${y + 21.25}
        L${x},${y}
        Z
    `;
    }
  }
});
</script>
