<template>
  <div class="section" v-if="disciples.length > 0">
    <span class="section-title">弟子</span>
    <div class="list">
      <div class="disciple" v-for="[name, info] in disciples" :key="name">
        <span class="d-name">{{ name }}</span>
        <span class="d-realm">{{ info.境界 }}</span>
        <span class="d-state">{{ info.状态 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const disciples = computed(() => Object.entries(store.data.宗门.弟子));
</script>

<style lang="scss" scoped>
.section {
  margin-top: 8px;
}

.section-title {
  color: var(--c-text-muted);
  font-size: 12px;
  letter-spacing: 2px;
  margin-right: 10px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.disciple {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  font-size: 12px;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 2px 10px;
}

.d-name {
  color: var(--c-text-strong);
  font-weight: 600;
}

.d-realm {
  color: var(--c-accent);
}

.d-state {
  color: var(--c-text-muted);
}
</style>
