const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//1
module.exports = {
  entry: "./src/app/index.js", //que archivo va a leer
  output: {
    //y a donde y como lo va a fomatear
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  //servidor de desarrollo
  devServer: { port: 3000 },
  //rules
  module: {
    rules: [
      {
        //Carga archivos Css
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  }, //Carga Archivos HTML
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
