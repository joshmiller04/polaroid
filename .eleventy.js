module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("Styles");
  eleventyConfig.addPassthroughCopy("Imgs");
  return {
      dir: {
          input: ".",
          includes: "_includes",
          output: "_site"
      }
  };
};