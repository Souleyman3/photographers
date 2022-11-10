import ps from './data/photographers.json';

const photographers = ps.photographers;
const selectionPhotographers = document.querySelector('#photographers');
const medias = ps.media;

if (location.pathname === '/') {

let template = [];

// methode += sert à parcourir 1 par 1 (élément) dans un tableau

photographers.forEach(function({
  portrait,
  name,
  city,
  country,
  tagline,
  price,
  id,
}) {
    const sourceImg = `${portrait}`;
    
    template += `
      <article id="${id}">
         <img id="source" src=${sourceImg} />
         <h3>${name}</h3>
         <p id="city">${city}, ${country}</p>
         <p id="tagline">${tagline}</p>
         <p id="price">${price}€/jour</p>
      </article>
    `;
});

const selectionHeader2 = document.querySelector('.header');

  selectionHeader2.innerHTML = `
  <a href="http://localhost:1234">
  <svg viewBox="0 0 200 50" focusable="true" xmlns="http://www.w3.org/2000/svg">
			<path d="M24.7206 0.911377V6.51034H6.31164V17.578H21.4333V22.9166H6.31164V39.1926H0V0.911377H24.7206Z" fill="#911C1C"></path>
			<path d="M34.5826 1.04167C35.2401 1.69271 35.6346 2.60417 35.6346 3.64583C35.6346 4.6875 35.2401 5.46875 34.5826 6.11979C33.9252 6.77083 33.0047 7.16146 31.9528 7.16146C30.9008 7.16146 30.1119 6.77083 29.3229 6.11979C28.6655 5.46875 28.271 4.55729 28.271 3.64583C28.271 2.60417 28.6655 1.82292 29.3229 1.04167C29.9804 0.390625 30.9008 0 31.9528 0C33.0047 0 33.7937 0.390625 34.5826 1.04167ZM34.8456 11.1979V39.1927H28.9285V11.1979H34.8456Z" fill="#911C1C"></path>
			<path d="M43.261 36.9792C40.8941 35.2865 39.7107 32.9427 39.7107 29.9479H45.4964C45.6279 31.3802 46.2853 32.6823 47.6002 33.5937C48.9152 34.5052 50.4931 35.026 52.4655 35.026C54.3064 35.026 55.7528 34.6354 56.9362 33.9844C58.1196 33.3333 58.6456 32.4219 58.6456 31.25C58.6456 30.3385 58.3826 29.6875 57.8566 29.1667C57.3307 28.6458 56.6732 28.3854 55.7528 28.125C54.8323 27.8646 53.5174 27.7344 51.808 27.474H51.6765L50.8876 27.3438C48.6522 27.0833 46.6798 26.6927 45.2334 26.1719C43.787 25.651 42.472 24.8698 41.6831 23.8281C40.7626 22.7865 40.3682 21.4844 40.3682 19.6615C40.3682 17.9688 40.8941 16.4063 41.8146 15.1042C42.735 13.8021 44.1814 12.7604 45.8908 11.9792C47.6002 11.1979 49.5726 10.9375 51.808 10.9375C55.3583 10.9375 58.2511 11.7188 60.355 13.2812C62.5904 14.8438 63.7738 17.0573 63.9053 19.9219H58.1196C57.9881 18.6198 57.3307 17.5781 56.1472 16.7969C54.9638 16.0156 53.5174 15.4948 51.808 15.4948C50.0986 15.4948 48.6522 15.8854 47.7317 16.5365C46.6798 17.1875 46.1538 18.099 46.1538 19.2708C46.1538 20.0521 46.4168 20.7031 46.8113 21.0938C47.3373 21.4844 47.9947 21.7448 48.7837 22.0052C49.5726 22.1354 50.7561 22.3958 52.334 22.526C52.4655 22.526 52.4655 22.526 52.597 22.526C52.7284 22.526 52.7284 22.526 52.8599 22.526C55.3583 22.7865 57.3307 23.1771 59.0401 23.6979C60.618 24.2188 62.0644 25 62.9849 26.1719C64.0368 27.3438 64.5628 28.9062 64.5628 30.8594C64.5628 32.5521 64.0368 34.1146 62.9849 35.4167C61.9329 36.7188 60.4865 37.7604 58.6456 38.5417C56.8047 39.1927 54.8323 39.5833 52.4655 39.5833C48.6522 39.4531 45.6279 38.6719 43.261 36.9792Z" fill="#911C1C"></path>
			<path d="M75.3452 0.911377V17.9687L74.4248 16.6666C75.3452 14.9739 76.6602 13.5416 78.2381 12.4999C79.816 11.4583 81.7884 10.9374 84.2867 10.9374C87.7055 10.9374 90.4669 11.9791 92.5707 13.9322C94.6746 16.0155 95.7266 19.2708 95.7266 23.828V39.1926H89.8094V24.0885C89.8094 21.4843 89.2834 19.401 88.1 17.9687C86.9166 16.5364 85.2072 15.8853 83.1033 15.8853C81.5254 15.8853 80.2105 16.276 79.027 16.927C77.8436 17.7083 77.0546 18.7499 76.3972 20.052C75.7397 21.3541 75.4767 23.0468 75.4767 24.8697V39.0624H69.5596V0.911377H75.3452Z" fill="#911C1C"></path>
			<path d="M149.507 11.1981L157.396 32.8127L165.023 11.1981H171.335L158.58 43.4897C157.922 45.1825 157.265 46.4845 156.739 47.396C156.213 48.3075 155.555 48.9585 154.635 49.3491C153.846 49.7397 152.794 50.0002 151.348 50.0002H144.905V44.7918H149.112C149.901 44.7918 150.559 44.6616 150.953 44.5314C151.348 44.4012 151.742 44.1408 152.005 43.7502C152.268 43.3595 152.531 42.7085 152.926 41.9272L154.109 39.1929L143.064 11.0679H149.507V11.1981Z" fill="#911C1C"></path>
			<path d="M179.224 37.6303C176.989 36.4584 175.279 34.7657 174.096 32.6824C172.913 30.4688 172.255 27.9949 172.255 25.1303C172.255 22.2657 172.781 19.6615 173.965 17.5782C175.148 15.4949 176.726 13.8022 178.83 12.6303C180.934 11.4584 183.3 10.8074 186.062 10.8074C188.823 10.8074 191.19 11.3282 193.294 12.3699C195.398 13.4115 196.976 14.974 198.159 17.0574C199.343 19.1407 200 21.4845 200 24.0886C200 24.4793 200 24.7397 200 25.1303C200 25.5209 200 25.9115 199.869 26.3022H178.567C178.567 26.4324 178.567 26.4324 178.567 26.4324V26.5626C178.698 28.1251 178.961 29.5574 179.619 30.7293C180.276 31.9011 181.197 32.8126 182.38 33.4636C183.563 34.1147 184.878 34.5053 186.456 34.5053C188.297 34.5053 189.875 34.1147 191.059 33.2032C192.373 32.2918 193.162 31.1199 193.557 29.5574H199.606C199.211 31.3803 198.554 33.073 197.37 34.5053C196.187 35.9376 194.74 37.1095 193.031 38.0209C191.19 38.8022 189.218 39.323 186.982 39.323C184.089 39.4532 181.46 38.8022 179.224 37.6303ZM182.775 16.4063C181.723 16.9272 180.802 17.7084 180.145 18.7501C179.487 19.7917 178.961 20.8334 178.83 22.1355H193.951C193.688 20.0522 192.899 18.3595 191.585 17.3178C190.27 16.1459 188.429 15.6251 186.325 15.6251C185.141 15.4949 183.958 15.8855 182.775 16.4063Z" fill="#911C1C"></path>
			<path d="M135.437 7.94263H129.257L125.707 4.03638H114.004L110.454 7.94263H104.273C102.17 7.94263 100.329 9.63533 100.329 11.8489V35.026C100.329 37.1093 102.038 38.9322 104.273 38.9322H135.437C137.541 38.9322 139.382 37.2395 139.382 35.026V11.7187C139.382 9.63533 137.672 7.94263 135.437 7.94263ZM135.437 34.8957H104.405V11.7187H112.294L115.845 7.81242H124.129L127.548 11.7187H135.437V34.8957ZM119.921 13.6718C114.53 13.6718 110.191 17.9687 110.191 23.3072C110.191 28.6457 114.53 32.9426 119.921 32.9426C125.312 32.9426 129.651 28.6457 129.651 23.3072C129.651 17.9687 125.312 13.6718 119.921 13.6718ZM119.921 29.1666C116.765 29.1666 114.135 26.5624 114.135 23.4374C114.135 20.3124 116.765 17.7083 119.921 17.7083C123.077 17.7083 125.707 20.3124 125.707 23.4374C125.707 26.5624 123.077 29.1666 119.921 29.1666Z" fill="#911C1C"></path>
		</svg>
    </a>
  <h1 class="nosPhotographes1">Nos photographes</h1>`;
//  <a href="/photographer.html/?=${id}">
// permet à template de s'afficher sur la page web

selectionPhotographers.innerHTML = template;

selectionPhotographers.addEventListener('click', function (e) {
  const id = Array.from(e.target.parentElement.attributes) [0].nodeValue;

  location.href = `/photographer.html?id=${id}`;
});

} else {
  const id = +location.search.split('=')[1] * 1 ; //parse an url


  // who is the photographer on this individual page ?
  const filteredPhotographer = photographers.find(
    (photographer) => photographer.id === id
  ); 

  const selectionPhotographers2 = document.querySelector('#div2');

  console.log(filteredPhotographer)



     let template2 = `<div>
     <h1 class="H1P2">${filteredPhotographer.name}</h1>
  <p class="CITYP2">${filteredPhotographer.city}, ${filteredPhotographer.country}</p>
  <p class="TAGLINEP2">${filteredPhotographer.tagline}</p>
  </div>
  <button class="BtnContact">Contactez-moi</button>
  <img class="IMGP2" src="${filteredPhotographer.portrait}" alt="wait">
  </div>`;

selectionPhotographers2.innerHTML = template2;

const selectionHeader = document.querySelector('.header');

  selectionHeader.innerHTML = `
  <a href="http://localhost:1234">
  <svg viewBox="0 0 200 50" class="photographer-page__logo focus__element-secondary" focusable="true" xmlns="http://www.w3.org/2000/svg">
			<path d="M24.7206 0.911377V6.51034H6.31164V17.578H21.4333V22.9166H6.31164V39.1926H0V0.911377H24.7206Z" fill="#911C1C"></path>
			<path d="M34.5826 1.04167C35.2401 1.69271 35.6346 2.60417 35.6346 3.64583C35.6346 4.6875 35.2401 5.46875 34.5826 6.11979C33.9252 6.77083 33.0047 7.16146 31.9528 7.16146C30.9008 7.16146 30.1119 6.77083 29.3229 6.11979C28.6655 5.46875 28.271 4.55729 28.271 3.64583C28.271 2.60417 28.6655 1.82292 29.3229 1.04167C29.9804 0.390625 30.9008 0 31.9528 0C33.0047 0 33.7937 0.390625 34.5826 1.04167ZM34.8456 11.1979V39.1927H28.9285V11.1979H34.8456Z" fill="#911C1C"></path>
			<path d="M43.261 36.9792C40.8941 35.2865 39.7107 32.9427 39.7107 29.9479H45.4964C45.6279 31.3802 46.2853 32.6823 47.6002 33.5937C48.9152 34.5052 50.4931 35.026 52.4655 35.026C54.3064 35.026 55.7528 34.6354 56.9362 33.9844C58.1196 33.3333 58.6456 32.4219 58.6456 31.25C58.6456 30.3385 58.3826 29.6875 57.8566 29.1667C57.3307 28.6458 56.6732 28.3854 55.7528 28.125C54.8323 27.8646 53.5174 27.7344 51.808 27.474H51.6765L50.8876 27.3438C48.6522 27.0833 46.6798 26.6927 45.2334 26.1719C43.787 25.651 42.472 24.8698 41.6831 23.8281C40.7626 22.7865 40.3682 21.4844 40.3682 19.6615C40.3682 17.9688 40.8941 16.4063 41.8146 15.1042C42.735 13.8021 44.1814 12.7604 45.8908 11.9792C47.6002 11.1979 49.5726 10.9375 51.808 10.9375C55.3583 10.9375 58.2511 11.7188 60.355 13.2812C62.5904 14.8438 63.7738 17.0573 63.9053 19.9219H58.1196C57.9881 18.6198 57.3307 17.5781 56.1472 16.7969C54.9638 16.0156 53.5174 15.4948 51.808 15.4948C50.0986 15.4948 48.6522 15.8854 47.7317 16.5365C46.6798 17.1875 46.1538 18.099 46.1538 19.2708C46.1538 20.0521 46.4168 20.7031 46.8113 21.0938C47.3373 21.4844 47.9947 21.7448 48.7837 22.0052C49.5726 22.1354 50.7561 22.3958 52.334 22.526C52.4655 22.526 52.4655 22.526 52.597 22.526C52.7284 22.526 52.7284 22.526 52.8599 22.526C55.3583 22.7865 57.3307 23.1771 59.0401 23.6979C60.618 24.2188 62.0644 25 62.9849 26.1719C64.0368 27.3438 64.5628 28.9062 64.5628 30.8594C64.5628 32.5521 64.0368 34.1146 62.9849 35.4167C61.9329 36.7188 60.4865 37.7604 58.6456 38.5417C56.8047 39.1927 54.8323 39.5833 52.4655 39.5833C48.6522 39.4531 45.6279 38.6719 43.261 36.9792Z" fill="#911C1C"></path>
			<path d="M75.3452 0.911377V17.9687L74.4248 16.6666C75.3452 14.9739 76.6602 13.5416 78.2381 12.4999C79.816 11.4583 81.7884 10.9374 84.2867 10.9374C87.7055 10.9374 90.4669 11.9791 92.5707 13.9322C94.6746 16.0155 95.7266 19.2708 95.7266 23.828V39.1926H89.8094V24.0885C89.8094 21.4843 89.2834 19.401 88.1 17.9687C86.9166 16.5364 85.2072 15.8853 83.1033 15.8853C81.5254 15.8853 80.2105 16.276 79.027 16.927C77.8436 17.7083 77.0546 18.7499 76.3972 20.052C75.7397 21.3541 75.4767 23.0468 75.4767 24.8697V39.0624H69.5596V0.911377H75.3452Z" fill="#911C1C"></path>
			<path d="M149.507 11.1981L157.396 32.8127L165.023 11.1981H171.335L158.58 43.4897C157.922 45.1825 157.265 46.4845 156.739 47.396C156.213 48.3075 155.555 48.9585 154.635 49.3491C153.846 49.7397 152.794 50.0002 151.348 50.0002H144.905V44.7918H149.112C149.901 44.7918 150.559 44.6616 150.953 44.5314C151.348 44.4012 151.742 44.1408 152.005 43.7502C152.268 43.3595 152.531 42.7085 152.926 41.9272L154.109 39.1929L143.064 11.0679H149.507V11.1981Z" fill="#911C1C"></path>
			<path d="M179.224 37.6303C176.989 36.4584 175.279 34.7657 174.096 32.6824C172.913 30.4688 172.255 27.9949 172.255 25.1303C172.255 22.2657 172.781 19.6615 173.965 17.5782C175.148 15.4949 176.726 13.8022 178.83 12.6303C180.934 11.4584 183.3 10.8074 186.062 10.8074C188.823 10.8074 191.19 11.3282 193.294 12.3699C195.398 13.4115 196.976 14.974 198.159 17.0574C199.343 19.1407 200 21.4845 200 24.0886C200 24.4793 200 24.7397 200 25.1303C200 25.5209 200 25.9115 199.869 26.3022H178.567C178.567 26.4324 178.567 26.4324 178.567 26.4324V26.5626C178.698 28.1251 178.961 29.5574 179.619 30.7293C180.276 31.9011 181.197 32.8126 182.38 33.4636C183.563 34.1147 184.878 34.5053 186.456 34.5053C188.297 34.5053 189.875 34.1147 191.059 33.2032C192.373 32.2918 193.162 31.1199 193.557 29.5574H199.606C199.211 31.3803 198.554 33.073 197.37 34.5053C196.187 35.9376 194.74 37.1095 193.031 38.0209C191.19 38.8022 189.218 39.323 186.982 39.323C184.089 39.4532 181.46 38.8022 179.224 37.6303ZM182.775 16.4063C181.723 16.9272 180.802 17.7084 180.145 18.7501C179.487 19.7917 178.961 20.8334 178.83 22.1355H193.951C193.688 20.0522 192.899 18.3595 191.585 17.3178C190.27 16.1459 188.429 15.6251 186.325 15.6251C185.141 15.4949 183.958 15.8855 182.775 16.4063Z" fill="#911C1C"></path>
			<path d="M135.437 7.94263H129.257L125.707 4.03638H114.004L110.454 7.94263H104.273C102.17 7.94263 100.329 9.63533 100.329 11.8489V35.026C100.329 37.1093 102.038 38.9322 104.273 38.9322H135.437C137.541 38.9322 139.382 37.2395 139.382 35.026V11.7187C139.382 9.63533 137.672 7.94263 135.437 7.94263ZM135.437 34.8957H104.405V11.7187H112.294L115.845 7.81242H124.129L127.548 11.7187H135.437V34.8957ZM119.921 13.6718C114.53 13.6718 110.191 17.9687 110.191 23.3072C110.191 28.6457 114.53 32.9426 119.921 32.9426C125.312 32.9426 129.651 28.6457 129.651 23.3072C129.651 17.9687 125.312 13.6718 119.921 13.6718ZM119.921 29.1666C116.765 29.1666 114.135 26.5624 114.135 23.4374C114.135 20.3124 116.765 17.7083 119.921 17.7083C123.077 17.7083 125.707 20.3124 125.707 23.4374C125.707 26.5624 123.077 29.1666 119.921 29.1666Z" fill="#911C1C"></path>
		</svg>
    </a>`;
  // which medias belong to the photographer ? we need to filter

  // [59 elements ] ===> [elements appartenant au photographe]
  const filteredMedias = medias.filter((media) => media.photographerId === id);

  // BODY = section at this stage
  const section = document.querySelector('section');
  console.log(section)
  document.body.removeChild(section);

  // make the architecture of the page
 // const header = document.createElement('header'); // not yet inside the DOM
  const sectionMedias = document.querySelector('#selectionTrie');

  // inserting into the DOM...
 // document.body.appendChild(header);
  // document.body.appendChild(sectionMedias);

  // stylising the header
 // header.setAttribute('style', 'height: 150px');

  // manipulate the DOM = Document Object Model
  sectionMedias.innerHTML = `
  <div id="sort__filters">
    <span>Trier par</span>
    <select>
      <option default>Popularité</option>
      <option default>Date</option>
      <option default>Titre</option>
    </select>
  </div>
  <div id="display__medias"></div>
  `;

  // nodeModifier(sectionMedias, template);

  const select = document.querySelector('select');

  select.addEventListener('change', (e) => {
    console.log('change inside the select');

    const filter = e.target.value;

    console.log(filter);

    // 1 which filter the user clicked on?
    // ...

    // const filter = ????????

    // 3 - sort the medias using the sort method
    if(filter === 'Titre'){
      filteredMedias.sort((a, b)=>{
        if(a.title < b.title){
          return -1
        }
        return 1
      })
    }

    console.log(filteredMedias);
    // 4 - display the filtered medias
  });

  console.log(filteredMedias);

  let template3 = [];

  const selectionMediasGallery = document.querySelector('#PageGallery');

  filteredMedias.forEach(function({
    image,
    title,
    likes,
}) {
     template3 += `
     <div id="gallery" class="PageGallery">

     <figure class="PhotoGallery">
            <img class="ClassIMGgallery" src="${image}">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${likes}</p>
                    <button class="LikeBtn">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
     </div>`;
});

selectionMediasGallery.innerHTML = template3;



if(window.location.search == "?id=photographers") {
  console.log('error404');

  const errorURL = document.querySelector('.error404');

  errorURL.innerHTML = `
  <div>
     <h1 class="H1P2">Error 404</h1>
  <p class="CITYP2">retourne à l'accueil</p>
  </div>`;
}


const selectionBtn = document.querySelector('.BtnContact');
const formula = document.querySelector('#popup');


selectionBtn.addEventListener('click', (e) => {
  console.log('::popup');


  console.log(formula);

  formula.innerHTML = `
  <div id="bckContact"></div>
  <div style="background-color: #DB8876; max-width: 300px; text-align: center; padding: 10px; position: fixed; top: 0; z-index: 1; display: grid; right: 50%;">
    <p>Contactez moi</p><br>
    <p>${filteredPhotographer.name}</p>
  <div>
  <p>Prénom</p>
  <input id="firstname" /> 
  <br>
  <p>Nom</p>
  <input id="Nname" />
  <br>
  <p>Email</p>
  <input id="eMail" />
  <br>
  <p>Votre message</p>
  <textarea id="textArea"></textarea>
  <br><br>
  <button id="formulaBtn">Envoyer</button>
  </div>`;



  firstname.addEventListener('input', (e) => {
    console.log(e.target.value);
  });

  Nname.addEventListener('input', (e) => {
    console.log(e.target.value);
  });

  eMail.addEventListener('input', (e) => {
    console.log(e.target.value);
  });

  textArea.addEventListener('input', (e) => {
    console.log(e.target.value);
  });

});

  

formula.addEventListener('submit', function (e) {
  e.preventDefault();

  const elements = Array.from(e.target.elements);
  console.log(elements);


});

};

