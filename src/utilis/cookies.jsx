/**
 * Zapisuje klucz API w pliku cookie.
 * @param {string} apiKey Klucz API do zapisania.
 * @param {number} [expirationDays=7] Liczba dni do wygaśnięcia pliku cookie.
 */
export function setApiKeyCookie(apiKey, expirationDays = 7) {
  if (typeof document === 'undefined') {
    // Obsługa po stronie serwera lub w środowisku bez 'document'
    console.warn("Cannot set cookie: 'document' is not available.");
    return;
  }
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  // Usunięto atrybut Secure dla środowiska deweloperskiego
  document.cookie = `apiKey=${encodeURIComponent(apiKey)};${expires};path=/;SameSite=Lax`;
  console.log("Klucz API został zapisany w cookie.");
}

/**
 * Odczytuje klucz API z pliku cookie.
 * @returns {string|null} Klucz API lub null, jeśli nie znaleziono.
 */
export function getApiKeyCookie() {
  if (typeof document === 'undefined') {
    // Obsługa po stronie serwera lub w środowisku bez 'document'
    console.warn("Cannot get cookie: 'document' is not available.");
    return null;
  }
  const name = "apiKey=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  // console.log("Nie znaleziono klucza API w cookie."); // Można odkomentować dla debugowania
  return null;
}

/**
 * Usuwa plik cookie z kluczem API.
 */
export function deleteApiKeyCookie() {
  if (typeof document === 'undefined') {
    console.warn("Cannot delete cookie: 'document' is not available.");
    return;
  }
  document.cookie = "apiKey=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Lax";
  console.log("Klucz API został usunięty z cookie.");
}
