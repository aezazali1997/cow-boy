/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.png" {
  export default "" as string;
}
declare module "*.svg" {
  export default "" as string;
}
