<template>
  <div class="basicLayout">
    <h6>BasicLayout</h6>
    <a-layout>
      <a-layout-sider>
        <side-menu class="ant-layout-sider ant-layout-sider-dark sider light ant-fixed-sidemenu"/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="ant-layout-header ant-header-fixedHeader ant-header-side-opened light">
          <Header />
        </a-layout-header>
        <a-layout-content>
          <router-view/>
        </a-layout-content>
        <a-layout-footer><Footer /></a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import SideMenu from "../components/menu/SideMenu";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default {
  name: 'BasicLayout',
  components: {
    SideMenu,
    Header,
    Footer,
  }
}
</script>

<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
}
#components-layout-demo-basic .ant-layout-header ,
#components-layout-demo-basic .ant-layout-footer {
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-sider {
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
.ant-layout-header {
  background: #ffffff;
}
</style>
