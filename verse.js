function getVerse() {
  // url (required), options (optional)
  const randomChapter = Math.floor(Math.random() * 30) + 1;
  const randomVerse = Math.floor(Math.random() * 20) + 1;
  const query = `%7B%0A%20%20passage(reference%3A%20%22Prov%20${randomChapter}%3A${randomVerse}%22)%20%7B%0A%20%20%20%20verses%20%7B%0A%20%20%20%20%20%20text%2C%0A%20%20%20%20%20%20book%2C%0A%20%20%20%20%20%20chapter%2C%0A%20%20%20%20%20%20verse%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D`;
  const url = `http://bibleapi.ws/graphql?query=${query}`;

  $.get(url, function(data, status) {
    const verse = data.data.passage.verses[0];
    const ref = `${verse.book} ${verse.chapter}:${verse.verse}`;
    $('.verse-text').text(verse.text);
    $('.verse-ref').text(ref);
  });
}
