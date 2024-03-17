<script setup>
const services = ref([
  {
    icon: "/favicon.ico",
    name: "Web Development",
    description:
      " As a seasoned web developer, I specialize in crafting bespoke digital solutions tailored to meet the unique needs of businesses and individuals. My goal is to provide high-quality, user-friendly websites that not only look stunning but also function seamlessly across all devices and platforms. With a keen eye for design and a passion for coding, I take pride in delivering exceptional results that exceed client expectations.",
  },
  {
    icon: "/favicon.ico",
    name: "Mobile Development",
    description:
      "As a skilled mobile developer, I specialize in creating innovative and high-performance mobile applications that elevate user experiences and drive business growth. With a deep understanding of mobile technologies and a passion for crafting elegant solutions, I collaborate closely with clients to bring their app ideas to life. From concept to deployment, I'm dedicated to delivering top-notch mobile experiences that captivate audiences and deliver tangible results.",
  },
  {
    icon: "/favicon.ico",
    name: "SEO Optimazation",
    description:
      " As an experienced SEO developer, I specialize in helping businesses and individuals maximize their online presence and drive organic traffic to their websites. With a data-driven approach and a deep understanding of search engine algorithms, I offer tailored SEO solutions that enhance website visibility, increase rankings, and ultimately, boost conversions. Whether you're looking to improve your website's search engine rankings, optimize your content for targeted keywords, or enhance your overall online visibility, I'm here to help you achieve your goals.",
  },
]);

const projects = ref([
  {
    image: "/food.png",
    title: "Food Recipe",
    description:
      " is a website application that used to show how to prepare food in the best way,which is developed using Vue.js,Vite,Tailwind CSS,PostgreSQL,Hasura,GraphQL, Express.js and Apollo Client",
    size: 4000,
    date: "03/06/2022",
    link: "https://food-recipe-app-hodadis.netlify.app/",
  },
  {
    image: "/hibirlink.jpeg",
    title: "Hibirlink",
    description:
      "is an online ecosystem thatseamlessly combines online product marketplace, trusted delivery services,streamlined service provider connections,which is developed using Vue.js,Vite,Nuxt.js,Tailwind CSS,PostgreSQL,Hasura,GraphQL, Express.js and Apollo Client",
    size: 4000,
    date: "03/06/2022",
    link: "https://www.hibirlink.com/",
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

const educations = ref([
  {
    name: "Primary school",
    school: "Woheny",
    date: "Sep 1998 - Jun 2006",
    description:
      "At Woheny, we believe that every child deserves a nurturing and stimulating learning environment where they can reach their full potential. With a focus on holistic education, personalized attention, and fostering a love for learning, we provide a comprehensive educational experience for students from Grade 1 to Grade 8.",
  },
  {
    name: "High and Preparatory school",
    school: "Mankusa",
    date: "Sep 2007 - Jun 2011",
    description:
      "At Mankusa High School, we are committed to preparing students for success in college, career, and beyond. With a rigorous academic program, a supportive learning environment, and a focus on personal growth and achievement, we empower students in grades 9 to 12 to discover their passions, pursue their dreams, and become confident, responsible leaders in a global society.",
  },
  {
    name: "University",
    school: "Bahir Dar",
    date: "Sep 2009 - Jun 2015",
    description:
      "At Mankusa High School, we are committed to preparing students for success in college, career, and beyond. With a rigorous academic program, a supportive learning environment, and a focus on personal growth and achievement, we empower students in grades 9 to 12 to discover their passions, pursue their dreams, and become confident, responsible leaders in a global society.",
  },
]);

const experiences = ref([
  {
    title: "Intern",
    company: "Minab IT Solution(Hahu Jobs)",
    startDate: "June 2022",
    endDate: "September 2022",
    description:
      "During my internship period at Minab IT Solutions from June 2022 to September 2022, I was immersed in an enriching environment where I honed my skills in front-end application development using Vue.js and Nuxt.js, particularly focusing on creating server-side rendered (SSR) applications. Additionally, I gained proficiency in Vite and Tailwind CSS for efficient and responsive UI development. On the backend side, I delved into backend development using a combination of Golang and Express.js. I worked extensively with databases, including Hasura, PostgreSQL, and SQL, learning how to design efficient schema and execute complex queries to optimize data retrieval and manipulation. Moreover, I had the opportunity to delve into API development using GraphQL, gaining hands-on experience in building robust and flexible APIs to facilitate smooth communication between the frontend and backend components of applications. ",
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
          class="lg:text-6xl md:text-4xl text-3xl -mt-0 font-bold text-primary">
          Hodadis Birhan
        </h1>
        <p class="text-primary-dark -mt-1 mb-7 text-lg font-medium">
          Bachelor's Degree in Software Engineering At Bahir Dar University Sep
          2019 – July 2023 CGPA: 3.95
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
          class="font-semibold outline-none mt-4 px-12 py-4 hover:bg-transparent hover:text-primary/80 border-primary/80 border-2 border-solid rounded-md shadow-none bg-primary/80 cursor-pointer text-lg text-primary-5">
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
          <h1 class="font-bold md:text-4xl text-3xl lg:text-5xl text-primary">
            About Me
          </h1>
          <h2
            class="lg:text-3xl md:text-2xl text-xl font-bold text-primary-lite -mt-1">
            Full Stack Developer!
          </h2>
          <p class="text-lg text-primary-dark/80 font-medium">
            Hello, I'm a passionate Fullstack Developer with over 2 years of
            hands-on experience in building robust and scalable web
            applications. With a blend of technical expertise, creative
            problem-solving skills, and a keen eye for design, I specialize in
            crafting innovative solutions that deliver exceptional user
            experiences. My journey into the world of software development began
            in 2020 year when I discovered my passion for coding and technology.
            Since then, I've been on a relentless quest to expand my knowledge,
            refine my skills, and stay at the forefront of industry trends and
            best practices.
          </p>
        </div>
      </div>
    </section>

    <section
      id="skill"
      class="w-full min-h-[30rem] justify-center">
      <h1
        class="text-primary text-center lg:text-5xl md:text-4xl text-3xl font-bold">
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
      <h1 class="text-primary lg:text-5xl md:text-4xl text-3xl font-bold">
        Service
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 w-auto gap-6">
        <div
          class="px-3 md:w-[25rem] border border-solid border-primary-5 group hover:bg-primary-2 hover:border-primary-2 transition-all duration-300 py-2 rounded-md bg-primary-4 place-content-center"
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
            class="font-medium text-primary-dark/80 group-hover:text-primary-5 text-xs md:text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      id="education"
      class="flex md:flex-row justify-center items-start flex-col w-full md:gap-24 gap-40 min-h-[30rem] pt-[8rem]">
      <div class="flex md:gap-[2rem] flex-1">
        <div class="w-2 hidden md:block rounded-3xl bg-primary/20"></div>

        <div class="flex relative flex-col gap-4">
          <h2
            class="lg:text-5xl md:text-4xl text-3xl font-bold text-primary absolute -top-28 left-0">
            Education
          </h2>
          <div
            class="relative group hover:bg-primary-2 flex flex-col px-3 py-4 border border-solid border-primary-5 hover:border-primary-2 bg-primary-4 transition-all duration-300 rounded-md"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            v-for="education in educations"
            :key="education.name">
            <div class="flex items-center gap-2">
              <Icon
                name="material-symbols:calendar-month"
                class="text-primary group-hover:text-primary-5"></Icon>
              <span
                class="text-sm font-medium text-primary-dark/80 group-hover:text-primary-5"
                >{{ education.date }}</span
              >
            </div>

            <h3
              class="text-xl p-0 m-0 font-semibold text-primary/50 group-hover:text-primary-5">
              {{ education.name }} - {{ education.school }}
            </h3>
            <p
              class="text-primary-dark/80 font-medium lg:text-base tracking-wide text-sm group-hover:text-primary-5">
              {{ education.description }}
            </p>
            <span
              class="absolute -top-1 md:block hidden -left-[2.7rem] w-[1rem] h-[1rem] rounded-[100%] border-primary-2 border border-solid bg-primary-4 group-hover:bg-primary-2"></span>
          </div>
        </div>
      </div>
      <div class="flex gap-[2rem] flex-1">
        <div class="w-2 rounded-3xl md:block hidden bg-primary/20"></div>

        <div class="relative flex flex-col gap-4">
          <h2
            class="lg:text-5xl md:text-4xl text-3xl font-bold text-primary absolute -top-28 left-0">
            Experiance
          </h2>
          <div
            class="relative group hover:bg-primary-2 flex flex-col px-3 py-4 border border-solid border-primary-5 hover:border-primary-2 rounded-md transition-all duration-300 bg-primary-4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            v-for="experience in experiences"
            :key="experience.title">
            <div class="flex items-center gap-2">
              <Icon
                name="material-symbols:calendar-month"
                class="text-primary group-hover:text-primary-5 text-primary-dark/60"></Icon>
              <span
                class="text-sm font-medium text-primary-dark/60 group-hover:text-primary-5"
                >{{ experience.startDate }}-{{ experience.endDate }}</span
              >
            </div>

            <h3
              class="text-xl p-0 m-0 font-semibold text-primary/50 group-hover:text-primary-5">
              {{ experience.title }}-{{ experience.company }}
            </h3>
            <p
              class="text-primary-dark/80 font-medium tracking-wide text-sm lg:text-base group-hover:text-primary-5">
              {{ experience.description }}
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
      <h1 class="text-primary lg:text-5xl md:text-4xl text-3xl font-bold">
        Project
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-6">
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
            class="font-medium text-primary-dark/80 tracking-wide group-hover:text-primary-5 text-sm lg:text-base text-pretty">
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
              class="flex items-center no-underline justify-center gap-1"
              target="_blank">
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
    <section id="contact">
      <h2>Contacts</h2>
      <div></div>
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
