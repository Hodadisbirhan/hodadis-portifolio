export default defineNuxtPlugin((nuxtApp) => {
  const { accessToken } = useRuntimeConfig();
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    // `client` can be used to differentiate logic on a per-client basis.

    // apply apollo client token
    token.value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsImFub21hbHkiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciJ9LCJpYXQiOjE2NjAyMjI1MTN9.-5h3u0Gdt4mIGZhXYwzmWwdkzyqcko-OFm99JdKDs7Y";
  });
});
