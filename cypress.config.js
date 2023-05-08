const { defineConfig } = require("cypress");

const vue = require("@vitejs/plugin-vue")
const basicSsl = require("@vitejs/plugin-basic-ssl")

// import vue from '@vitejs/plugin-vue';
// import basicSsl from '@vitejs/plugin-basic-ssl';


module.exports = defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        plugins: [vue(), basicSsl()],
        server: {
          https: true,
          port: 5174,
          proxy: {
            '/api-proxy': {
              target: 'https://localhost:8001/',
              secure: false,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api-proxy/, ''),
            },
          },
        },
      }
    },
  },
});
