<template>
  <div class="xzj-panel">
    <header class="xzj-head">
      <span class="xzj-title">小玄界</span>
      <span class="xzj-stage" :style="{ color: stageColor, borderColor: stageColor }">{{ store.data.宗门.阶段 }}</span>
    </header>

    <WorldBar />
    <SectStats />
    <ResourceBar />
    <FacilityGrid />
    <DiscipleList />
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import WorldBar from './components/WorldBar.vue';
import SectStats from './components/SectStats.vue';
import ResourceBar from './components/ResourceBar.vue';
import FacilityGrid from './components/FacilityGrid.vue';
import DiscipleList from './components/DiscipleList.vue';
import TaskList from './components/TaskList.vue';
import { useDataStore } from './store';

const store = useDataStore();

const stageColor = computed(() => {
  switch (store.data.宗门.阶段) {
    case '开山期':
      return 'var(--c-stage-start)';
    case '发展期':
      return 'var(--c-stage-mid)';
    case '鼎盛期':
      return 'var(--c-stage-late)';
    default:
      return 'var(--c-text-muted)';
  }
});
</script>

<style lang="scss" scoped>
.xzj-panel {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  background-color: var(--c-surface);
  color: var(--c-text);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 12px 16px;
  font-family: var(--font-xian);
  font-size: 13px;
  line-height: 1.8;
}

.xzj-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  border-bottom: 1px solid var(--c-border-soft);
  padding-bottom: 8px;
  margin-bottom: 8px;
}

.xzj-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--c-accent);
  letter-spacing: 4px;
}

.xzj-stage {
  font-size: 12px;
  border: 1px solid var(--c-border);
  border-radius: 10px;
  padding: 1px 12px;
  line-height: 1.6;
}
</style>
