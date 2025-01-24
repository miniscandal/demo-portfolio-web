async function getDataBlob({ url, getData }) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }

        const blob = await response.blob();


        return getData({ blob, error: false });

    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
    }
}

export { getDataBlob };
