<template>
  <div class="home container">
    <div id="content-wrapper">
      <p id="first">Hi, my name is <b>Griffin Pfenniger</b></p>
      <p id="second">and I am a {{ rndmDevel() }} <b>developer</b></p>
      <h4>More About Me</h4>
      <p>
        I have built my passion around combining technology and the outdoors,
        and I am always looking for the next big challenge.
      </p>
      <p>
        I built this site using Vue and TypeScript, as well as the best possible
        coding practices I know.
      </p>
      <p>
        You can reach out to me at pfenniger.griffin@gmail.com
      </p>
    </div>
  </div>
</template>

<script>
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
  methods: {
    rndmDevel() {
      return this.devel[Math.floor(Math.random() * this.devel.length)];
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}

#first {
  font-size: 24px;
  margin-bottom: 5px;
}

#second {
  font-size: 20px;
  margin-top: 5px;
}
</style>
