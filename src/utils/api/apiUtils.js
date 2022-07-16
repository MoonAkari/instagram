export async function handleResponse(response) {
  if (response.status !== 200
    && response.status !== 409
    && response.status !== 404
    && response.status !== 403) {
    throw new Error('Network response was not ok');
  }
  return response.data;
}

export function handleError(error) {
  const err = {};
  const constStringIndex = error.message.indexOf('code');
  const errorCode = Number(error.message.slice(constStringIndex + 4).trim());
  if (errorCode === 401) {
    err.LoginError = true;
    throw err;
  } else {
    throw error;
  }
}
