<template>
  <li>
    <div
      class="catalog-item-title"
      :class="[item.id == curid ? 'active' : '']"
      :style="{ paddingLeft: item.level * 15 + 'px' }"
      @click="fn(item.id, item)"
    >
      <span class="dot"></span>
      <span class="text">
        <a :href="`#articleHeader${item.id}`">
          {{ item.title }}
        </a>
        <!-- {{ item.title }} -->
      </span>
    </div>
    <ul v-if="item.subs.length > 0">
      <CataLogItem
        v-for="(val, key) in item.subs"
        :key="key"
        :item="val"
        :fn="fn"
        :curid="curid"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'CataLogItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    fn: {
      type: Function,
      default: null
    },
    curid: {
      type: Number,
      default: 0
    }
  }
}
</script>
