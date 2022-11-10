import ps from './data/photographers.json';

const photographers = ps.photographers;
const selectionPhotographers = document.querySelector('.DetailPagePhotographe');

const mediaPhotographers = ps.media;

console.log(mediaPhotographers);
const selectionMedia = document.querySelector('#MediaPhoto');
let template = [];

mediaPhotographers.forEach(function({
  likes,
  title,
}) {
    // const sourceImg = `${portrait}`; //<img id="source" src=${sourceImg} />
    
    template += `
      <article>
         <h3>${title}</h3>
         <p>${likes}</p>
      </article>
    `;
});

// Mimi Keel
if(window.location.search =="?id=243"){
  selectionPhotographers.innerHTML =
  '<div>' +
  '<h1 class="H1P2">' + photographers[0].name + '</h1>' +
  '<p class="CITYP2">' + photographers[0].city + ', ' + photographers[0].country + '</p>' +
  '<p class="TAGLINEP2">' + photographers[0].tagline + '</p>' +
  '</div>' +
  '<button class="BtnContact">Contactez-moi</button>' +
  '<img class="IMGP2" src="' + photographers[0].portrait + '">';
};

// Ellie-Rose Wilkens
if(window.location.search =="?id=930"){
  selectionPhotographers.innerHTML = 
  '<div>' +
  '<h1 class="H1P2">' + photographers[1].name + '</h1>' +
  '<p class="CITYP2">' + photographers[1].city + ', ' + photographers[1].country + '</p>' +
  '<p class="TAGLINEP2">' + photographers[1].tagline + '</p>' +
  '</div>' +
  '<button class="BtnContact">Contactez-moi</button>' +
  '<img class="IMGP2" src="' + photographers[1].portrait + '">';
};

// Tracy Galindo
if(window.location.search =="?id=82"){
  selectionPhotographers.innerHTML = 
  '<div>' +
  '<h1 class="H1P2">' + photographers[2].name + '</h1>' +
  '<p class="CITYP2">' + photographers[2].city + ', ' + photographers[2].country + '</p>' +
  '<p class="TAGLINEP2">' + photographers[2].tagline + '</p>' +
  '</div>' +
  '<button class="BtnContact">Contactez-moi</button>' +
  '<img class="IMGP2" src="' + photographers[2].portrait + '">';
};

// Nabeel Bradford
if(window.location.search =="?id=527"){
  selectionPhotographers.innerHTML = 
  '<div>' +
  '<h1 class="H1P2">' + photographers[3].name + '</h1>' +
  '<p class="CITYP2">' + photographers[3].city + ', ' + photographers[3].country + '</p>' +
  '<p class="TAGLINEP2">' + photographers[3].tagline + '</p>' +
  '</div>' +
  '<button class="BtnContact">Contactez-moi</button>' +
  '<img class="IMGP2" src="' + photographers[3].portrait + '">';
};

// Rhode Dubois
if(window.location.search =="?id=925"){
  selectionPhotographers.innerHTML = 
  '<div>' +
  '<h1 class="H1P2">' + photographers[4].name + '</h1>' +
  '<p class="CITYP2">' + photographers[4].city + ', ' + photographers[4].country + '</p>' +
  '<p class="TAGLINEP2">' + photographers[4].tagline + '</p>' +
  '</div>' +
  '<button class="BtnContact">Contactez-moi</button>' +
  '<img class="IMGP2" src="' + photographers[4].portrait + '">';
};

// Marcel Nikolic
if(window.location.search =="?id=195"){
  selectionPhotographers.innerHTML = 
  '<div>' +
  '<h1 class="H1P2">' + photographers[5].name + '</h1>' +
  '<p class="CITYP2">' + photographers[5].city + ', ' + photographers[5].country + '</p>' +
  '<p class="TAGLINEP2">' + photographers[5].tagline + '</p>' +
  '</div>' +
  '<button class="BtnContact">Contactez-moi</button>' +
  '<img class="IMGP2" src="' + photographers[5].portrait + '">';
};
// If Lag
if(window.location.search =="?id=photographers"){
  selectionPhotographers.innerHTML = 
  '<div>' +
  '<h1 style="font-size: 30px; line-height: 30px;" class="H1P2">Oops, Une erreur est survenue</h1>' +
  '<p class="TAGLINEP2">Ressaye!</p>';
};
if(window.location.search =="?id=true"){
    selectionPhotographers.innerHTML = 
    '<div>' +
    '<h1 style="font-size: 30px; line-height: 30px;" class="H1P2">Oops, Une erreur est survenue</h1>' +
    '<p class="TAGLINEP2">Ressaye!</p>';
  };
  

// MAIN

const filteredArray = mediaPhotographers.filter((themedia) => {
  return themedia;
});

console.log('Success!', filteredArray);

const selectionMain = document.querySelector('.MainPage2');

//Mimi Keel

if(window.location.search =="?id=243"){ 
  
  selectionMain.innerHTML = 
  `<div class="MainTrie">
  <label class="dropMenu" for="dropBtn">Trier par </label>
  <select id="dropBtn" class="ClassdropBtn" aria-label="Order by" tabindex="4">
  <option value="popularity" class="ClassdropPopu">Popularité</option>
  <option value="date" class="ClassdropDate">Date</option>
  <option value="title" class="ClassdropTitle">Titre</option>
  </select></div>

  <div id="gallery" class="PageGallery">

  <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Animals_Rainbow.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[37].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[37].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Travel_Lonesome.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[28].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[28].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Event_SeasideWedding.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[33].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[33].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Portrait_Background.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[32].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[32].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Event_PintoWedding.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[34].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[34].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Portrait_Wednesday.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[30].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[30].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Travel_HillsideColor.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[29].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[29].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Portrait_Nora.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[31].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[31].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/243/Event_BenevidesWedding.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[35].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[35].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
        <video controls="" class="VideoGallery" tabindex="5">
        <source src="https://fisheye.dame.vin/assets/medias/243/Animals_Wild_Horses_in_the_mountains.mp4">
    </video>
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[36].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[36].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        </div>
        <footer class="SectionFooterPage">
        <section class="RealySectionFooterPage">
            <aside class="AsideFooter">
            <p class="TotalLikes" aria-label="Nombre total de j'aime 680" tabindex="6">680</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="PricePhotographer" tabindex="7" aria-label="Tarif du photographe 400 euro par jour">400€/jour</p>
        </section>
        </footer>`;
};

// Ellie-Rose Wilkens

if(window.location.search =="?id=930"){ 
  
  selectionMain.innerHTML = 
  `<div class="MainTrie">
  <label class="dropMenu" for="dropBtn">Trier par </label>
  <select id="dropBtn" class="ClassdropBtn" aria-label="Order by" tabindex="4">
  <option value="popularity" class="ClassdropPopu">Popularité</option>
  <option value="date" class="ClassdropDate">Date</option>
  <option value="title" class="ClassdropTitle">Titre</option>
  </select></div>

  <div id="gallery" class="PageGallery">

  <figure class="PhotoGallery" aria-label="">
        <video controls="" class="VideoGallery" tabindex="5">
        <source src="https://fisheye.dame.vin/assets/medias/930/Sport_Tricks_in_the_air.mp4">
    </video>
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[48].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[48].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Sport_Next_Hold.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[49].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[49].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/sport_water_tunnel.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[50].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[50].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Sport_Sky_Cross.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[51].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[51].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Sport_Race_End.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[52].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[52].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Sport_Jump.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[53].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[53].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Architecture_White_Light.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[54].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[54].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Architecture_Water_on_Modern.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[55].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[55].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Architecture_Horseshoe.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[56].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[56].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Architecture_Cross_Bar.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[57].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[57].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/930/Architecture_Connected_Curves.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[58].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[58].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        </div>
        <footer class="SectionFooterPage">
        <section class="RealySectionFooterPage">
            <aside class="AsideFooter">
            <p class="TotalLikes" aria-label="Nombre total de j'aime 951" tabindex="6">951</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="PricePhotographer" tabindex="7" aria-label="Tarif du photographe 250 euro par jour">250€/jour</p>
        </section>
        </footer>`;
};

// Tracy Galindo

if(window.location.search =="?id=82"){ 
  
  selectionMain.innerHTML = 
  `<div class="MainTrie">
  <label class="dropMenu" for="dropBtn">Trier par </label>
  <select id="dropBtn" class="ClassdropBtn" aria-label="Order by" tabindex="4">
  <option value="popularity" class="ClassdropPopu">Popularité</option>
  <option value="date" class="ClassdropDate">Date</option>
  <option value="title" class="ClassdropTitle">Titre</option>
  </select></div>

  <div id="gallery" class="PageGallery">

  <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Fashion_Yellow_Beach.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[0].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[0].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Fashion_Urban_Jungle.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[1].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[1].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Fashion_Pattern_on_Pattern.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[2].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[2].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Event_WeddingGazebo.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[3].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[3].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Event_Sparklers.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[4].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[4].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Event_18thAnniversary.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[5].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[5].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
        <video controls="" class="VideoGallery" tabindex="5">
        <source src="https://fisheye.dame.vin/assets/medias/82/Art_Wooden_Horse_Sculpture.mp4">
    </video>
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[6].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[6].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Art_Triangle_Man.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[7].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[7].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Art_Purple_light.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[8].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[8].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/82/Art_Mine.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[9].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[9].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        </div>
        <footer class="SectionFooterPage">
        <section class="RealySectionFooterPage">
            <aside class="AsideFooter">
            <p class="TotalLikes" aria-label="Nombre total de j'aime 460" tabindex="6">460</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="PricePhotographer" tabindex="7" aria-label="Tarif du photographe 500 euro par jour">500€/jour</p>
        </section>
        </footer>`;
};

// Nabeel Bradford

if(window.location.search =="?id=527"){ 
  
  selectionMain.innerHTML = 
  `<div class="MainTrie">
  <label class="dropMenu" for="dropBtn">Trier par </label>
  <select id="dropBtn" class="ClassdropBtn" aria-label="Order by" tabindex="4">
  <option value="popularity" class="ClassdropPopu">Popularité</option>
  <option value="date" class="ClassdropDate">Date</option>
  <option value="title" class="ClassdropTitle">Titre</option>
  </select></div>

  <div id="gallery" class="PageGallery">

  <figure class="PhotoGallery" aria-label="">
        <video controls="" class="VideoGallery" tabindex="5">
        <source src="https://fisheye.dame.vin/assets/medias/527/Travel_Rock_Mountains.mp4">
    </video>
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[19].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[19].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Travel_Outdoor_Baths.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[20].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[20].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Travel_Road_into_Hill.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[21].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[21].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Travel_Bridge_into_Forest.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[22].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[22].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Travel_Boat_Wanderer.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[23].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[23].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Portrait_Sunkissed.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[24].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[24].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Portrait_Shaw.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[25].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[25].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Portrait_Alexandra.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[26].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[26].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/527/Portrait_AfternoonBreak.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[27].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[27].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        </div>
        <footer class="SectionFooterPage">
        <section class="RealySectionFooterPage">
            <aside class="AsideFooter">
            <p class="TotalLikes" aria-label="Nombre total de j'aime 518" tabindex="6">518</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="PricePhotographer" tabindex="7" aria-label="Tarif du photographe 350 euro par jour">350€/jour</p>
        </section>
        </footer>`;
};

// Rhode Dubois

if(window.location.search =="?id=925"){ 
  
  selectionMain.innerHTML = 
  `<div class="MainTrie">
  <label class="dropMenu" for="dropBtn">Trier par </label>
  <select id="dropBtn" class="ClassdropBtn" aria-label="Order by" tabindex="4">
  <option value="popularity" class="ClassdropPopu">Popularité</option>
  <option value="date" class="ClassdropDate">Date</option>
  <option value="title" class="ClassdropTitle">Titre</option>
  </select></div>

  <div id="gallery" class="PageGallery">

        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Sport_2000_with_8.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[10].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[10].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Fashion_Wings.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[11].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[11].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Fashion_Melody_Red_on_Stripes.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[12].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[12].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Event_VentureConference.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[13].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[13].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Event_ProductPitch.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[14].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[14].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Event_KeyboardCheck.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[15].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[15].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Event_Emcee.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[16].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[16].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/925/Animals_Majesty.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[17].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[17].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
        <video controls="" class="VideoGallery" tabindex="5">
        <source src="https://fisheye.dame.vin/assets/medias/925/Animals_Puppiness.mp4">
    </video>
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[18].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[18].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        </div>
        <footer class="SectionFooterPage">
        <section class="RealySectionFooterPage">
            <aside class="AsideFooter">
            <p class="TotalLikes" aria-label="Nombre total de j'aime 305" tabindex="6">305</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="PricePhotographer" tabindex="7" aria-label="Tarif du photographe 275 euro par jour">275€/jour</p>
        </section>
        </footer>`;
};

// Marcel Nikolic

if(window.location.search =="?id=195"){ 
  
  selectionMain.innerHTML = 
  `<div class="MainTrie">
  <label class="dropMenu" for="dropBtn">Trier par </label>
  <select id="dropBtn" class="ClassdropBtn" aria-label="Order by" tabindex="4">
  <option value="popularity" class="ClassdropPopu">Popularité</option>
  <option value="date" class="ClassdropDate">Date</option>
  <option value="title" class="ClassdropTitle">Titre</option>
  </select></div>

  <div id="gallery" class="PageGallery">

        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Travel_Tower.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[38].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[38].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Travel_SunsetonCanals.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[39].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[39].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Travel_OpenMountain.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[40].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[40].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Travel_Bike_and_Stair.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[41].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[41].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Travel_Adventure_Door.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[42].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[42].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Architecture_Contrast.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[43].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[43].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Architecture_On_a_hill.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[44].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[44].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
            <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Architecture_Dome.jpg">
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[45].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[45].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
        <video controls="" class="VideoGallery" tabindex="5">
        <source src="https://fisheye.dame.vin/assets/medias/195/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4">
    </video>
            <footer class="FooterGallery">
                <figcaption class="Figcaption">${filteredArray[46].title}</figcaption>
                <div class="FooterPage">
                    <p class="CounterLike">${filteredArray[46].likes}</p>
                    <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                    <i class="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        <figure class="PhotoGallery" aria-label="">
        <img class="ClassIMGgallery" loading="lazy" tabindex="5" src="https://fisheye.dame.vin/assets/medias/195/Architecture_Corner_Room.jpg">
        <footer class="FooterGallery">
            <figcaption class="Figcaption">${filteredArray[47].title}</figcaption>
            <div class="FooterPage">
                <p class="CounterLike">${filteredArray[47].likes}</p>
                <button class="LikeBtn" title="J'aime" tabindex="5" aria-label="Ajouter un j'aime">
                <i class="fa fa-heart" aria-hidden="true"></i></button>
            </div>
        </footer>
    </figure>
        </div>
        <footer class="SectionFooterPage">
        <section class="RealySectionFooterPage">
            <aside class="AsideFooter">
            <p class="TotalLikes" aria-label="Nombre total de j'aime 541" tabindex="6">451</p>
            <i class="fa fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="PricePhotographer" tabindex="7" aria-label="Tarif du photographe 300 euro par jour">300€/jour</p>
        </section>
        </footer>`;
};