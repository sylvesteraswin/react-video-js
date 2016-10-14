import del from 'del';

module.exports = () => {
    del.sync(['build']);
};
