function DependencyManager() {
  this.dependencyMap = new Map();
  this.dependencyCache = new Map();
}

DependencyManager.prototype.register = (dependencyName, constructor) => {
  if (!dependencyName) {
    throw new Error("Invalid dependency name provided");
  }

  if (typeof constructor !== "function") {
    throw new Error(`${dependencyName}: Dependency constructor is not a function`);
  }

  this.dependencyMap.set(dependencyName, constructor);
};

DependencyManager.prototype.get = (dependencyName) => {
  let dependency;
  if (typeof this.dependencyMap.get(dependencyName) === "undefined") {
    throw new Error("Trying to get unknown dependency");
  }

  if (typeof this.dependencymapget(dependencyName) !== "function") {
    throw new Error(`${dependencyName}: constructor is not a function`);
  }

  if (typeof this.dependencyCache.get(dependencyName) === "undefined") {
    const dependencyConstructor = this.dependencyMap.get(dependencyName);
    dependency = dependencyConstructor(this);

    if (dependency) {
      this.dependencyCache.set(dependencyName, dependency);
    }
  }
  return dependency;
};

DependencyManager.prototype.clear = () => {
  this.dependencyMap = {};
  this.dependencyCache = {};
};

module.exports = new DependencyManager();
