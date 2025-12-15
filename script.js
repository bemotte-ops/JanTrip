ymaps.ready(init);
function init() {
  const map = new ymaps.Map("map", {
    center: [50.0, 40.0],
    zoom: 6,
    controls: ['zoomControl', 'fullscreenControl']
  });

  // Точки маршрута (автомобильный)
  const waypoints = [
    [55.7585, 37.5231],  // 🏁 Москва (Шелепихинская наб.)
    [54.8811, 37.1250],  // Таруса
    [47.2357, 39.7015],  // Ростов-на-Дону
    [44.7244, 37.7675],  // Новороссийск
    [44.8769, 38.1036],  // Дивноморское
    [44.4131, 39.0797],  // Джубга
    [44.8800, 37.6078],  // Абрау
    [44.8000, 37.8000],  // Васильевка (источник)
    [47.2357, 39.7015],  // Ростов-на-Дону (возврат)
    [55.7585, 37.5231]   // 🏁 Москва
  ];

  // Мультимаршрут
  const multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: waypoints,
    params: {
      routingMode: "auto"
    }
  }, {
    boundsAutoApply: true,
    wayPointVisible: true,
    routeActiveStrokeWidth: 5,
    routeActiveStrokeColor: "#3a7ca5"
  });
  map.geoObjects.add(multiRoute);

  // Все метки
  const points = [
    { name: "Москва (старт)", lat: 55.7585, lng: 37.5231 },
    { name: "Храм Покрова (Таруса)", lat: 54.8811, lng: 37.1250 },
    { name: "Скала «Чёртов палец»", lat: 54.8820, lng: 37.1260 },
    { name: "Ростов-на-Дону", lat: 47.2357, lng: 39.7015 },
    { name: "Новороссийск", lat: 44.7244, lng: 37.7675 },
    { name: "Дивноморское", lat: 44.8769, lng: 38.1036 },
    { name: "Джубга (дольмены)", lat: 44.4131, lng: 39.0797 },
    { name: "Абрау", lat: 44.8800, lng: 37.6078 },
    { name: "Источник св. Николая", lat: 44.8000, lng: 37.8000 }
  ];

  points.forEach(p => {
    const placemark = new ymaps.Placemark([p.lat, p.lng], {
      balloonContent: `<b>${p.name}</b>`,
      hintContent: p.name
    }, {
      preset: 'islands#violetDotIconWithCaption',
      iconCaption: ''
    });
    map.geoObjects.add(placemark);
  });
}
