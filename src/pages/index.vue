<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>
            目前事項
        </h1>
        <h1 id='currentText'>
          {{ currentText }}
        </h1>
        <h2>剩餘時間：{{ currentTime }}</h2>
      </v-col>
      <v-col cols="12">
        <div class="btns">
          <v-btn
            icon="mdi-play"
            @click="startTimer"
            :disabled="status === STATUS.COUNTING || (currentItem.length === 0 && items.length === 0)"
          ></v-btn>
          <v-btn
            icon="mdi-pause"
            :disabled="status !== STATUS.COUNTING"
            @click="pauseTimer"
          ></v-btn>
          <v-btn
            icon="mdi-skip-next"
            :disabled="currentItem.length === 0"
            @click="finishTimer"
          ></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useWebNotification } from '@vueuse/core'

definePage({
  meta: {
    title: '番茄鐘'
  }
})

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2
}
const status = ref(STATUS.STOP)

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishItem } = list

const settings = useSettingsStore()
const { selectedAlarmFile } = storeToRefs(settings)

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const pauseTimer = () => {
  status.value = STATUS.PAUSE
  clearInterval(timer)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP

  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()

  const { show, isSupported } = useWebNotification({
    title: '事項完成',
    body: currentItem.value,
    icon: new URL('@/assets/tomato.png', import.meta.url).href
  })
  if (isSupported.value) {
    show()
  }

  setFinishItem()

  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60).toString().padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>

<style scoped lang="scss">
.v-container{
  text-align: center;
}

.btns{
  margin: auto;
  width: 180px;
  // background: darkblue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.v-btn{
  background: rgba(242, 115, 115, 0.604);
  }

#currentText{
    font-size: 5vh;
}
</style>
