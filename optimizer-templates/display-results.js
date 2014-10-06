module.exports = function (err, results) {

    console.log('Results:');
    results.forEach(function(result) {
        console.log('* ' + result.trim());
    });
};
