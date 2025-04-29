<template>
  <div style="padding: 20px;">
    <h3>Statistics</h3>
    <hr style="width: 20%; align: left; margin-bottom: 20px;">
    <div class="cardgroup">
      <div class="card">
        <div class="card-header">
          <h5>Total Hours</h5>
        </div>
        <div class="card-body">
          <i class="card-icon bi bi-clock"></i>
          <p>30 Hours</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h5>Total Flights</h5>
        </div>
        <div class="card-body">
          <i class="card-icon bi bi-airplane-engines"></i>
          <p>20 Flights</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cardgroup {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 calc(33.333% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  max-width: 300px;
}

.card-header {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
  border-radius: 8px 8px 0 0;
}

.card-body {
  padding: 20px;
  text-align: center;
}

.card-icon {
  font-size: 2em;
  color: #fa0;
}

</style>
