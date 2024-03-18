<template>
  <div
    class="max-w-[1920px] overflow-hidden bg-slate-200 pb-10 md:px-14 px-2 mx-auto">
    <section>
      <div class="skewed opacity-20 mix-blend-multiply"></div>
    </section>
    <header
      class="fixed backdrop-blur-3xl z-40 max-w-[1920px] top-0 mx-auto md:px-14 px-2 h-[6rem] drop-shadow bg-slate-200/95 left-0 right-0 flex justify-between items-center">
      <nav class="flex justify-between items-center w-full">
        <a
          href="https://hodadis.netlify.app"
          class="font-bold text-xl no-underline text-primary cursor-pointer"
          target="_self"
          >Hodadis's</a
        >
        <ul
          class="gap-3 lg:static max-h-[calc(100vh-7rem)] lg:h-auto py-3 bg-slate-200/95 lg:bg-transparent drop-shadow-md lg:drop-shadow-none shadow-md lg:shadow-none lg:backdrop-blur-none backdrop-blur-lg list-none right-0 text-primary-lite lg:w-auto top-[5rem] overflow-y-auto left-0 fixed z-40 lg:items-center lg:justify-center items-start lg:flex"
          :class="[toggleNav ? 'flex flex-col lg:flex-row' : 'hidden']">
          <li
            class="text-sm font-semibold before:content-[''] relative before:absolute before:-bottom-1 hover:before:right-0 hover:before:left-0 before:duration-700 before:h-[0.1rem] before:bg-primary hover:text-primary"
            :class="[
              activeTag === link.name
                ? 'before:right-0 before:left-0 text-primary '
                : 'before:right-[50%] before:left-[50%] text-primary-lite',
            ]"
            v-for="link in links"
            :key="link.id"
            @click="(toggleNav = false), (activeTag = link.name)">
            <a
              :class="[
                activeTag === link.name
                  ? 'active:text-primary text-primary no-underline'
                  : 'active:text-primary text-primary-lite no-underline',
              ]"
              :href="link.id"
              >{{ link.value }}</a
            >
          </li>
        </ul>
        <div class="text-primary-2 cursor-pointer lg:hidden">
          <Icon
            name="material-symbols:menu"
            @click="toggleNav = true"
            size="20"
            v-if="!toggleNav" />
        </div>
        <div
          class="lg:hidden block"
          v-if="toggleNav">
          <Icon
            name="material-symbols:close-rounded"
            class="text-primary-2 cursor-pointer"
            size="20"
            @click="toggleNav = false" />
        </div>
      </nav>
    </header>

    <slot> </slot>
    <footer class="bg-bg-gray dark:bg-bg-primary-dark mt-20">
      <div class="h-0.5 bg-primary-2"></div>
      <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center gap-4 mb-4">
          <h2 class="text-3xl font-bold text-primary/50 m-0">Hodadis</h2>
          <span class="text-primary-dark/50 font-semibold"
            >tel: +251995183367</span
          >
        </div>
        <nav
          class="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer">
          <!--[-->
          <div class="px-5 py-2">
            <a
              aria-current="page"
              href="/#about"
              class="font-medium text-gray-500 text-lg hover:text-primary-2 dark:hover:text-darkmode-white"
              >About</a
            >
          </div>
          <div class="px-5 py-2">
            <a
              aria-current="page"
              href="/#service"
              class="font-medium text-gray-500 text-lg hover:text-primary-2 dark:hover:text-darkmode-white"
              >Service</a
            >
          </div>
          <div class="px-5 py-2">
            <a
              aria-current="page"
              href="/#project"
              class="router-link-active router-link-exact-active font-medium text-gray-500 text-lg hover:text-primary-2 dark:hover:text-darkmode-white"
              >Projects</a
            >
          </div>
          <div class="px-5 py-2">
            <a
              aria-current="page"
              href="/#skill"
              class="font-medium text-gray-500 text-lg hover:text-primary-2 dark:hover:text-darkmode-white"
              >Skill</a
            >
          </div>
          <div class="px-5 py-2">
            <a
              aria-current="page"
              href="/#contact"
              class="font-medium text-gray-500 text-lg hover:text-primary-2 dark:hover:text-darkmode-white"
              >Contact</a
            >
          </div>
          <!--]-->
        </nav>
        <div class="mt-8 flex justify-center space-x-6">
          <!--[--><a
            href="https://github.com/Hodadisbirhan"
            rel="noopener noreferrer"
            target="_blank"
            class="text-gray-400 hover:text-gray-500 dark:hover:text-darkmode-white"
            ><span class="sr-only">Github</span
            ><Icon
              name="teenyicons:github-solid"
              alt="S.link"
              class="h-6 w-6 text-primary/80"
              aria-hidden="true" /></a
          ><a
            href="https://www.linkedin.com/in/hodadis-birhan-2a5719231"
            rel="noopener noreferrer"
            target="_blank"
            class="text-gray-400 hover:text-gray-500 dark:hover:text-darkmode-white"
            ><span class="sr-only">LinkedIn</span
            ><Icon
              name="mdi:linkedin"
              alt="S.link"
              class="h-6 w-6 text-primary/80"
              aria-hidden="true" /></a
          ><a
            href="https://www.instagram.com/hodadisbirhan4"
            rel="noopener noreferrer"
            target="_blank"
            class="text-gray-400 hover:text-gray-500 dark:hover:text-darkmode-white"
            ><span class="sr-only">Instagram</span
            ><Icon
              name="mdi:instagram"
              alt="S.link"
              class="h-6 w-6 text-primary/80"
              aria-hidden="true" /></a
          ><!--]-->
        </div>
        <p class="mt-8 text-center text-lg text-gray-400">
          Copyright © {{ new Date().getFullYear() }} Hodadis Birhan. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup>
const links = ref([
  { name: "home", value: "Home", id: "#home" },
  { name: "about", value: "About", id: "#about" },
  { name: "education", value: "Education", id: "#education" },
  { name: "skill", value: "Skill", id: "#skill" },
  { name: "service", value: "Service", id: "#service" },
  { name: "project", value: "Project", id: "#project" },
  { name: "contact", value: "Contact", id: "#contact" },
]);

const toggleNav = ref(false);
const route = useRoute();
const activeTag = ref(route.hash.slice(1));
console.log(activeTag.value);
</script>
<style>
header {
  backdrop-filter: blur(64px);
}
.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #003399;
  z-index: 0;
  transform: skewY(17deg);
  transform-origin: top right;
}
</style>
