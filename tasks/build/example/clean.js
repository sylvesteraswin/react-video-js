import del from 'del';

module.exports = () => {
    del.sync([
        'example/app.js',
        'example/style.css'
    ]);
};
