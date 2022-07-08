const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { version } = require("./package.json");

module.exports = {
  mode: "development",
  entry: {
    background: "./src/background/background.js",
    panel: "./src/panel/panel.js",
    stats: "./src/stats/stats.js",
    options: "./src/options/options.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Panel - Potato Clock",
      template: "src/panel/panel.html",
      filename: "panel/panel.html",
      chunks: ["panel"],
    }),
    new HtmlWebpackPlugin({
      title: "Stats - Potato Clock",
      template: "src/stats/stats.html",
      filename: "stats/stats.html",
      chunks: ["stats"],
    }),
    new HtmlWebpackPlugin({
      title: "Options - Potato Clock",
      template: "src/options/options.html",
      filename: "options/options.html",
      chunks: ["options"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/manifest.json",
          to: "./manifest.json",
          transform: (content) => {
            const jsonContent = JSON.parse(content);
            jsonContent.version = version;
            return JSON.stringify(jsonContent, null, 2);
          },
        },
        { from: "./src/assets", to: "./assets" },
      ],
    }),
  ],
};
