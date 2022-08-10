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


