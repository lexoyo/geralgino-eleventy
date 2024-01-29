module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    // eleventyConfig.addPassthroughCopy('./src/bootstrap.min.css');
    // eleventyConfig.addPassthroughCopy('./src/bootstrap.min.js');
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};