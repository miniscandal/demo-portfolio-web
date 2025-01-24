function isBlob({ blob }) {
    return blob instanceof Blob && blob.size > 0;
}

export {
    isBlob
};
