const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const presetenv = require("postcss-preset-env");


// TODO get sitemap working

module.exports = function (eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("assets");

  // Add B64 font encoder
  eleventyConfig.addFilter("encodeFont", require("./config/encode-font"));

  // Add menu collection for page-nav
  eleventyConfig.addCollection("menu", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter(function (item) {
        return "menu-order" in item.data;
      })
      .sort((a, b) => {
        return a.data["menu-order"] > b.data["menu-order"];
      });
  });

  // PostCSS TRANSFORM
  eleventyConfig.addTransform("postcss", async function(content, outputPath) {
    if( outputPath.endsWith(".css") ) {
      return postcss([presetenv({ stage: 0 }), autoprefixer])
        .process(content)
        .then(result => result.css);
    }
    return content;
  });

  return {
    dir: {
      input: "./templates", // Equivalent to Jekyll's source property
      output: "./docs", // Equivalent to Jekyll's destination property
    },
  };
};
