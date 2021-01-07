<template>
  <div>
    <ul class="navbar-nav flex-row d-flex justify-content-between ml-4">
      <li class="nav-item">
        <a
          :class="category === 'favorite' ? 'nav-link active' : 'nav-link'"
          @click="
            getProductsByCategory('favorite')
            setCategory('favorite')
          "
        >
          Favorite Product
        </a>
      </li>
      <li class="nav-item">
        <a
          :class="category === 'coffee' ? 'nav-link active' : 'nav-link'"
          @click="
            getProductsByCategory('coffee')
            setCategory('coffee')
          "
        >
          Coffee
        </a>
      </li>
      <li class="nav-item">
        <a
          :class="category === 'non-coffee' ? 'nav-link active' : 'nav-link'"
          @click="
            getProductsByCategory('non-coffee')
            setCategory('non-coffee')
          "
        >
          Non Coffee
        </a>
      </li>
      <li class="nav-item">
        <a
          :class="category === 'foods' ? 'nav-link active' : 'nav-link'"
          @click="
            getProductsByCategory('foods')
            setCategory('foods')
          "
        >
          Foods
        </a>
      </li>
      <li class="nav-item">
        <a
          :class="category === 'add-on' ? 'nav-link active' : 'nav-link'"
          @click="
            getProductsByCategory('add-on')
            setCategory('add-on')
          "
        >
          Add-on
        </a>
      </li>
      <select @click="sortProduct(sortId)" v-model="sortId">
        <option value="1">A - Z </option>
        <option value="2">Z - A </option>
        <option value="3">Dari Termurah </option>
        <option value="4">Dari Termahal </option>
      </select>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showMobileMenu: false,
      category: 'favorite',
      sortId: 1
    }
  },
  mounted() {
    this.getProductsByCategory('favorite')
  },
  methods: {
    ...mapActions(['getProductsByCategory', 'sortProduct']),
    setCategory(category) {
      this.category = category
      this.$emit('setToPageOne', 1)
    }
    // selectCategory(category) {
    //   this.category = category
    //   this.$emit('setToPageOne', 1)
    //   this.$emit('selectCategory', category)
    // }
  }
}
</script>

<style scoped>
.navbar-nav .active .nav-link,
.navbar-nav .nav-link.show,
.navbar-nav .nav-link.active {
  color: #6a4029;
}

.navbar-nav .nav-link {
  color: #4f5665;
  margin-right: 2vw;
}

.navbar-nav .nav-link:hover {
  color: #6a4029;
  margin-right: 2vw;
}

.navbar-nav .nav-link {
  color: #9f9f9f;
}

.navbar-nav .nav-link:hover {
  color: #6a4029;
  border-bottom: 3px solid #6a4029;
}

.navbar-nav a.active {
  color: #6a4029;
  font-weight: 700;
  border-bottom: 3px solid #6a4029;
}

@media (max-width: 576px) {
  .flex-row {
    flex-direction: column !important;
  }
}
</style>
