<template>
  <div>
    <div class="card d-flex flex-row" :style="data.style">
      <div>
        <p>{{ data.title }}</p>
        <h3>{{ data.currency }} {{ income }}</h3>
      </div>
      <div class="align-self-center ml-auto">
        <img :src="url + '/fileupload/assets/' + data.image" class="card-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'income'],
  data() {
    return {
      url: process.env.VUE_APP_ROOT_URL
    }
  }
}
</script>

<style scoped>
.card {
  padding: 20px;
  border-radius: 10px;
  height: 120px;
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
