
module.exports = {
    injectChanges: true,
    port: 3000,
    watchOptions: { ignored: ['node_modules', 'scss'] },
    files: ['./**/*.{html,htm,css,js}'],
    server: {
        baseDir: '.'
    }
};
