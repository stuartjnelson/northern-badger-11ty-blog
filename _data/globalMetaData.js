// Getting 11ty sites base URL locally, if in Codespace and for prod 
const getBaseUrl = () => {
	// Determine the environment
	let baseUrl = process.env.NODE_ENV === "production" ? "https://www.blog.northernbadger.co.uk" : "http://localhost:8080";

	// If in GitHub Codespaces, dynamically get the base URL
	if (process.env.CODESPACE_NAME) {
	  baseUrl = `https://${process.env.CODESPACE_NAME}-8080.app.github.dev`;
	}

	return baseUrl
}

module.exports = function () {
	return {
		description: "Northern badger blog - frontend web development blog focusing on a11y, accessablity, scss, HTML and performance",
		baseUrl: getBaseUrl()
	};
};