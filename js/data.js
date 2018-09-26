function getUrlParam(param) {
  param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
  var regex = new RegExp("[?&]" + param + "=([^&#]*)");
  var url = decodeURIComponent(window.location.href);
  var match = regex.exec(url);
  return match ? match[1] : "";
}

let map = function(value, minA, maxA, minB, maxB) {
  return ((value - minA) / (maxA - minA)) * (maxB - minB) + minB;
};

let getCountryList = () => {
return datas.reduce((acc, cur)=>{
    if (acc.includes(cur["Country Name"])){
    }else{acc.push(cur["Country Name"])}
      return acc
  },[]);
}
let getCo2PerCountryPerYear = (country, year) => {
  let countryData = datas.filter(aCountry => {
    return aCountry["Country Name"] === country;
  });
  let co2 = 0;
  countryData.forEach(typeEmission => {
    if (typeof typeEmission[year] === "number") {
      co2 = co2 + typeEmission[year];
    }
  });
  return co2;
};

let getCo2TotalPerYear = year => {
  let co2 = 0;
  datas.forEach(country => {
    if (typeof country[year] === "number") {
      co2 = co2 + parseInt(country[year]);
    }
  });
  return co2;
};
