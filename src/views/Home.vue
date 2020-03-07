<template>
  <div class="home container">
    <div class="frame">
      <div id="content-wrapper">
        <p id="first">Hi, my name is <b>Griffin Pfenniger</b></p>
        <p id="second">and I am a {{ rndmDevel() }} <b>developer</b></p>
        <h4>More About Me</h4>
        <p>
          I have built my passion around combining technology and the outdoors,
          and I am always looking for the next big challenge.
        </p>
        <p>
          I built this site using Vue and TypeScript, as well as the best
          possible coding practices I know.
        </p>
        <p>
          You can reach out to me at pfenniger.griffin@gmail.com
        </p>
      </div>
      <Hexagons v-show="false" />
    </div>
  </div>
</template>

<script>
import Hexagons from "@/components/Hexagons";

export default {
  name: "Home",
  data: () => {
    return {
      devel: [
        "web",
        "Java",
        "frontend",
        "backend",
        "C",
        "C++",
        "JavaScript",
        "software"
      ]
    };
  },
  components: {
    Hexagons
  },
  methods: {
    rndmDevel() {
      return this.devel[Math.floor(Math.random() * this.devel.length)];
    }
  }
};
</script>

<style lang="scss" scoped>
#first {
  font-size: 24px;
  margin-bottom: 5px;
}

#second {
  font-size: 20px;
  margin-top: 5px;
}

.home {
  display: flex;
  flex-direction: column;
}

#content-wrapper {
  flex: 10;
}
</style>
