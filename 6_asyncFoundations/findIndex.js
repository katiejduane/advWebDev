var arr = [3, 4, 6, 2, 1];
findIndex(arr, function (num, index, array) {
    return num === 6;
});

var arr = [5, 11, 13, 8, 6, 7];
findIndex(arr, function (num, index, array) {
    return num % 2 === 0;
});

var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function (lang, index, arr) {
    return lang === "JavaScript";
});

var langs = ["Java", "C++", "JavaScript"];
findIndex(langs, function (lang, index, arr) {
    lang === "JavaScript";
});
