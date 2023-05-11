// @ts-ignore
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: "swc-loader",
      },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "api1",
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     media: "media@http://localhost:3003/remoteEntry.js",
    //   },
    // }),
    new ModuleFederationPlugin({
      name: "api1",
      remotes: {
        media: `promise new Promise(resolve => {
          const remoteUrlWithVersion = 'http://localhost:3003/remoteEntry.js';
          const script = document.createElement('script');
          script.src = remoteUrlWithVersion;
          script.onload = () => {
            // the injected script has loaded and is available on window
            // we can now resolve this Promise
            const proxy = {
              get: (request) => {
                return window.media.get(request)
              },
              init: (arg) => {
                try {
                  return window.media.init(arg)
                } catch(e) {
                  console.log('remote container already initialized')
                }
              }
            }
            resolve(proxy)
          }
          // inject this script with the src set to the versioned remoteEntry.js
          document.head.appendChild(script);
        })
        `,
      },
    }),
  ],
};
