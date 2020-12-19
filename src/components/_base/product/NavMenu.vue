<template>
    <div>
        <ul class="navbar-nav flex-row d-flex justify-content-between ml-4">
            <li class="nav-item active">
            <a class="nav-link" @click="selectCategory('favorite')">Favorite Product</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" @click="selectCategory('coffee')">Coffee</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" @click="selectCategory('non-coffee')">Non Coffee</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="selectCategory('foods')">Foods</a>
            </li>  
            <li class="nav-item">
            <a class="nav-link" @click="selectCategory('add-on')">Add-on</a>
            </li>  
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    }
  },
    methods: {
        selectCategory(category) {
            this.$emit('setToPageOne', 1)
            this.$emit('selectCategory', category)
        }
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

.navbar-nav li.active a{
  color: #6a4029;
  font-weight: 700;
  border-bottom: 3px solid #6a4029;
}
</style>