const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 진입 파일 경로
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드 결과물 경로
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // js, jsx 파일을 처리하는 규칙
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // 파일 확장자 처리
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 템플릿 HTML 파일 경로
      filename: 'index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // 개발 서버 루트
    compress: true,
    port: 3000 // 개발 서버 포트
  }
}

// entry: Webpack이 파일을 번들링하기 시작하는 파일입니다.
// output: 번들링된 파일을 저장할 경로와 파일명을 지정합니다.
// module.rules: Babel을 사용해 .js 및 .jsx 파일을 트랜스파일링합니다.
// HtmlWebpackPlugin: 빌드된 JavaScript를 포함한 HTML 파일을 자동 생성합니다.
// devServer: Webpack Dev Server 설정입니다.