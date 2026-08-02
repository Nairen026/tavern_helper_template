<template>
  <div class="section">
    <span class="section-title">建筑</span>
    <div class="grid">
      <div class="facility" v-for="fac in facilities" :key="fac.name" :class="{ built: fac.level > 0 }">
        <span class="fac-name">{{ fac.name }}</span>
        <span class="fac-level">{{ fac.level > 0 ? fac.level + '级' : '未建' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const FACILITY_ORDER = ['主殿', '丹房', '演武场', '藏经阁', '药田', '后山'] as const;

const facilities = computed(() =>
  FACILITY_ORDER.map((name) => ({ name, level: store.data.宗门.设施[name] ?? 0 })),
);
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

.grid {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
}

.facility {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  font-size: 12px;
  color: var(--c-text-muted);
  border: 1px solid var(--c-border-soft);
  border-radius: 4px;
  padding: 1px 9px;
  opacity: 0.55;
}

.facility.built {
  color: var(--c-text);
  border-color: var(--c-border);
  opacity: 1;
}

.facility.built .fac-level {
  color: var(--c-accent-strong);
  font-weight: 600;
}
</style>
