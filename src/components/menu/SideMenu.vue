<template>
  <div>
  <h6>sideMenu</h6>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <Logo />
        <a-menu mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item
              key="1"
              @click="$router.push({name: 'Dashboard'})"
          >
            <dashboard-outlined />
            <span>대시보드</span>
          </a-menu-item>
          <a-menu-item
              key="2"
              @click="$router.push({name: 'Workspaces'})"
          >
            <laptop-outlined />
            <span>워크스페이스</span>
          </a-menu-item>
          <a-menu-item key="3">
            <cloud-outlined />
            <span>가상머신</span>
          </a-menu-item>
          <a-menu-item key="4">
            <team-outlined />
            <span>사용자</span>
          </a-menu-item>
          <a-menu-item key="5">
            <idcard-outlined />
            <span>정책</span>
          </a-menu-item>
          <a-menu-item key="6">
            <bar-chart-outlined />
            <span>감사</span>
          </a-menu-item>
          <a-menu-item key="7">
            <coffee-outlined />
            <span>커뮤니티</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
    </a-layout>
  </div>
</template>
<script lang="ts">
import {
  DashboardOutlined,
  CloudOutlined,
  TeamOutlined,
  LaptopOutlined,
  IdcardOutlined,
  BarChartOutlined,
  CoffeeOutlined,
} from '@ant-design/icons-vue';
import Logo from '../header/Logo';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    DashboardOutlined,
    CloudOutlined,
    TeamOutlined,
    LaptopOutlined,
    IdcardOutlined,
    BarChartOutlined,
    CoffeeOutlined,
    Logo,
  },
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  /*color: #1890ff;*/
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  /*background: rgba(255, 255, 255, 0.0);*/
  margin: 16px;
}

.site-layout .site-layout-background {
  /*background: #fff;*/
}

.ant-layout-sider {
  position: relative;
  min-width: 0;
  background: #fff;
}
</style>
