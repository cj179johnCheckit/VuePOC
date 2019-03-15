import Vue from 'vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { default as router } from './router';
import Utils from './utils';

Vue.use(BootstrapVue);
Vue.use(VueResource);

const utils = new Utils();

Vue.http.interceptors.push((request, next) => {
  console.log(request.method);

  // request.headers.set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI5Z3pTdHY1eUlpdDV5M2k2Y1dySHlOYmNIUjZxV1p3TWxYZFZlYmJXcTY4In0.eyJqdGkiOiI1NTdiMTMyZS1jOTc5LTQwYzktOWY1ZS1lZGI1MWU1Y2RkMGYiLCJleHAiOjE1NTI3NTE4NzYsIm5iZiI6MCwiaWF0IjoxNTUyNjY1NDc2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvY2hlY2tpdCIsImF1ZCI6ImNoZWNraXQtb2ZmaWNlIiwic3ViIjoiYjNlY2ZkYTAtMTczZi00YWJkLTgxOTMtNDEyYjBmMzVkYzU1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2hlY2tpdC1vZmZpY2UiLCJhdXRoX3RpbWUiOjE1NTI2NjU0NzYsInNlc3Npb25fc3RhdGUiOiIyN2NmMzUzNi1kMmIyLTRiZjktYjQ4Ni1hZDMwOTQ3MmFjOTYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicmVhbG0tYWRtaW4iLCJjaGVja2l0LWFkbWluaXN0cmF0b3IiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50Iiwidmlldy1wcm9maWxlIl19fSwicHJlZmVycmVkX3VzZXJuYW1lIjoiY3MifQ.MUXcyUToIwRtADCnMf4HkJ0SfzENdmX40yF9wQVe6wZZly7PPCaWzoa00PHI51F-6wZReJZkyi1OQ0tfJwH57cbYzprlLM8f3n7inIUWsZ7IjBk5pQPGbjGtqVvNtuY989SsV6X3DytLVzdBEhrwovgRhtgJY0A9z_n4l55IAEX_iRNHrSKVOoEiAU31pu7fyaFWTzpHVAFnpqY_-RYi51NjnH-uJasAAVCJzYGsExDeBFsczgCfpeQfxGFaqXptnM0tv8tjwbzODarNG0TEO2v231jmk5HKSptSnr4JuKtMrYoghQQptjxZzRPQwgtp3c2lJo_VhaIvW5tvolH7ZA');

  return response => {
    console.log(response);
    if (response.status !== 401) {
      next();
    }
    window.location.href = utils.getLoginUrl({
      protocol: document.location.protocol,
      host: document.location.host,
      port: document.location.port
    });
  }
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
