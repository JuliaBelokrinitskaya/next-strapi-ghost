export function getStrapiURL(path: string) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://stage.strapi.osome.club'
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error('An error occurred please try again');
  }
  const data = await response.json();
  return data;
}

export async function getPage(name: string) {
  const pages = await fetchAPI(`/pages?_locale=all&name=${name}`);
  return pages[0];
}
