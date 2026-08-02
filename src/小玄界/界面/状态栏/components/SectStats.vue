<template>
  <div class="sect-stats">
    <div class="stat-block fame">
      <div class="stat-head">
        <span class="label">名望</span>
        <span class="value">{{ store.data.宗门.名望 }}</span>
      </div>
      <div class="bar">
        <div class="bar-fill" :style="{ width: famePercent + '%' }"></div>
      </div>
      <div class="bar-hint" v-if="nextStage">{{ nextStage.hint }}</div>
    </div>

    <div class="stat-block plain">
      <span class="label">灵石</span>
      <span class="value">{{ store.data.宗门.灵石 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const nextStage = computed(() => {
  const fame = store.data.宗门.名望;
  if (fame < 200) {
    return { hint: `距发展期还需 ${200 - fame}` };
  }
  if (fame < 600) {
    return { hint: `距鼎盛期还需 ${600 - fame}` };
  }
  return null;
});

const famePercent = computed(() => {
  const fame = store.data.宗门.名望;
  if (fame < 200) return Math.min(100, (fame / 200) * 100);
  if (fame < 600) return Math.min(100, 100 + ((fame - 200) / 400) * 100);
  return 100;
});
</script>

<style lang="scss" scoped>
.sect-stats {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 8px;
}

.stat-block .label {
  color: var(--c-text-muted);
  margin-right: 6px;
}

.stat-block .value {
  color: var(--c-text-strong);
  font-weight: 700;
}

.fame {
  flex: 1;
  min-width: 220px;
}

.fame .stat-head {
  display: flex;
  justify-content: space-between;
}

.bar {
  height: 6px;
  background-color: var(--c-surface-raised);
  border: 1px solid var(--c-border-soft);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 3px;
}

.bar-fill {
  height: 100%;
  background-color: var(--c-accent);
  border-radius: 3px;
  transition: width 0.5s ease;
}

.bar-hint {
  font-size: 12px;
  color: var(--c-text-muted);
  margin-top: 2px;
}
</style>
