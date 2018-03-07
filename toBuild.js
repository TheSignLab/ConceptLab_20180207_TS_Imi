var compressor = require('node-minify');
compressor.minify({
  compressor: 'gcc',
  input: 'src/**/**/**/**/**/*.js',
  output: 'build/bar.js',
  callback: function (err, min) {
      console.log("Ok Doki JS")
  }
});

compressor.minify({
  compressor: 'clean-css',
  input: 'src/**/**/**/**/**/*.css',
  output: 'build/style.css',
  callback: function (err, min) {
      console.log("Ok Doki CSS")
  }
});