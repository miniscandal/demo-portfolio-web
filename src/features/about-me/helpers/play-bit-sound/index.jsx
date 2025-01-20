function playBitSound(sound) {
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    sound({
        audioCtx, oscillator, type: 'sawtooth', gainNode
    });

    gainNode.connect(audioCtx.destination);
    oscillator.connect(gainNode);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.1);
};

export { playBitSound };
