const path = require("path");
const tf = jest.createMockFromModule("@tensorflow/tfjs-node");

let mockFiles = Object.create(null);
function __setMockFiles(newMockFiles) {
    mockFiles = Object.create(null);
    for (const file in newMockFiles) {
        const dir = path.dirname(file);

        if (!mockFiles[dir]) {
            mockFiles[dir] = [];
        }
        mockFiles[dir].push(path.basename(file));
    }
}
const node = {
    decodeImage: jest.fn("image")
};

tf.node = node;

module.exports = tf;
