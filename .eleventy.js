module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("places", function (collection) {
    return collection.getFilteredByGlob("places/*.md");
  });

  eleventyConfig.addCollection("carts", function (collection) {
    return collection.getFilteredByGlob("carts/*.md");
  });


  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./img");

  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    passthroughFileCopy: true,
  };
}