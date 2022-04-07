module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("places", function (collection) {
    return collection.getFilteredByGlob("places/*.md");
  });

  eleventyConfig.addPassthroughCopy("./css");
  return {
    passthroughFileCopy: true,
  };
}