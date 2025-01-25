export function getImages(userInputValue) {
  const searchParams = new URLSearchParams({
    key: '48339480-4f5c45a75f87f035650b36ee2',
    q: userInputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 200,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
