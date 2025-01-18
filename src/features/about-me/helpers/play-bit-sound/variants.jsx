function playBitSoundPerfect({ audioCtx, oscillator, type, gainNode }) {
    oscillator.type = type;

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(4000, audioCtx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
}

function playBitSoundMiss({ audioCtx, oscillator, type, gainNode }) {
    oscillator.type = type;

    oscillator.frequency.setValueAtTime(120, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(60, audioCtx.currentTime + 0.2);

    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
}

export {
    playBitSoundPerfect,
    playBitSoundMiss,
};
