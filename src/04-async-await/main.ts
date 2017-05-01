
function waitFor(timeout: number) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => {
      clearTimeout(t);
      resolve(timeout);
    }, timeout);
  });
}

async function echoAsync(message: string, timeout: number) {
  try {
    const value = await waitFor(timeout);
    console.log(message);
  } catch (e) {
    console.error('error:', e);
  }
}
