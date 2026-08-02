<template>
  <div class="world-bar">
    <span class="item"><span class="label">时令</span><span class="value">{{ store.data.世界.当前时间 }}</span></span>
    <span class="item"><span class="label">所在</span><span class="value">{{ store.data.世界.当前区域 }}</span></span>
    <span class="item"><span class="label">天象</span><span class="value">{{ store.data.世界.天气 }}</span></span>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.world-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
}

.item .label {
  color: var(--c-text-muted);
  margin-right: 6px;
}

.item .value {
  color: var(--c-text-strong);
  font-weight: 600;
}
</style>
