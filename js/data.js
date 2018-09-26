let getCo2PerCountryPerYear = (country, year) => {
  let countryData = datas.filter(aCountry => {
    return aCountry["Country Name"] === country;
  });
  let co2 = 0;
  countryData.forEach(typeEmission => {
    co2 = co2 + typeEmission[year];
  });
  return co2;
};
