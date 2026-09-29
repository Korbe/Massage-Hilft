import { ref } from 'vue'

// Shared between hero hotspots and the body map section.
const activeArea = ref('kopf-nacken')

export function useBodyMap() {
  function focusArea(id) {
    activeArea.value = id
    document.getElementById(`bereich-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return { activeArea, focusArea }
}
