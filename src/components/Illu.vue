<script setup>
// Blue line illustrations. Colour comes from `currentColor`, size from class.
defineProps({ name: { type: String, required: true } })
</script>

<template>
  <svg
    v-if="name === 'waves'"
    viewBox="0 0 120 60"
    fill="none"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    aria-hidden="true"
  >
    <path d="M4 18c14-12 26-12 38 0s24 12 38 0 24-12 36 0" />
    <path d="M4 32c14-12 26-12 38 0s24 12 38 0 24-12 36 0" opacity=".6" />
    <path d="M4 46c14-12 26-12 38 0s24 12 38 0 24-12 36 0" opacity=".3" />
  </svg>

  <svg v-else-if="name === 'rings'" viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden="true">
    <circle cx="50" cy="50" r="46" stroke-width="1.5" stroke-dasharray="3 7" stroke-linecap="round" />
    <circle cx="50" cy="50" r="32" stroke-width="2" opacity=".55" />
    <circle cx="50" cy="50" r="18" stroke-width="2.5" opacity=".35" />
    <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none" />
  </svg>

  <svg
    v-else-if="name === 'leaf'"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M32 60V22" />
    <path d="M32 40c-10 0-18-7-19-18 10 0 18 6 19 18Z" fill="currentColor" fill-opacity=".12" />
    <path d="M32 32c9 0 16-7 17-17-9 0-16 6-17 17Z" fill="currentColor" fill-opacity=".12" />
    <path d="M32 22c-3-5-3-12 0-18 3 6 3 13 0 18Z" fill="currentColor" fill-opacity=".2" />
  </svg>

  <svg
    v-else-if="name === 'drops'"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M24 8s12 13 12 22a12 12 0 0 1-24 0c0-9 12-22 12-22Z" fill="currentColor" fill-opacity=".14" />
    <path d="M46 28s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13Z" />
    <path d="M40 48s4 5 4 8a4 4 0 0 1-8 0c0-3 4-8 4-8Z" opacity=".6" />
  </svg>

  <svg
    v-else-if="name === 'hands'"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M6 44l8-4c4-2 8-2 12 0l10 4c2 1 2 4 0 5l-9 1" />
    <path d="M14 56l14 2c3 0 6-1 9-2l18-9c2-1 2-4 0-5-2-1-4-1-6 0l-12 5" />
    <path d="M32 30c-6-4-12-8-12-14a6 6 0 0 1 12-2 6 6 0 0 1 12 2c0 6-6 10-12 14Z" fill="currentColor" fill-opacity=".14" />
  </svg>

  <svg v-else-if="name === 'stones'" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
    <ellipse cx="32" cy="50" rx="24" ry="8" fill="currentColor" fill-opacity=".14" />
    <ellipse cx="32" cy="35" rx="17" ry="6.5" />
    <ellipse cx="32" cy="22" rx="10" ry="5" fill="currentColor" fill-opacity=".14" />
    <path d="M26 12c0-3 3-3 3-6M34 12c0-3 3-3 3-6" stroke-linecap="round" opacity=".6" />
  </svg>

  <svg v-else-if="name === 'sparkle'" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
    <path d="M20 0c1.6 10.4 4.8 13.8 20 20-15.2 6.2-18.4 9.6-20 20-1.6-10.4-4.8-13.8-20-20C15.2 13.8 18.4 10.4 20 0Z" />
  </svg>

  <svg
    v-else-if="name === 'squiggle'"
    viewBox="0 0 200 20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    aria-hidden="true"
    preserveAspectRatio="none"
  >
    <path d="M3 13C30 5 45 5 62 11s32 6 50-1 40-6 55 1 22 4 30 0" style="--len: 220" stroke-dasharray="220" class="animate-draw" />
  </svg>

  <svg
    v-else-if="name === 'arrow'"
    viewBox="0 0 80 60"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M4 8c20-4 44 2 56 24 3 6 4 12 4 20" />
    <path d="M54 44l10 10 8-12" />
  </svg>

  <svg v-else-if="name === 'dots'" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    <template v-for="r in 5" :key="r">
      <circle v-for="c in 5" :key="c" :cx="c * 18 - 4" :cy="r * 18 - 4" r="2.6" />
    </template>
  </svg>

  <svg v-else-if="name === 'blob'" viewBox="0 0 500 500" aria-hidden="true">
    <path
      fill="currentColor"
      d="M421 305c-17 70-78 132-157 138-80 6-172-36-196-114-24-77 10-160 70-209 59-49 139-67 202-37 64 31 98 152 81 222Z"
    />
  </svg>
</template>
