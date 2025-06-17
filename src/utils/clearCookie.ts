export function clearCookie() {
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    document.cookie = `${name}=;`;
  });
}
