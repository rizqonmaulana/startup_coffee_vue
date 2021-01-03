<template>
  <div>
    <b-container>
      <b-row>
        <b-col col lg="8">
          <button class="dashboard-btn">Download Report</button>
        </b-col>
        <b-col col lg="4">
          <button class="dashboard-btn">Share Report</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.dashboard-btn {
  width: 100%;
  border: unset;
  background-color: #6a4029;
  color: #fff;
  font-weight: 700;
  padding: 15px 100px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}

.dashboard-btn:hover {
  background-color: #54301d;
}

@media (max-width: 991px) {
  .dashboard-btn {
    margin-top: 20px;
  }
}
</style>
