const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = [  
  {
    test: /\.(jsx|ts|tsx)?$/, 
    exclude: /node_modules/,
    use: {
     loader: 'ts-loader'
    },
  },
  { 
   test: /\.js$/, 
   exclude: /node_modules/, 
   loader: 'babel-loader' 
  },
    {    
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
        exclude: /node_modules/,    
        loader: 'file-loader'    
    },    
    {    
        test: /\.(woff|woff2)$/,    
        exclude: /node_modules/,
        use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000,
              },
            },
        ]  
    },    
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
        exclude: /node_modules/,
        use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/octet-stream'
              },
            },
        ]     
    },    
    {    
        test: /\.(jpe?g|png|gif)$/i,    
        use: [            
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream'
                },
            }, 
            'img-loader'
        ] 
    },
    {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
    }  
];
