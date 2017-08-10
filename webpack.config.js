module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
		  {
			test: /\.json$/,
			loader: 'json-loader'
		  },
		  {
			test: /\.js$/,
			loader: 'babel-loader'
		  },
		  {
            test: /\.css$/, loader: "style-loader!css-loader"
          }
		]
    }
};