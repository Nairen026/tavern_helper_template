<template>
  <div class="section" v-if="tasks.length > 0">
    <span class="section-title">待办</span>
    <div class="list">
      <div class="task" v-for="[name, info] in tasks" :key="name">
        <div class="t-head">
          <span class="t-name">{{ name }}</span>
          <span class="t-reward" v-if="info.奖励">奖励: {{ info.奖励 }}</span>
        </div>
        <div class="t-desc" v-if="info.说明">{{ info.说明 }}</div>
        <div class="t-goal" v-if="info.目标">目标: {{ info.目标 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const tasks = computed(() => Object.entries(store.data.宗门.待办任务));
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
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}

.task {
  font-size: 12px;
  border: 1px solid var(--c-border-soft);
  border-radius: 4px;
  padding: 4px 10px;
  background-color: var(--c-surface-raised);
}

.t-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.t-name {
  color: var(--c-text-strong);
  font-weight: 600;
}

.t-reward {
  color: var(--c-accent);
  white-space: nowrap;
}

.t-desc {
  color: var(--c-text);
}

.t-goal {
  color: var(--c-text-muted);
}
</style>
