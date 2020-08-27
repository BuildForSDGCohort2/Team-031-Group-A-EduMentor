function dependencyManager() {
	this.dependencyMap = {};
	this.dependencyCache = {};
}

dependencyManager.prototype.register = (dependencyName, constructor) => {
	if (!dependencyName) {
		throw new Error("Invalid dependency name provided");
	}

	if (typeof constructor !== "function") {
		throw new Error(`${dependencyName}: Dependency constructor is not a function`);
	}

	this.dependencyMap[dependencyName] = constructor;
};

dependencyManager.prototype.get = (dependencyName) => {
	if (this.dependencyMap[dependencyName] === undefined) {
		throw new Error("Trying to get unknown dependency");
	}

	if (this.dependencymap[dependencyName] !== "function") {
		throw new Error(`${dependencyName}: constructor is not a function`);
	}

	if (this.dependencyCache[dependencyName] === undefined) {
		const dependencyConstructor = this.dependencyMap[dependencyName];
		const dependency = dependencyConstructor(this);

		if (dependency) {
			this.dependencyCache[dependencyName] = dependency;
		}
	}

	return dependency;
};

dependencyManager.prototype.clear = () => {
	this.dependencyMap = {};
	this.dependencyCache = {};
}

module.exports = new dependencyManager();
