module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    return {
      passthroughFileCopy: true
    }

    config.addCollection( 'places', collection =>
	{
		return collection
			.getFilteredByGlob( '/places/*.md' )
			.filter( place => !place.data.hidden );
	});
  }