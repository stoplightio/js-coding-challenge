import * as path from "path";
import * as webpack from "webpack";

const autoprefixer = require("autoprefixer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};

const buildConfig: webpack.Configuration = {
  entry: {
    background: path.join(__dirname, "src/background.ts"),
    content: path.join(__dirname, "src/content.ts"),
    popup: path.join(__dirname, "src/index.tsx")
  },
  // tslint:disable-next-line:no-object-literal-type-assertion
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader", options: { sourceMap: !isProd() } },
          {
            loader: "css-loader",
            options: {
              localIdentName: isProd()
                ? "[hash:base64]"
                : "[path][name]__[local]__[hash:base64:6]",
              minimize: isProd(),
              modules: true,
              sourceMap: !isProd()
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9"
                  ]
                })
              ],
              sourceMap: !isProd()
            }
          }
        ]
      },
      {
        exclude: [/\.(html?)$/, /\.(ts|tsx|js|jsx)$/, /\.css$/, /\.json$/],
        loader: "file-loader",
        query: {
          name: "[name].[ext]"
        }
      }
    ]
  } as webpack.NewModule,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["background", "content"],
      minChunks: 2,
      name: "common"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["popup"],
      minChunks: 2,
      name: "common"
    }),
    new CopyWebpackPlugin([
      {
        context: "public",
        from: {
          dot: false,
          glob: "**/*"
        },
        to: path.join(__dirname, "dist/")
      }
    ])
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};

if (isProd()) {
  buildConfig.devtool = false;
  buildConfig.plugins = (buildConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("production") }
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.optimize.UglifyJsPlugin()
  ]);
} else {
  const buildConfigModule = buildConfig.module as webpack.NewModule;
  buildConfigModule.rules = (buildConfigModule.rules || []).concat([
    {
      enforce: "pre",
      exclude: /node_modules/,
      loader: "tslint-loader",
      test: /\.tsx?$/
    }
  ]);
  buildConfig.plugins = (buildConfig.plugins || []).concat([
    new webpack.SourceMapDevToolPlugin({
      exclude: /^vendor.*.\.js$/,
      filename: "[file].map"
    })
  ]);
}

export default buildConfig;
