module.exports = (eleventyConfig) => {
	const handlebars = require('handlebars')
	eleventyConfig.setLibrary('hbs', handlebars)

	eleventyConfig.addHandlebarsHelper("jsonPrint", obj => JSON.stringify(obj, null, 2))
	eleventyConfig.addHandlebarsHelper("addOne", num => (num + 1))
	eleventyConfig.addHandlebarsHelper("eq", (a, b) => (a === b))
	eleventyConfig.addHandlebarsHelper("not", exp => !exp)

	eleventyConfig.addTransform("insert-google-fonts-into-head", (content, outputPath) => {
		let returnContent = content;

		if (outputPath.endsWith('.html') && returnContent.includes('</head>')) {
			const googleFont = '<link rel="preconnect" href="https://fonts.googleapis.com/css?family=Josefin+Sans:400%7CJosefin+Slab:600" crossorigin></head>';

			returnContent = returnContent.replace('</head>', googleFont);
		}

		return returnContent;
	})

	eleventyConfig.addTransform('create-article-sections', (content, outputPath) => {
		let returnContent = content;

		if (outputPath.endsWith('.html') && returnContent.includes('id="article-content"')) {
			// 0. Get opening article element
			const openingArticleTag = returnContent.match(/<article.*?>/)[0];

			// 1. Get the start of the article
			const articleContentArray = returnContent.split(/<article.*?>/);
			// 1.1 Get all HTML before the article
			const preArticleContent = articleContentArray[0];

			// 2. Need to get only the article content
			let articleContent = articleContentArray[1];
			const postContent = articleContent.split(/<\/article>/);

			// 2.1 This is all content after the article
			let mainContent = postContent[0];
			const postArticleContent = postContent[1];

			// 3. Getting all headings inside article
			const contentArray = postContent[0].split(/<h2.*>(.*)<\/h2>/);

			// 4. If there is more than a single "section" there is more to do
			if (contentArray.length > 3) {
				// 4.1 For first section we need to wrap a `<section>` element around it
				const preFirstH2 = `
					<section>
						${contentArray[0]}
					</section>
				`;

				mainContent = contentArray
					// 4.1 We want to remove first item from the array
					.filter((item, index) => index > 0)
					// 4.2 Reducing over the array to create other sections
					.reduce((acc, curr, index) => {
						let processedHtml = '';

						// 4.3 Is it an even item and not the only "section"
						if (index % 2 === 0) {
							// 4.3.1 Getting text for the heading
							const headingText = curr;

							// 4.3.2 Getting HTML for the section
							const sectionContent = contentArray[index + 2];

							// 4.3.3  Creating the HTML for the section
							processedHtml = `
								<section>
									<h2>${headingText}</h2>
									${sectionContent}
								</section>
							`;
						}

						return `${acc}${processedHtml}`;
					}, preFirstH2);
			}

			// 5. Recomposing the HTML for the page
			returnContent = `
				${preArticleContent}
				${openingArticleTag}
					${mainContent}
				</article>
				${postArticleContent}
			`;
		}

		return returnContent;
	})

	eleventyConfig.addPassthroughCopy('assets')

	// @NOTE: Doesn't work anymore... Seems like
	// 11ty does rebuild sass when HTML changes...
	// https://www.belter.io/eleventy-sass-workflow/
	eleventyConfig.setUseGitIgnore(false)



	// **************** Markdown Plugins ********************
	let markdownIt = require("markdown-it");
	var markdownItAttrs = require('markdown-it-attrs');
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};

	let markdownLib = markdownIt(options).use(markdownItAttrs);

	eleventyConfig.setLibrary("md", markdownLib);


	return {
		dir: {
			input: './',
			includes: 'includes'
		},
		passthroughFileCopy: true
	}
}
