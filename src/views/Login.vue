<template>
  <h6>Login</h6>
  <div>
    <img src="../assets/img.png">
    <div class="user-layout-login">
      <a-input
          placeholder="사용자"
          v-model:value="userName"
      >
        <template #prefix>
          <user-outlined/>
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>

      <a-input-password
          placeholder="비밀번호"
          v-model:value="password"
      >
        <template #prefix>
          <lock-outlined/>
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input-password>

      <a-button
          type="primary"
          size="large"
          html-type="submit"
          class="login-button"
          oncl
          @click="$router.push({name: 'home'})"
      >
        로그인
      </a-button>
    </div>
  </div>
</template>

<script>
import { UserOutlined, InfoCircleOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    InfoCircleOutlined,
    LockOutlined,
  },

  setup() {
    const userName = ref('');
    const password = ref('');
    return {
      userName,
      password,
    };
  },
});
</script>

<style>
.user-layout-login {
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}

.login-button {
  margin-top: 8px;
  padding: 0 15px;
  font-size: 16px;
  height: 40px;
  width: 100%;
}
</style>
