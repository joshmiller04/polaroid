module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("imgs");
  
  return {
      dir: {
          input: ".",
          includes: "_includes",
          output: "_site"
      }
  };
};