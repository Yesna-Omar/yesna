/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/
const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/*cyf project*/
var image;


image = ['https://content.r9cdn.net/rimg/dimg/d1/eb/e7429868-city-70770-172c1567fc8.jpg?width=1200&height=630&crop=false', 'https://scontent.fman3-1.fna.fbcdn.net/v/t1.6435-9/114348974_3151121481662400_3610127011071736412_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=zlOSWXgMtIAAX-RvfO5&_nc_ht=scontent.fman3-1.fna&oh=00_AT-2M2aseqNWBGwSlJKbLJs9H2-k5q5EjKOFRyukSayBMQ&oe=63195D05', 'https://pbs.twimg.com/media/DolsYyCU4AAeDnS.jpg:large'];
let element_img_cyf = document.getElementById('img-cyf');
element_img_cyf.setAttribute("src", image.slice(-1)[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_img_cyf2 = document.getElementById('img-cyf');
  image.unshift(image.pop());
  element_img_cyf2.setAttribute("src", image.slice(-1)[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_img_cyf3 = document.getElementById('img-cyf');
  image.push(image.shift());
  element_img_cyf3.setAttribute("src", image[0]);

});


/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/




const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/

var links, name2, item;


links = ['https://www.facebook.com/codeyourfuture.io', 'https://twitter.com/codeyourfuture?lang=en', 'https://www.instagram.com/codeyourfuture_/?hl=en'];
name2 = ['facebook', 'twitter', 'instagram'];


document.getElementById('button-cyf').addEventListener('click', (event) => {
  let element_list_cyf = document.getElementById('list-cyf');
  name2.forEach((item) => {
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.setAttribute("href", links.shift());
    new_a.innerText = item;

    new_li.appendChild(new_a);

    element_list_cyf.appendChild(new_li);
  });

});





test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
