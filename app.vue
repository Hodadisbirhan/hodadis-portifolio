<template>
  <div class="w-full font-display">
    <NuxtLayout> <NuxtPage /></NuxtLayout>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Hodadis Birhan Official Portfolio",
  ogTitle: "Hodadis Birhan Official Portfolio",
  description:
    "Personal Portifolio, Hodadis Birhan,FullStack Developer,Frontend Developer,Backend Developer,Software Engineering, Amazing portfolio,Best portfolio,Best Personal Website, Hodadis Birhan.",
  ogDescription:
    "Personal Portifolio, Hodadis Birhan,FullStack Developer,Frontend Developer,Backend Developer,Software Engineering, Amazing portfolio,Best portfolio,Best Personal Website, Hodadis Birhan.",
  ogImage: "/hod.png",
  charset: "utf-8",
  ogImageUrl: "/hod.png",
});

useHead({ link: [{ rel: "icon", href: "/hod.png" }] });
</script>
