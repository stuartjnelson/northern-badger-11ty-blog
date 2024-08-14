module.exports = function () {
	return {
		env: process.env.ELEVENTY_ENV || "development",
		gaId: process.env.GA_ID || ""
	};
};