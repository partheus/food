module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("places", function (collection) {
    return collection.getFilteredByGlob("places/*.md");
  });

  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./img");

  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    passthroughFileCopy: true,
  };
}