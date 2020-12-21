// Find something in an array
// The map() function turns one array into another

// Let's say we get an array of objects back from a REST service
const data = [
  { objectId: 1, title: "Google", url: "http://www.google.com" },
  { objectId: 2, title: "Yahoo", url: "http://www.yahoo.com" },
  { objectId: 3, title: "FaceBook", url: "http://www.facebook.com" },
  { objectId: 4, title: "Twitter", url: "http://www.twitter.com" },
];

// but what we really want is an array that looks like this
const list = [
  { id: 1, name: "Google", href: "http://www.google.com" },
  { id: 2, name: "Yahoo", href: "http://www.yahoo.com" },
  { id: 3, name: "FaceBook", href: "http://www.facebook.com" },
  { id: 4, name: "Twitter", href: "http://www.twitter.com" },
];

// The map() function is made exactly for this
let mappedList = data.map(item => {
  return (
    {
      id: item.objectId,
      name: item.title,
      href: item.url
    });
});

// Could also do this, without the return()
mappedList = data.map(item => (
  {
    id: item.objectId,
    name: item.title,
    href: item.url
  })
);

console.log(JSON.stringify(mappedList, null, 2));
