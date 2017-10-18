const DirectoryWatcher = require('watchpack/lib/DirectoryWatcher');
const oldSetDirectory = DirectoryWatcher.prototype.setDirectory;
const oldSetFileTime = DirectoryWatcher.prototype.setFileTime;
DirectoryWatcher.prototype.setDirectory = function setDirectory(directoryPath, exist, initial, type) {
	console.log('directoryPath: ', directoryPath);
	return oldSetDirectory.call(this, directoryPath, exist, initial, type);
}
DirectoryWatcher.prototype.setFileTime = function setFileTime(filePath, mtime, initial, type) {
	console.log('filePath: ', filePath);
	return oldSetFileTime.call(this, filePath, mtime, initial, type);
}

const Watchpack = require('watchpack');
const watcher = new Watchpack({ ignored: /node_modules/ });

watcher.watch([], ['./packages/pkg-1', './packages/pkg-2'], Date.now());
