"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTheKiller = findTheKiller;
function findTheKiller(whisper, suspects) {
    if (whisper?.length === 0 || suspects?.length === 0) {
        return '';
    }
    const isExactMatch = whisper.endsWith('$');
    const replacedWhisper = whisper.replace(/~/g, '.').toLowerCase();
    const regEx = new RegExp(`^${replacedWhisper}${isExactMatch ? '' : '.*'}`, 'i');
    const mostSuspects = suspects.filter((item) => regEx.test(item));
    return mostSuspects.length > 0 ? mostSuspects.join(',') : '';
}
