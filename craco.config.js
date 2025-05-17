const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@core': path.resolve(__dirname, 'src/@core'),
      '@layouts': path.resolve(__dirname, 'src/@layouts'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
} 