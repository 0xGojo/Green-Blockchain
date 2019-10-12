const isValidObjectId = (id) => {
	return id.match(/^[0-9a-fA-F]{24}$/) ? id : null;
};

module.exports = {isValidObjectId};