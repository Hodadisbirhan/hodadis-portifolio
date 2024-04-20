import AOS from "aos";
import "aos/dist/aos.css";
export default defineNuxtPlugin((nuxtApp) => {
  // You can also use <link> for styles
  // ..
  onNuxtReady(() => {
  AOS.init();
  })

});
