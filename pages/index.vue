<script setup>
import { useForm } from "vee-validate";
//import fetchMyInfoGQL from "~/graphql/query/fetchMyInfo.gql";
import { useUserID } from "~/store/userID";

import { gql } from "graphql-tag";

const store = useUserID();
const loading = ref(false);
const error = ref(false);
const show = ref(false);
const showMessage = ref("");
const variable = ref({
  id: store.$state.userID,
});

const {
  onResult,
  result,
  onError,
  loading: loadingMyInfoFetch,
} = useQuery(
  gql`
    query fetchMyInformation($id: uuid!) {
      user: users_by_pk(id: $id) {
        id
        profile_image
        first_name
        last_name
        email
        phone
        address
        about
        status

        skills {
          id
          name
          level
        }

        educations {
          id
          name
          description
          education_level
          start_date
          end_date
        }

        experiences {
          id
          name
          position
          description
          start_date
          end_date
        }
        services {
          id
          image
          title
          description
          satisfied_cleint
          year
        }

        projects {
          id
          image
          title
          description
          date
          size
          link
        }
      }
    }
  `,
  variable
);

const myInfo = computed(() => {
  return result?.value?.user;
});

onError((error) => {
  showMessage.value = error.message;
  show.value = true;
});

const { handleSubmit, resetForm } = useForm();

const submit = handleSubmit(async (value) => {
  console.log(value);
  const { email, phone, name, message } = value;
  loading.value = true;
  $fetch("/api/sendEmail", {
    method: "post",
    body: { from: email, phone, name, text: message },
  })
    .then((result) => {
      show.value = true;
      error.value = false;
      showMessage.value = "Thank You " + name + " For Your Feedback!";
      loading.value = false;
      resetForm();
    })
    .catch((erro) => {
      show.value = true;
      error.value = true;
      loading.value = false;
      showMessage.value = "Error Please Check Your Connection and Try Again!";
    });
});

watch(show, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      show.value = false;
    }, 8000);
  }
});

const toK = (value) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(2) + "k";
  }
  return value;
};

const getYearMonth = (value) => {
  // Assuming you have the date as a string
  if (!value) {
    return "Present";
  }
  const dateString = value;

  // Convert string to Date object
  const dateObject = new Date(dateString);

  // Get month and year as text
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthText = monthNames[dateObject.getMonth()]; // Month in text format
  const year = dateObject.getFullYear(); // Year

  // Concatenate month and year
  const result = `${monthText} ${year}`;

  return result; // Output: March 2024
};
</script>

<template>
  <main class="w-full flex flex-col">
    <div
      v-if="show"
      data-aos="fade-left"
      class="fixed z-50 top-4 shadow-xl drop-shadow-xl right-1 border-solid border bg-primary-5 rounded px-12 py-4 text-sm"
      :class="[
        error
          ? 'text-red-600  border-red-600'
          : 'border-primary-2 text-primary-2',
      ]">
      {{ showMessage }}
    </div>
    <div
      v-if="loadingMyInfoFetch && !myInfo"
      class="w-full bg-primary-4 flex h-screen justify-center items-center">
      <Icon
        name="eos-icons:loading"
        class="text-7xl text-primary"></Icon>
    </div>
    <section
      class="w-full gap-10 min-h-[40rem] pt-[12rem] md:justify-between md:items-start items-center flex md:flex-row flex-col-reverse relative"
      id="home">
      <div
        class="flex flex-1 flex-col md:items-start items-center"
        data-aos="fade-right">
        <span class="text-2xl text-primary-1 font-bold">Hello, I am </span>
        <br />
        <h1
          class="lg:text-6xl md:text-4xl text-3xl -m-0 font-bold text-primary">
          {{ myInfo.first_name }} {{ myInfo.last_name }}
        </h1>
        <span class="text-2xl pt-4 font-semibold text-primary-dark/80">{{
          myInfo?.status
        }}</span>
        <p class="text-primary-dark mt-8 text-lg font-medium">
          Bachelor's Degree in Software Engineering At Bahir Dar University Sep
          2019 – July 2023 CGPA: 3.95
        </p>
        <div class="flex gap-3 md:items-start mt-4 items-center flex-wrap">
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
            :src="myInfo?.profile_image"
            alt="Photo"
            class="object-contain rounded-[100%] md:w-[20rem] md:h-[20rem] h-[10rem] w-[10rem] object-center" />
        </div>
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
              :src="myInfo?.profile_image"
              alt="Photo"
              class="object-contain rounded-[100%] md:w-[20rem] md:h-[20rem] h-[10rem] w-[10rem] object-center" />
          </div>
        </div>
        <div
          class="flex flex-col items-center md:items-start md:flex-1"
          data-aos="fade-left">
          <h2 class="font-bold md:text-4xl text-3xl lg:text-5xl text-primary">
            About Me
          </h2>
          <h3
            class="lg:text-3xl md:text-2xl text-xl font-bold text-primary-lite -mt-1">
            Full Stack Developer!
          </h3>
          <p class="text-lg text-primary-dark/80 font-medium">
            {{ myInfo?.about }}
          </p>
        </div>
      </div>
    </section>

    <section
      id="skill"
      class="w-full min-h-[30rem] justify-center">
      <h2
        class="text-primary text-center lg:text-5xl md:text-4xl text-3xl font-bold">
        Skills
      </h2>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-16">
        <div
          class="flex flex-col gap-2"
          data-aos="fade-up"
          data-aos-duration="3000"
          v-for="skill in myInfo?.skills"
          :key="skill.id">
          <div
            class="flex justify-between text-primary-dark/80 text-sm font-medium">
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
      <h2 class="text-primary lg:text-5xl md:text-4xl text-3xl font-bold">
        Service
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:flex 2xl:flex-row 2xl:flex-wrap w-auto gap-6">
        <div
          class="px-3 md:w-[25rem] border border-solid border-primary-5 group hover:bg-primary-2 hover:border-primary-2 transition-all duration-300 py-2 rounded-md bg-primary-4 place-content-center"
          v-for="service in myInfo?.services"
          :key="service.id"
          data-aos="fade-up"
          data-aos-duration="3000">
          <div
            class="w-[4rem] h-[4rem] rounded-[100%] border border-solid bg-primary-5 border-primary-2 group-hover:border-primary-5 flex items-center justify-center overflow-hidden">
            <img
              class="object-center object-cover w-[4rem] h-[4rem]"
              :src="service.image"
              :alt="service.title" />
          </div>

          <h3
            class="md:text-2xl text-xl group-hover:text-primary-5 font-bold text-primary">
            {{ service.title }}
          </h3>

          <p
            class="font-medium text-primary-dark/50 tracking-wide group-hover:text-primary-5 text-xs md:text-sm xl:text-base">
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

        <div class="flex relative flex-col gap-8">
          <h2
            class="lg:text-5xl md:text-4xl text-3xl font-bold text-primary absolute -top-28 left-0">
            Education
          </h2>
          <div
            class="relative group hover:bg-primary-2 flex flex-col px-3 py-4 border border-solid border-primary-5 hover:border-primary-2 bg-primary-4 transition-all duration-300 rounded-md"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            v-for="education in myInfo?.educations"
            :key="education.id">
            <div class="flex items-center gap-2">
              <Icon
                name="material-symbols:calendar-month"
                class="text-primary group-hover:text-primary-5"></Icon>
              <span
                class="text-xs font-medium text-primary-dark/50 group-hover:text-primary-5"
                >{{ getYearMonth(education.start_date) }}-
                {{ getYearMonth(education.end_date) }}</span
              >
            </div>

            <h3
              class="text-xl p-0 m-0 font-semibold text-primary/50 group-hover:text-primary-5">
              {{ education.name }} - {{ education.education_level }}
            </h3>
            <p
              class="text-primary-dark/50 font-medium md:text-sm xl:text-base tracking-wide text-xs group-hover:text-primary-5">
              {{ education.description }}
            </p>
            <span
              class="absolute -top-1 md:block hidden -left-[2.7rem] w-[1rem] h-[1rem] rounded-[100%] border-primary-2 border border-solid bg-primary-4 group-hover:bg-primary-2"></span>
          </div>
        </div>
      </div>
      <div class="flex gap-[2rem] flex-1">
        <div class="w-2 rounded-3xl md:block hidden bg-primary/20"></div>

        <div class="relative flex flex-col gap-8">
          <h2
            class="lg:text-5xl md:text-4xl text-3xl font-bold text-primary absolute -top-28 left-0">
            Experiance
          </h2>
          <div
            class="relative group hover:bg-primary-2 flex flex-col px-3 py-4 border border-solid border-primary-5 hover:border-primary-2 rounded-md transition-all duration-300 bg-primary-4"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-out"
            v-for="experience in myInfo?.experiences"
            :key="experience.id">
            <div class="flex items-center gap-2">
              <Icon
                name="material-symbols:calendar-month"
                class="text-primary group-hover:text-primary-5 text-primary-dark/60"></Icon>
              <span
                class="text-xs font-medium text-primary-dark/50 group-hover:text-primary-5"
                >{{ getYearMonth(experience.start_date) }}-{{
                  getYearMonth(experience.end_date)
                }}</span
              >
            </div>

            <h3
              class="text-xl p-0 m-0 font-semibold text-primary/50 group-hover:text-primary-5">
              {{ experience.position }}-{{ experience.name }}
            </h3>
            <p
              class="text-primary-dark/50 font-medium tracking-wide md:text-sm text-xs xl:text-base group-hover:text-primary-5">
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
      <h2 class="text-primary lg:text-5xl md:text-4xl text-3xl font-bold">
        Project
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 place-content-center justify-center">
        <div
          class="px-3 border border-solid border-primary-5 group hover:bg-primary-2 hover:border-primary-2 py-2 rounded-md transition-all duration-300 bg-primary-4 flex flex-col"
          v-for="project in myInfo?.projects"
          :key="project.title"
          data-aos="fade-up"
          data-aos-duration="3000">
          <div
            class="w-full h-[16rem] border-primary-2 group-hover:border-primary-5 flex items-center justify-center">
            <img
              class="object-center rounded-md object-contain w-full h-full"
              :src="project.image"
              :alt="project.id" />
          </div>

          <h2
            class="md:text-2xl text-xl group-hover:text-primary-5 font-bold text-primary">
            {{ project.title }}
          </h2>

          <p
            class="font-medium text-primary-dark/50 tracking-wide group-hover:text-primary-5 text-xs md:text-sm xl:text-base text-pretty first-letter:uppercase">
            {{ project.description }}
          </p>
          <div class="flex flex-1 items-end justify-between text-primary-2">
            <div class="flex items-center justify-center gap-1">
              <Icon
                name="material-symbols:calendar-month"
                class="group-hover:text-primary-5 text-primary text-sm"></Icon>
              <span class="text-xs group-hover:text-primary-5 font-medium">{{
                getYearMonth(project.date)
              }}</span>
            </div>
            <div class="flex items-center justify-center gap-1">
              <Icon
                name="mdi:code-tags"
                class="group-hover:text-primary-5 text-primary"></Icon>
              <span class="text-xs group-hover:text-primary-5 font-medium">{{
                toK(project.size)
              }}</span>
            </div>
            <a
              :href="project.link"
              class="flex items-center no-underline justify-center gap-1"
              target="_blank">
              <Icon
                name="mdi:link-variant"
                class="group-hover:text-primary-5 hover:underline text-primary text-sm"></Icon>
              <span
                class="text-xs group-hover:text-primary-5 hover:underline font-medium"
                >View</span
              >
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      id="contact"
      class="flex flex-col lg:flex-row gap-3 pt-[8rem]">
      <div class="flex flex-col gap-6 flex-1">
        <h2 class="text-2xl font-bold text-primary">
          Get <br />
          In Touch.
        </h2>
        <div class="flex flex-row gap-4">
          <Icon
            name="material-symbols:call-sharp"
            class="text-lg text-primary"></Icon>
          <span class="text-primary-dark/80 text-sm lg:text-base">{{
            myInfo?.phone
          }}</span>
        </div>
        <div class="flex flex-row gap-4">
          <Icon
            name="material-symbols:mail-rounded"
            class="text-lg text-primary">
          </Icon>
          <span class="text-primary-dark/80 text-sm lg:text-base">{{
            myInfo?.email
          }}</span>
        </div>
        <div class="flex flex-row gap-4">
          <Icon
            name="material-symbols:location-on-rounded"
            class="text-lg text-primary"></Icon>
          <span class="text-primary-dark/80 text-sm lg:text-base">{{
            myInfo?.address
          }}</span>
        </div>
      </div>
      <form
        class="flex-1 px-3 py-14 bg-primary-4 border border-primary-5 border-solid rounded-md"
        @submit.prevent="submit"
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-easing="ease-in-out">
        <h3 class="text-xl text-center font-semibold text-primary">
          Contact Me
        </h3>

        <div class="flex flex-col gap-4 md:px-8 px-3 py-3">
          <HField
            id="name"
            type="text"
            rule="required"
            placeholder="Full Name"
            name="name"
            label="Name" />
          <HField
            id="phone"
            rule="required"
            type="tel"
            placeholder="+251995182267"
            name="phone"
            label="Phone Number" />

          <HField
            id="email"
            rule="required|email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            label="Email" />
          <HTextArea
            id="message"
            rule="required"
            placeholder="Enter the Message..."
            name="message"
            label="Message" />
          <div class="flex justify-end">
            <button
              :disabled="loading"
              type="submit"
              class="px-10 py-4 disabled:cursor-wait disabled:hover:bg-primary-2 border-none bg-primary-2 hover:bg-primary cursor-pointer text-primary-5 rounded-md font-medium">
              Send
            </button>
          </div>
        </div>
      </form>
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
</style>
