module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
			{
			  test: /\.jsx*$/,
			  exclude: [/node_modules/, /.+\.config.js/],
			  loader: 'babel',
		    }, 
			{
			  test: /\.json$/,
			  loader: 'json-loader',
		    },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};