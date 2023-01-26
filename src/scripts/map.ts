import claster from "../assets/images/map/claster.svg";
import icon from "../assets/images/map/icon.svg";
import iconActive from "../assets/images/map/icon-active.svg";
import imgObject from "../assets/images/decor/1.png";
type adres = {
  city: string;
  coord: [number, number];
  adres: string;
};
type objectWork = {
  name: string;
  link: string;
  coord: [number, number];
  imgLink: string;
};
const zoom = 10;
const mapOffice = document.querySelector(".welcome");
const mobileBoolean = document.documentElement.clientWidth < 400;
const maxWidthBalloon = mobileBoolean ? 300 : 300;
if (mapOffice) {
  const maxWidthBalloon = mobileBoolean ? 300 : 500;
  const centerCoordinate = mobileBoolean
    ? [55.86695880147245, 37.22411684199047]
    : [55.86695880147245, 37.22411684199047];
  const myGeoObjects = [] as any;
  const map = mapOffice.querySelector("#map");
  const adresses = parseDataObject<adres>(map.getAttribute("data-adres"));

  const init = () => {
    // @ts-ignore
    var myMap = new ymaps.Map(map, {
      center: centerCoordinate,
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom,
      controls: [],
    });

    adresses.forEach((item, index) => {
      // @ts-ignore
      const MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="map-block__info">
          <h3><b>${item.city}</b></h3>
          <p>${item.adres}</p>
          <p>
            <a href="tel:+74957661281">+7 (495) 766 1281</a>
            <a href="tel:+79857661281">+7 (985) 766 1281</a>
          </p>
          <p>info@sg-sauna.ru</p>
          <p>
            <small>
              Отвечаем и перезваниваем<br>
              каждый день с 8:00 до 21:00 (Мск)
            </small>
          </p>
        </div>`
      );
      // @ts-ignore
      myGeoObjects[index] = new ymaps.Placemark(
        item.coord,
        {
          hintContent: item.adres,
        },
        {
          iconLayout: "default#image",
          iconImageHref: icon,
          iconImageSize: [30, 30],
          balloonShadow: true,
          balloonContentLayout: MyBalloonContentLayout,
          balloonMaxWidth: maxWidthBalloon,
          hideIconOnBalloonOpen: false,
          balloonOffset: [-400, 300],
          balloonPanelMaxMapArea: mobileBoolean ? Infinity : null,
        }
      );
      myGeoObjects[index].events.add("balloonopen", () => {
        myGeoObjects[index].options.set({
          iconImageHref: iconActive,
        });
      });
      myGeoObjects[index].events.add("balloonclose", () => {
        myGeoObjects[index].options.set({
          iconImageHref: icon,
        });
      });
    });
    // @ts-ignore
    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold; font-size:24px;">{{ properties.geoObjects.length }}</div>'
    );
    // @ts-ignore
    var myClusterer = new ymaps.Clusterer({
      // @ts-ignore
      clusterIcons: [
        {
          href: claster,
          size: [50, 50],
          offset: [-25, -25],
        },
      ],
      clusterNumbers: [5],
      clusterIconContentLayout: MyIconContentLayout,
    });
    myClusterer.add(myGeoObjects);
    //@ts-ignore
    myMap.geoObjects.add(myClusterer);
  };
  // @ts-ignore
  ymaps.ready(init);
}
const mapObjects = document.querySelector(".map-objects");
if (mapObjects) {
  const centerCoordinate = mobileBoolean
    ? [55.75807702038676, 37.61849116853893]
    : [55.75807702038676, 37.61849116853893];
  const myGeoObjects = [] as any;

  const map = mapObjects.querySelector("#map");
  const objects = parseDataObject<objectWork>(map.getAttribute("data-objects"));

  const init = () => {
    // @ts-ignore
    var myMap = new ymaps.Map(map, {
      center: centerCoordinate,
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom,
      controls: [],
    });

    objects.forEach((item, index) => {
      // @ts-ignore
      const MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="map-block__info map-block__info--objects">
          <div class="img-wrapper radios">
            <img src="${imgObject}">
          </div>
          <a target="_blank" href="${item.link}">${item.name}</a>
        </div>`
      );
      // @ts-ignore
      myGeoObjects[index] = new ymaps.Placemark(
        item.coord,
        {
          hintContent: item.name,
        },
        {
          iconLayout: "default#image",
          iconImageHref: icon,
          iconImageSize: [30, 30],
          balloonShadow: true,
          balloonContentLayout: MyBalloonContentLayout,
          balloonMaxWidth: maxWidthBalloon,
          hideIconOnBalloonOpen: false,
          balloonOffset: [100, 200],
          balloonPanelMaxMapArea: mobileBoolean ? Infinity : null,
        }
      );
      myGeoObjects[index].events.add("balloonopen", () => {
        myGeoObjects[index].options.set({
          iconImageHref: iconActive,
        });
      });
      myGeoObjects[index].events.add("balloonclose", () => {
        myGeoObjects[index].options.set({
          iconImageHref: icon,
        });
      });
    });
    // @ts-ignore
    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold; font-size:24px;">{{ properties.geoObjects.length }}</div>'
    );
    // @ts-ignore
    var myClusterer = new ymaps.Clusterer({
      // @ts-ignore
      clusterIcons: [
        {
          href: claster,
          size: [50, 50],
          offset: [-25, -25],
        },
      ],
      clusterNumbers: [5],
      clusterIconContentLayout: MyIconContentLayout,
    });
    myClusterer.add(myGeoObjects);
    //@ts-ignore
    myMap.geoObjects.add(myClusterer);
  };
  // @ts-ignore
  ymaps.ready(init);
}
function parseDataObject<T>(object: string): T[] {
  return JSON.parse(object.replace(/\'/g, `"`)) as unknown as T[];
}
