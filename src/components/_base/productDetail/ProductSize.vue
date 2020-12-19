<template>
    <div>
        <div class="size-card">
            <div class="title poppins text-center pt-3">
                <h5>Choose a size</h5>
            </div>
            <div class="btn-size-collection poppins text-center">
                <button v-if="sizeR !== 0" @click="selectSize('Regular')" class="btn-size rounded-circle mt-2 active">R</button>
                <button v-if="sizeL !== 0" @click="selectSize('Large')" class="btn-size rounded-circle mt-2">L</button>
                <button v-if="sizeXL !== 0" @click="selectSize('Extra Large')" class="btn-size rounded-circle mt-2">XL</button>
                <button v-if="size250gr !== 0" @click="selectSize('250gr')" class="btn-size rounded-circle mt-2" style="font-size:16px">250gr</button>
                <button v-if="size300gr !== 0" @click="selectSize('300gr')" class="btn-size rounded-circle mt-2" style="font-size:16px">300gr</button>
                <button v-if="size500gr !== 0" @click="selectSize('500gr')" class="btn-size rounded-circle mt-2" style="font-size:16px">500gr</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'sizeR',
        'sizeL',
        'sizeXL',
        'size250gr',
        'size300gr',
        'size500gr'
    ],
    methods: {
        selectSize(size) {
            this.$emit('selectSize', size)
        }
    }
}
</script>

<style scoped>
.size-card {
    height: 160px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}

.btn-size-collection .btn-size {
  font-weight: 700;
  font-size: 30px;
  width: 60px;
  height: 60px;
  border: unset;
  margin-right: 25px;
  background-color: #dfdfdf;
}

.btn-size-collection .btn-size.active {
  background-color: #ffba33;
}

.btn-size-collection .btn-size:hover {
  background-color: #ffae0c;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}
</style>