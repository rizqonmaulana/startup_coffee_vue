<template>
  <div>
    <div class="card d-flex flex-row" :style="data.style">
      <div>
        <p>{{ data.title }}</p>
        <h3>{{ data.currency }} {{ income }}</h3>
        <p>+{{ data.increase }}{{ data.increaseText }}</p>
      </div>
      <div class="align-self-center ml-auto">
        <img
          :src="'http://localhost:3000/assets/' + data.image"
          class="card-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'income'],
  methods: {
    showTitle() {
      console.log(this.title)
    }
  }
}
</script>

<style scoped>
.card {
  padding: 20px;
  border-radius: 10px;
  border: unset;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.card-img {
  width: 100px;
}

p {
  font-weight: 500;
}
</style>
