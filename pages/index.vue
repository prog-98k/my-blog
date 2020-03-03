<template>
  <div>
    <well-come />
    <open-source />
    <article-log />
  </div>
</template>

<script>
import WellCome from '@/components/home/wellcome'
import OpenSource from '@/components/opensource'
import ArticleLog from '@/components/article'
export default {
  components: {
    WellCome,
    OpenSource,
    ArticleLog
  }
}
</script>
