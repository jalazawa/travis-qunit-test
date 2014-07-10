// https://www.npmjs.org/package/grunt-contrib-qunit

module.exports = {
    test: {
        options: {
            urls: [
                'http://127.0.0.1:8080/tests/tests.html',
            ]
        },
        all: [
            'http://127.0.0.1:8080/tests/tests.html'
        ]
    }
};
