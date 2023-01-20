export const onLinkCopy = () => {
    const text = window.location.href?.split('?')[0];
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData('Text', text);
    } else if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const isOS = () => navigator.userAgent.match(/ipad|iphone/i);
        const textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed';
        textarea.disabled = true;
        document.body.appendChild(textarea);
        if (isOS()) {
            const range = document.createRange();
            range.selectNodeContents(textarea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textarea.setSelectionRange(0, 999999);
        } else {
            textarea.select();
        }
        try {
            return document.execCommand('copy');
        } catch (ex) {
            console.warn('Copy to clipboard failed.', ex);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}