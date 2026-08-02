export const Schema = z.object({
  世界: z.object({
    当前时间: z.string().prefault('天历元年·春·三月'),
    当前区域: z.string().prefault('主殿'),
    天气: z.string().prefault('晴'),
  }).prefault({}),
  宗门: z.object({
    阶段: z.enum(['开山期', '发展期', '鼎盛期']).prefault('开山期'),
    名望: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 1000)),
    灵石: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 100000)),
    资源库存: z.record(z.string().describe('资源名'), z.coerce.number()).prefault({}),
    设施: z.object({
      主殿: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 10)),
      丹房: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 10)),
      演武场: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 10)),
      藏经阁: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 10)),
      药田: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 10)),
      后山: z.coerce.number().prefault(0).transform(value => _.clamp(value, 0, 10)),
    }).prefault({}),
    弟子: z.record(z.string().describe('弟子名'), z.object({
      境界: z.string().prefault('练气一层'),
      状态: z.string().prefault('在山门'),
    })).prefault({}),
    待办任务: z.record(z.string().describe('任务名'), z.object({
      说明: z.string().prefault(''),
      目标: z.string().prefault(''),
      奖励: z.string().prefault(''),
    })).prefault({}),
  }).prefault({}),
});

export type Schema = z.output<typeof Schema>;
