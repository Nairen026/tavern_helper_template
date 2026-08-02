<template>
  <div class="section">
    <span class="section-title">仓库</span>
    <div class="chips">
      <span class="chip" v-for="[name, count] in resources" :key="name">
        <span class="chip-name">{{ name }}</span>
        <span class="chip-count">{{ count }}</span>
      </span>
      <span class="empty" v-if="resources.length === 0">空空如也</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const resources = computed(() => Object.entries(store.data.宗门.资源库存));
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

.chips {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  font-size: 12px;
  color: var(--c-text);
  border: 1px solid var(--c-border);
  border-radius: 4px;
  padding: 1px 9px;
}

.chip-name {
  color: var(--c-text-muted);
}

.chip-count {
  color: var(--c-text-strong);
  font-weight: 600;
}

.empty {
  font-size: 12px;
  color: var(--c-text-muted);
}
</style>
