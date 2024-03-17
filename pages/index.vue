<script setup>
const services = ref([
  {
    icon: "/favicon.ico",
    name: "Web Development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem optio assumenda distinctio a. Nam quis saepe sint delectus quas,earum ab. Sed debitis unde doloribus rerum aspernatur voluptates nostrum",
  },
  {
    icon: "/favicon.ico",
    name: "Mobile Development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem optio assumenda distinctio a. Nam quis saepe sint delectus quas,earum ab. Sed debitis unde doloribus rerum aspernatur voluptates nostrum",
  },
  {
    icon: "/favicon.ico",
    name: "SEO Optimazation",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem optio assumenda distinctio a. Nam quis saepe sint delectus quas,earum ab. Sed debitis unde doloribus rerum aspernatur voluptates nostrum",
  },
]);

const projects = ref([
  {
    image: "/food.png",
    title: "Food Recipe",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem optio assumenda distinctio a. Nam quis saepe sint delectus quas,earum ab. Sed debitis unde doloribus rerum aspernatur voluptates nostrum",
    size: 4000,
    date: "03/06/2022",
    link: "#",
  },
  {
    image: "/hibirlink.jpeg",
    title: "Hibirlink",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem optio assumenda distinctio a. Nam quis saepe sint delectus quas,earum ab. Sed debitis unde doloribus rerum aspernatur voluptates nostrum",
    size: 4000,
    date: "03/06/2022",
    link: "#",
  },
]);

const skills = ref([
  {
    name: "Vuejs",
    level: 70,
  },
  {
    name: "Golang",
    level: 60,
  },
  {
    name: "Expressjs",
    level: 40,
  },
  {
    name: "Nuxtjs",
    level: 100,
  },
]);
</script>

<template>
  <main class="w-full flex flex-col">
    <section
      class="w-full gap-10 min-h-[30rem] pt-[12rem] md:justify-between md:items-start items-center flex md:flex-row flex-col-reverse relative"
      id="home">
      <div
        class="flex flex-1 flex-col md:items-start items-center"
        data-aos="fade-right">
        <span class="text-2xl text-primary-1 font-bold">Hello, I am </span>
        <br />
        <h1
          class="lg:text-6xl md:text-4xl text-3xl -mt-0 font-extrabold text-primary">
          Hodadis Birhan
        </h1>
        <p class="text-primary-dark -mt-1 mb-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          autem optio assumenda distinctio a. Nam quis saepe sint delectus quas,
          earum ab. Sed debitis unde doloribus rerum aspernatur voluptates
          nostrum.
        </p>
        <div class="flex gap-3 md:items-start items-center flex-wrap">
          <a
            href="https://github.com/Hodadisbirhan"
            class="w-[2rem] group h-[2rem] rounded-[100%] border-2 border-primary/80 hover:bg-primary/80 border-solid flex cu justify-center items-center"
            target="_blank"
            ><Icon
              name="teenyicons:github-solid"
              class="text-primary/80 group-hover:text-primary-5"
              aria-hidden="true" />
            <span class="sr-only">Github</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hodadis-birhan-2a5719231"
            class="w-[2rem] group h-[2rem] rounded-[100%] border-2 border-primary/80 hover:bg-primary/80 border-solid flex cu justify-center items-center"
            target="_blank"
            ><Icon
              name="mdi:linkedin"
              class="text-primary/80 group-hover:text-primary-5"
          /></a>

          <a
            href="https://www.instagram.com/hodadisbirhan4"
            class="w-[2rem] group h-[2rem] rounded-[100%] border-2 border-primary/80 hover:bg-primary/80 border-solid flex cu justify-center items-center"
            target="_blank"
            ><Icon
              name="mdi:instagram"
              class="text-primary/80 group-hover:text-primary-5"
              aria-hidden="true" />
            <span class="sr-only">Instagram</span>
          </a>

          <a
            href="https://t.me/@Hodybi"
            class="w-[2rem] group h-[2rem] rounded-[100%] border-2 border-primary/80 hover:bg-primary/80 border-solid flex cu justify-center items-center"
            aria-hidden="true"
            target="_blank"
            ><Icon
              name="mdi:telegram"
              class="text-primary/80 group-hover:text-primary-5" />
            <span class="sr-only">Telegram</span>
          </a>

          <a
            href="tel:+251995183367"
            class="w-[2rem] group h-[2rem] rounded-[100%] border-2 border-primary/80 hover:bg-primary/80 border-solid flex cu justify-center items-center"
            target="_blank"
            ><Icon
              name="teenyicons:phone-solid"
              class="text-primary/80 group-hover:text-primary-5"
              aria-hidden="true" />

            <span class="sr-only">Phone</span>
          </a>
        </div>

        <button
          class="font-semibold outline-none mt-4 px-12 py-4 hover:bg-primary-5 hover:text-primary/80 border-primary/80 border-2 border-solid rounded-md shadow-none bg-primary/80 cursor-pointer text-lg text-primary-5">
          Download CV
        </button>
      </div>
      <div
        class="flex-1 justify-end flex relative"
        data-aos="fade-left">
        <div
          class="md:w-[20rem] w-[10rem] border-2 border-solid border-primary-5 rounded-[100%] md:h-[20rem] h-[10rem] z-30">
          <img
            src="/hod.png"
            alt="Photo"
            class="object-contain rounded-[100%] md:w-[20rem] md:h-[20rem] h-[10rem] w-[10rem] object-center" />
        </div>
        <!-- <div
          class="absolute left-0 z-0 rounded-[100%] top-3 w-[30rem] h-[30rem] border border-solid border-primary-2 opacity-50">
          <div
            class="flex items-center justfy-center flex-col gap-3 rotate-0 absolute">
            <Icon
              name="mdi:link-variant"
              class="group-hover:text-primary-5 text-primary"></Icon>

            <span>Web Development</span>
          </div>

          <div class="flex items-center justfy-center flex-col gap-3 rotate-90">
            <Icon
              name="mdi:link-variant"
              class="group-hover:text-primary-5 text-primary"></Icon>

            <span>Frontend Development</span>
          </div>
          <div class="flex items-center justfy-center flex-col gap-3 rotate-45">
            <Icon
              name="mdi:link-variant"
              class="group-hover:text-primary-5 text-primary"></Icon>

            <span>Backend Development</span>
          </div>
        </div> -->
      </div>
    </section>

    <section
      class="min-h-[40rem] pt-[8rem]"
      id="about">
      <div class="flex items-center">
        <div
          class="flex-1"
          data-aos="fade-right">
          <div
            class="md:w-[20rem] hidden md:block flex-1 items-center w-[10rem] border-2 border-solid border-primary-2 rounded-[100%] md:h-[20rem] h-[10rem]">
            <img
              src="/hod.png"
              alt="Photo"
              class="object-contain rounded-[100%] md:w-[20rem] md:h-[20rem] h-[10rem] w-[10rem] object-center" />
          </div>
        </div>
        <div
          class="flex flex-col items-center md:items-start md:flex-1"
          data-aos="fade-left">
          <h1
            class="font-extrabold md:text-4xl text-3xl lg:text-5xl text-primary">
            About Me
          </h1>
          <h2
            class="lg:text-3xl md:text-2xl text-xl font-bold text-primary-lite -mt-1">
            Full Stack Developer!
          </h2>
          <p class="text-lg text-primary-dark/80 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            deserunt ipsum natus tempora fugit. Provident inventore blanditiis
            temporibus fugiat totam, asperiores, est tenetur eveniet veniam rem
            officia id, voluptatibus amet? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Distinctio adipisci, eaque fugiat
            suscipit consequatur sapiente impedit repudiandae voluptas
            architecto explicabo tempore, minima, qui perferendis expedita
            dolorem sit molestiae quo quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem totam alias sit
            voluptatibus reprehenderit laborum eligendi tempore vel, molestias
            aliquam explicabo itaque nam debitis nesciunt quidem ex, maiores
            nostrum ipsam.
          </p>
        </div>
      </div>
    </section>

    <section
      id="skill"
      class="w-full min-h-[30rem] justify-center">
      <h1
        class="text-primary text-center lg:text-5xl md:text-4xl text-3xl font-extrabold">
        Skills
      </h1>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-16">
        <div
          class="flex flex-col gap-2"
          data-aos="fade-up"
          data-aos-duration="3000"
          v-for="skill in skills"
          :key="skill.name">
          <div class="flex justify-between text-primary-dark">
            <span>{{ skill.name }}</span>
            <span>{{ skill.level }}% </span>
          </div>
          <div class="relative w-full h-[1rem]">
            <div
              class="absolute rounded-full z-10 bg-primary top-0 left-0 h-full"
              :style="{ width: skill.level + '%' }"></div>
            <div
              class="absolute bg-primary-4 rounded-full top-0 w-full h-full left-0"></div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="service"
      class="flex flex-col items-center min-h-[40rem] pt-[8rem]">
      <h1 class="text-primary lg:text-5xl md:text-4xl text-3xl font-extrabold">
        Service
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 justify-center items-center gap-6">
        <div
          class="px-3 md:w-[25rem] border border-solid border-primary-5 group hover:bg-primary-2 hover:border-primary-2 transition-all duration-300 py-2 rounded-md bg-primary-4"
          v-for="service in services"
          :key="service.name"
          data-aos="fade-up"
          data-aos-duration="3000">
          <div
            class="w-[4rem] h-[4rem] rounded-[100%] border border-solid bg-primary-5 border-primary-2 group-hover:border-primary-5 flex items-center justify-center">
            <img
              class="object-center object-contain"
              :src="service.icon"
              :alt="service.name" />
          </div>

          <h2
            class="md:text-2xl text-xl group-hover:text-primary-5 font-bold text-primary">
            {{ service.name }}
          </h2>

          <p
            class="font-medium text-primary-dark/80 group-hover:text-primary-5 text-lg">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      id="education"
      class="flex md:flex-row justify-center items-center flex-col w-full md:gap-24 gap-40 min-h-[30rem] pt-[8rem]">
      <div class="flex md:gap-[2rem]">
        <div class="w-1 hidden md:block rounded-3xl bg-primary/80"></div>

        <div class="flex relative flex-col gap-4">
          <h2
            class="lg:text-5xl md:text-4xl text-3xl font-extrabold text-primary absolute -top-28 left-0">
            Education
          </h2>
          <div
            class="relative group hover:bg-primary-2 flex flex-col px-3 py-4 border border-solid border-primary-5 hover:border-primary-2 bg-primary-4 transition-all duration-300 rounded-md"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            v-for="i in 4"
            :key="i">
            <div class="flex items-center gap-2">
              <Icon
                name="material-symbols:calendar-month"
                class="text-primary group-hover:text-primary-5"></Icon>
              <span
                class="text-sm font-medium text-primary-lite group-hover:text-primary-5"
                >2019-2023</span
              >
            </div>

            <h3
              class="text-xl p-0 m-0 font-bold text-primary/50 group-hover:text-primary-5">
              Bachlor Degree-BahirDar University
            </h3>
            <p
              class="text-primary-lite font-medium text-lg group-hover:text-primary-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              odio. Itaque, cupiditate, incidunt vel magni eligendi fugiat,
              repellendus quis quos saepe ut quisquam sapiente. Facere magnam
              culpa ab non temporibus.
            </p>
            <span
              class="absolute -top-1 md:block hidden -left-[2.7rem] w-[1rem] h-[1rem] rounded-[100%] border-primary-2 border border-solid bg-primary-4 group-hover:bg-primary-2"></span>
          </div>
        </div>
      </div>
      <div class="flex gap-[2rem]">
        <div class="w-1 rounded-3xl md:block hidden bg-primary"></div>

        <div class="relative flex flex-col gap-4">
          <h2
            class="lg:text-5xl md:text-4xl text-3xl font-extrabold text-primary absolute -top-28 left-0">
            Experiance
          </h2>
          <div
            class="relative group hover:bg-primary-2 flex flex-col px-3 py-4 border border-solid border-primary-5 hover:border-primary-2 rounded-md transition-all duration-300 bg-primary-4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            v-for="i in 4"
            :key="i">
            <div class="flex items-center gap-2">
              <Icon
                name="material-symbols:calendar-month"
                class="text-primary group-hover:text-primary-5"></Icon>
              <span
                class="text-sm font-medium text-primary-lite group-hover:text-primary-5"
                >2019-2023</span
              >
            </div>

            <h3
              class="text-xl p-0 m-0 font-bold text-primary/50 group-hover:text-primary-5">
              Bachlor Degree-BahirDar University
            </h3>
            <p
              class="text-primary-lite font-medium text-lg group-hover:text-primary-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              odio. Itaque, cupiditate, incidunt vel magni eligendi fugiat,
              repellendus quis quos saepe ut quisquam sapiente. Facere magnam
              culpa ab non temporibus.
            </p>
            <span
              class="absolute -top-1 md:block hidden -left-[2.7rem] w-[1rem] h-[1rem] rounded-[100%] border-primary-2 border border-solid bg-primary-4 group-hover:bg-primary-2"></span>
          </div>
        </div>
      </div>
    </section>

    <section
      id="project"
      class="flex flex-col items-center pt-[8rem] min-h-[40rem] justify-center">
      <h1 class="text-primary lg:text-5xl md:text-4xl text-3xl font-extrabold">
        Project
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-6">
        <div
          class="px-3 md:w-[30rem] w-[90%] border border-solid border-primary-5 group hover:bg-primary-2 py-2 rounded-md transition-all duration-300 bg-primary-4"
          v-for="project in projects"
          :key="project.title">
          <div
            class="w-full h-[16rem] border-primary-2 group-hover:border-primary-5 flex items-center justify-center">
            <img
              class="object-center rounded-md object-cover w-full h-full"
              :src="project.image"
              :alt="project.title" />
          </div>

          <h2
            class="md:text-2xl text-xl group-hover:text-primary-5 font-bold text-primary">
            {{ project.title }}
          </h2>

          <p
            class="font-medium text-primary-lite group-hover:text-primary-5 text-lg">
            {{ project.description }}
          </p>
          <div class="flex justify-between">
            <div class="flex items-center justify-center gap-1">
              <Icon
                name="material-symbols:calendar-month"
                class="group-hover:text-primary-5 text-primary"></Icon>
              <span
                class="text-sm text-primary-lite group-hover:text-primary-5 font-medium"
                >{{ project.date }}</span
              >
            </div>
            <div class="flex items-center justify-center gap-1">
              <Icon
                name="mdi:code-tags"
                class="group-hover:text-primary-5 text-primary"></Icon>
              <span
                class="text-sm text-primary-lite group-hover:text-primary-5 font-medium"
                >{{ project.size }}</span
              >
            </div>
            <a
              :href="project.link"
              class="flex items-center no-underline justify-center gap-1">
              <Icon
                name="mdi:link-variant"
                class="group-hover:text-primary-5 text-primary"></Icon>
              <span
                class="text-sm text-primary-lite group-hover:text-primary-5 font-medium"
                >View</span
              >
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
}

.container {
  position: absolute;
  top: 0%;
  left: 0;
  right: -4rem;
  background: #003399;
  height: 50vh;
}

.wave {
  position: absolute;
  height: 250px;
  width: 100%;
  background: #003399;
  bottom: 0;
}

.wave::before,
.wave::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 50% 100%;
}

.wave::before {
  width: 55%;
  height: 100%;
  background-color: #2c3e50;
  right: -1.5%;
  top: 40%;
}
.wave::after {
  width: 55%;
  height: 109%;
  background-color: #fff;
  left: -1.5%;
  top: 60%;
}
</style>
