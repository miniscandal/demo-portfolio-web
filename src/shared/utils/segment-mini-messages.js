function segmentMiniMessages(messages) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });


    return messages.map((value, index) => {
        const { kaomoji, message, emoji } = value;
        const text = `${kaomoji}\n${message}\n${emoji}`;


        return {
            id: index,
            message: Array.from(segmenter.segment(text)).map(segment => segment.segment)
        };
    });
};

export { segmentMiniMessages };
