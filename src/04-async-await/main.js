function waitFor(timeout) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => {
            clearTimeout(t);
            resolve(timeout);
        }, timeout);
    });
}
async function echoAsync(message, timeout) {
    try {
        const value = await waitFor(timeout);
        console.log(message);
    }
    catch (e) {
        console.error('error:', e);
    }
}
