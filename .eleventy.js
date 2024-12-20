const handlebars = require('handlebars');
const fs = require("fs");
const path = require("path");

const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAbbr = require('markdown-it-abbr');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttribution = require('markdown-it-attribution');

const embedYouTube = require("eleventy-plugin-youtube-embed");

const pluginSass = require("@jgarber/eleventy-plugin-sass");

const pluginRss = require("@11ty/eleventy-plugin-rss");

// const { PurgeCSS } = require('purgecss')

const htmlmin = require("html-minifier");


module.exports = (eleventyConfig) => {
	// ============================================
	// 11TY GENERAL OPTIONS
	// ============================================
	// Copies assets into output dir
	eleventyConfig.addPassthroughCopy('assets')

	// Copying favicon from assets into root output dir
	eleventyConfig.addPassthroughCopy({ 'assets/favicon.ico': 'favicon.ico' });

	// @NOTE: Doesn't work anymore... Seems like
	// 11ty does rebuild sass when HTML changes...
	// https://www.belter.io/eleventy-sass-workflow/
	eleventyConfig.setUseGitIgnore(false)




	// ============================================
	// 11TY GENERAL PLUGINS
	// ============================================
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(embedYouTube, {
		embedClass: 'vendor-11ty-youtube-embed'
	});




	// ============================================
	// HANDLEBARS
	// ============================================
	eleventyConfig.setLibrary('hbs', handlebars)


	// ======
	// Had to manually register handlebars partials. Without this inital startung if the app meant
	// that `index.md` could not find any partials. 
	// @TODO: Replace handlebars with something else
	// Define the partials directory
	const partialsDir = path.join(__dirname, "includes");

	// Register each partial in the partials directory with Handlebars
	fs.readdirSync(partialsDir).forEach(file => {
		const matches = /^([^.]+).hbs$/.exec(file);
		if (!matches) {
			return;
		}
		const name = matches[1];
		const template = fs.readFileSync(path.join(partialsDir, file), "utf8");
		handlebars.registerPartial(name, template);
	});


	// Handlebar helpers
	eleventyConfig.addHandlebarsHelper("jsonPrint", obj => JSON.stringify(obj, null, 2))
	eleventyConfig.addHandlebarsHelper("addOne", num => (num + 1))
	eleventyConfig.addHandlebarsHelper("eq", (a, b) => (a === b))
	eleventyConfig.addHandlebarsHelper("not", exp => !exp)
	eleventyConfig.addHandlebarsHelper("reverse", array => array.reverse())
	eleventyConfig.addHandlebarsHelper("getYear", () => new Date().getFullYear())
	eleventyConfig.addHandlebarsHelper('ternary', function (condition, valueIfTrue, valueIfFalse) {
		return condition ? valueIfTrue : valueIfFalse;
	});
	eleventyConfig.addHandlebarsHelper('concat', function () {
		var outStr = '';
		for (var arg in arguments) {
			if (typeof arguments[arg] != 'object') {
				outStr += arguments[arg];
			}
		}
		return outStr;
	});
	// {{#ifCond condition1 "&&" condition2}}
	eleventyConfig.addHandlebarsHelper('ifCond', function (v1, operator, v2, options) {
		switch (operator) {
			case '==':
				return v1 == v2 ? options.fn(this) : options.inverse(this);
			case '!=':
				return v1 != v2 ? options.fn(this) : options.inverse(this);
			case '>':
				return v1 > v2 ? options.fn(this) : options.inverse(this);
			case '<':
				return v1 < v2 ? options.fn(this) : options.inverse(this);
			case '&&':
				return v1 && v2 ? options.fn(this) : options.inverse(this);
			case '||':
				return v1 || v2 ? options.fn(this) : options.inverse(this);
			default:
				return options.inverse(this);
		}
	})
	// {{markdown <frontmatter prop with markdown in it that will be rendered as HTML>}}
	eleventyConfig.addHandlebarsHelper("markdown", function (content) {
		return new handlebars.SafeString(markdownLib.render(content))
	});


	// First look for `meta.ogImg`
	// If cant find that try `featuredImg`
	// Finally as the fallback use `globalMetaData.baseUrl "/assets/img/og-fallback-image.png"`
	eleventyConfig.addHandlebarsHelper('getOgImage', function (meta, featuredImg, globalMetaData) {
		if (meta && meta.ogImg) {
			return globalMetaData.baseUrl + meta.ogImg;
		} else if (featuredImg) {
			return globalMetaData.baseUrl + featuredImg;
		} else {
			return globalMetaData.baseUrl + "/assets/img/og-fallback-image.png";
		}
	});

	// Define the helper function
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};

	// Register the helper with Handlebars
	eleventyConfig.addHandlebarsHelper('formatDate', formatDate);

	// @NOTE: Leaving in here in case need this in the future
	// Add a custom logger to debug partial paths
	// eleventyConfig.on('eleventy.before', async ({dir, runModa, outputMode}) => {
	// 	console.log("🚨🚨🚨 dir 🚨🚨🚨", dir);
	// 	console.log("Registered Handlebars partials:", handlebars);
	// });




	// ============================================
	// SASS
	// ============================================
	eleventyConfig.addPlugin(pluginSass, {
		cleanCSS: true,
		cleanCSSOptions: {
			level: {
				2: {
					all: true,
					removeDuplicateRules: true
				}
			}
		},
		watch: ['assets/scss/main.scss', '!node_modules/**'],
		outputDir: './_site/assets/'
	});





	// ============================================
	// HTML transforms
	// ============================================
	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}

		return content;
	});


	/**
	 * CREATE ARTICLE SECTIONS
	 *
	 * Inserts `<section>` into articles using `h2` to signify a new section
	 */
	// eleventyConfig.addTransform('create-article-sections', (content, outputPath) => {
	// 	let returnContent = content;

	// 	if (outputPath.endsWith('.html') && returnContent.includes('id="article-content"')) {
	// 		// 0. Get opening article element
	// 		const openingArticleTag = returnContent.match(/<article.*?>/)[0];

	// 		// 1. Get the start of the article
	// 		const articleContentArray = returnContent.split(/<article.*?>/);
	// 		// 1.1 Get all HTML before the article
	// 		const preArticleContent = articleContentArray[0];

	// 		// 2. Need to get only the article content
	// 		let articleContent = articleContentArray[1];
	// 		const postContent = articleContent.split(/<\/article>/);

	// 		// 2.1 This is all content after the article
	// 		let mainContent = postContent[0];
	// 		const postArticleContent = postContent[1];

	// 		// 3. Getting all headings inside article
	// 		const contentArray = postContent[0].split(/<h2.*>(.*)<\/h2>/);

	// 		// 4. If there is more than a single "section" there is more to do
	// 		if (contentArray.length > 3) {
	// 			// 4.1 For first section we need to wrap a `<section>` element around it
	// 			const preFirstH2 = `
	// 				<section>
	// 					${contentArray[0]}
	// 				</section>
	// 			`;

	// 			mainContent = contentArray
	// 				// 4.1 We want to remove first item from the array
	// 				.filter((item, index) => index > 0)
	// 				// 4.2 Reducing over the array to create other sections
	// 				.reduce((acc, curr, index) => {
	// 					let processedHtml = '';

	// 					// 4.3 Is it an even item and not the only "section"
	// 					if (index % 2 === 0) {
	// 						// 4.3.1 Getting text for the heading
	// 						const headingText = curr;

	// 						// 4.3.2 Getting HTML for the section
	// 						const sectionContent = contentArray[index + 2];

	// 						// 4.3.3  Creating the HTML for the section
	// 						processedHtml = `
	// 							<section>
	// 								<h2>${headingText}</h2>
	// 								${sectionContent}
	// 							</section>
	// 						`;
	// 					}

	// 					return `${acc}${processedHtml}`;
	// 				}, preFirstH2);
	// 		}

	// 		// 5. Recomposing the HTML for the page
	// 		returnContent = `
	// 			${preArticleContent}
	// 			${openingArticleTag}
	// 				${mainContent}
	// 			</article>
	// 			${postArticleContent}
	// 		`;
	// 	}

	// 	return returnContent;
	// })


	/**
	 * Remove any CSS not used on the page and inline the remaining CSS in the
	 * <head>.
	 *
	 * @see {@link https://github.com/FullHuman/purgecss}
	 */
	// For now disbaling as causing issues running `npm run start`

	// eleventyConfig.addTransform('purge-and-inline-css', async (content, outputPath) => {
	// 	// console.log(`ELEVENTY_ENV: ${process.env.ELEVENTY_ENV}`);

	// 	// if (process.env.ELEVENTY_ENV !== 'production' || !outputPath.endsWith('.html')) {
	// 	// 	return content;
	// 	// }

	// 	const purgeCSSResults = await new PurgeCSS().purge({
	// 		content: [{ raw: content }],
	// 		// css: ['./assets/main.css'],
	// 		css: ['./_site/assets/main.css'],
	// 		keyframes: true,
	// 	});

	// 	if (purgeCSSResults.length) {
	// 		return content.replace('<link rel="stylesheet" href="/assets/style.css">', '<style>' + purgeCSSResults[0].css + '</style>');
	// 	} else {
	// 		return content;
	// 	}
	// });





	// ============================================
	//  MARKDOWN OPTIONS
	// ============================================
	// Allowing use of MardownIt
	const mardownItOptions = {
		html: true,       // Enable HTML tags in source
		breaks: true,     // Convert '\n' in paragraphs into <br>
		linkify: true     // Autoconvert URL-like text to links
	};

	const markdownItAnchorOptions = {
		level: 2,
		// permalink: true,
		permalink: markdownItAnchor.permalink.linkInsideHeader({
			class: "inline-link -interactive",
			symbol:
				`
				<span class="vh">Jump to heading</span>
				<span aria-hidden="true">#</span>`,
			placement: 'before'
		})
	}

	const markdownLib = markdownIt(mardownItOptions)
		.use(markdownItAttrs)
		.use(markdownItAbbr)
		.use(markdownItAnchor, markdownItAnchorOptions)
		.use(markdownItAttribution, {
			marker: '--',
			removeMarker: true
		});
	eleventyConfig.setLibrary("md", markdownLib);


	// Filter to exclude drafts unless in development
	eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getFilteredByGlob("./articles/*.md").filter(post => {
			return process.env.NODE_ENV === "production" ? !post.data.draft : true
		});
	});


	return {
		dir: {
			input: '.',
			includes: 'includes'
		},
		passthroughFileCopy: true
	}
}
