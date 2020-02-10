const paragraph1 = document.querySelector('p');
paragraph1.style.color = 'lightBlue';
paragraph1.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const heading = document.querySelector('h1')
heading.style.fontSize = '5em';

const list13 = document.querySelector('#item-13')
list13.style.opacity = '.5';

const list3 = document.querySelector('#item-3')
list3.innerText = 'I say, "Hi!"';


const image = document.querySelector('img')
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
image.style.height = '300px'
image.style.width = '300px'


const newImage = document.createElement('img');
newImage.src = 'https://10ztalk.com/wp-content/uploads/2020/02/Trump-Insists-Real-Photo-Revealing-His-Fake-Tan-Is-Fake.jpg'
newImage.style.height = '300px'
newImage.style.width = '300px'
const img2 = document.querySelector('div');
img2.appendChild(newImage);

const newLi = document.createElement('li');
newLi.className = 'item' 
newLi.id = 'item-16'
newLi.innerText= 'Won/t get fooled again'
const list = document.querySelector('ul');
list.appendChild(newLi);

