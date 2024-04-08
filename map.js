let nycMap;
nycMap = L.map("map");

// create tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(nycMap);

// set view to show all most of the boroughs
nycMap.setView([40.70665868493584, -73.83416712215089], 11);

// custom icon
const bikeIcon = L.icon({
    iconUrl: 'bike.png',
    iconSize: [20, 20], // size of the icon
    popupAnchor:  [-3, -10] // point from which the popup should open relative to the iconAnchor
});

// adding ghost bike coordinates
// add popups to each ghost bike with name, age, photo, and link to Ghost Bike Project
const andreA = L.marker([40.58672688062076, -73.80402531758602], {icon: bikeIcon}).addTo(nycMap);
andreA.bindPopup("<h3>Andre Anderson, Age 14</h3><p><strong>Date of crash:</strong> September 24, 2005</p><p><strong>Neighborhood:</strong> Rockaway</p><p><strong>Intersection:</strong> Shore Front Pkwy & Beach 77 St</p><a href='http://ghostbikes.org/new-york-city/andre-anderson' target='_blank'>Learn more</a>");

const angelQ = L.marker([40.762677373141436, -73.83241924759768], {icon: bikeIcon}).addTo(nycMap);
angelQ.bindPopup("<h3>Angel Quizphi, Age 24</h3><p><strong>Date of crash:</strong> October 30, 2005</p><p><strong>Neighborhood:</strong> Flushing</p><p><strong>Intersection:</strong> Northern Blvd between Prince St & Main St</p><a href='http://ghostbikes.org/new-york-city/angel-quizphi' target='_blank'>Learn more</a>");

const frankCS = L.marker([40.69271689817377, -73.77547908465854], {icon: bikeIcon}).addTo(nycMap);
frankCS.bindPopup("<h3>Frank C. Simpson, Age 60</h3><p><strong>Date of crash:</strong> November 9, 2006</p><p><strong>Neighborhood:</strong> Addisleigh Park</p><p><strong>Intersection:</strong> Linden Blvd & 175 St</p><a href='http://ghostbikes.org/new-york-city/frank-c.-simpson' target='_blank'>Learn more</a>");

const carolinaH = L.marker([40.73688313216144, -73.86580024491278], {icon: bikeIcon}).addTo(nycMap);
carolinaH.bindPopup("<h3>Carolina Hernandez, Age 13</h3><p><strong>Date of crash:</strong> August 16, 2007</p><p><strong>Neighborhood:</strong> Corona</p><p><strong>Intersection:</strong> 57 Ave & Junction Blvd</p><a href='http://ghostbikes.org/new-york-city/carolina-hernandez' target='_blank'>Learn more</a>");

const elijahAW = L.marker([40.68575779229157, -73.7501828737498], {icon: bikeIcon}).addTo(nycMap);
elijahAW.bindPopup("<h3>Elijah Armand Wrancher, Age 12</h3><p><strong>Date of crash:</strong> August 28, 2007</p><p><strong>Neighborhood:</strong> Laurelton</p><p><strong>Intersection:</strong> Springfield Blvd & 130 Ave</p><a href='http://ghostbikes.org/new-york-city/elijah-armand-wrancher' target='_blank'>Learn more</a>");

const habianR = L.marker([40.74196675654468, -73.82526357374799], {icon: bikeIcon}).addTo(nycMap);
habianR.bindPopup("<h3>Habian Rodriguez, Age 31</h3><p><strong>Date of crash:</strong> September 1, 2007</p><p><strong>Neighborhood:</strong> Flushing</p><p><strong>Intersection:</strong> Main St & Horace Harding Expy</p><a href='http://ghostbikes.org/new-york-city/habian-rodriguez' target='_blank'>Learn more</a>");

const asifR = L.marker([40.73517088272295, -73.87552357374818], {icon: bikeIcon}).addTo(nycMap);
asifR.bindPopup("<h3>Asif Rahman, Age 22</h3><p><strong>Date of crash:</strong> February 28, 2008</p><p><strong>Neighborhood:</strong> Elmhurst</p><p><strong>Intersection:</strong> Queens Blvd & 55 Rd</p><a href='http://ghostbikes.org/new-york-city/asif-rahman' target='_blank'>Learn more</a>");

const arturoF = L.marker([40.77622254503105, -73.915251560253], {icon: bikeIcon}).addTo(nycMap);
arturoF.bindPopup("<h3>Arturo Flores, Age 35</h3><p><strong>Date of crash:</strong> October 21, 2008</p><p><strong>Neighborhood:</strong> Astoria</p><p><strong>Intersection:</strong> 23 Ave & 27 St</p><a href='http://ghostbikes.org/new-york-city/arturo-flores' target='_blank'>Learn more</a>");

const stephenH = L.marker([40.700189458741804, -73.83090064491401], {icon: bikeIcon}).addTo(nycMap);
stephenH.bindPopup("<h3>Stephen Hodnett, Age 40</h3><p><strong>Date of crash:</strong> May 6, 2009</p><p><strong>Neighborhood:</strong> Richmond Hill</p><p><strong>Intersection:</strong> Jamaica Ave & Lefferts Blvd</p><a href='http://ghostbikes.org/new-york-city/stephen-hodnett' target='_blank'>Learn more</a>");

const pabloP = L.marker([40.76159121817533, -73.93536584491201], {icon: bikeIcon}).addTo(nycMap);
pabloP.bindPopup("<h3>Pablo Pasarán, Age 26</h3><p><strong>Date of crash:</strong> August 8, 2009</p><p><strong>Neighborhood:</strong> Astoria</p><p><strong>Intersection:</strong> 35 Ave & 21 St</p><a href='http://ghostbikes.org/new-york-city/pablo-pasar%C3%A1n' target='_blank'>Learn more</a>");

const jamesL = L.marker([40.74047565862054, -73.8958615314187], {icon: bikeIcon}).addTo(nycMap);
jamesL.bindPopup("<h3>James Langergaard, Age 38</h3><p><strong>Date of crash:</strong> August 14, 2009</p><p><strong>Neighborhood:</strong> Woodside</p><p><strong>Intersection:</strong> Queens Blvd & 69 St</p><a href='http://ghostbikes.org/new-york-city/james-langergaard' target='_blank'>Learn more</a>");

const andrzeiW = L.marker([40.58774857008132, -73.81899483395466], {icon: bikeIcon}).addTo(nycMap);
andrzeiW.bindPopup("<h3>Andrzei Wiesniuk, Age 46</h3><p><strong>Date of crash:</strong> August 2, 2011</p><p><strong>Neighborhood:</strong> Rockaway</p><p><strong>Intersection:</strong> Cross Bay Pkwy & Beach Channel Dr</p><a href='http://ghostbikes.org/new-york-city/andrzei-wiesniuk' target='_blank'>Learn more</a>");

const unnamedA = L.marker([40.737292048956384, -73.93082477374816], {icon: bikeIcon}).addTo(nycMap);
unnamedA.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> April 4, 2012</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> Borden Ave & Greenpoint Ave</p><a href='http://ghostbikes.org/new-york-city/unnamed-5' target='_blank'>Learn more</a>");

const mireyaG = L.marker([40.755423776374265, -73.84337600258289], {icon: bikeIcon}).addTo(nycMap);
mireyaG.bindPopup("<h3>Mireya Gomez, Age 50</h3><p><strong>Date of crash:</strong> May 11, 2012</p><p><strong>Neighborhood:</strong> Corona</p><p><strong>Intersection:</strong> Roosevelt Ave & 126 St</p><a href='http://ghostbikes.org/new-york-city/mireya-gomez' target='_blank'>Learn more</a>");

const tchakaC = L.marker([40.72653980936065, -73.79000200014217], {icon: bikeIcon}).addTo(nycMap);
tchakaC.bindPopup("<h3>Tchaka Cooke, Age 39</h3><p><strong>Date of crash:</strong> June 16, 2012</p><p><strong>Neighborhood:</strong> Fresh Meadows</p><p><strong>Intersection:</strong> Union Turnpike & 178 St</p><a href='http://ghostbikes.org/new-york-city/tchaka-cooke' target='_blank'>Learn more</a>");

const rogerH = L.marker([40.738954609806605, -73.92666702604866], {icon: bikeIcon}).addTo(nycMap);
rogerH.bindPopup("<h3>Roger Hernandez, Age 37</h3><p><strong>Date of crash:</strong> July 18, 2012</p><p><strong>Neighborhood:</strong> Sunnyside</p><p><strong>Intersection:</strong> Greenpoint Ave & 39 St</p><a href='http://ghostbikes.org/new-york-city/roger-hernandez' target='_blank'>Learn more</a>");

const alexanderM = L.marker([40.71201575671654, -73.82559843816664], {icon: bikeIcon}).addTo(nycMap);
alexanderM.bindPopup("<h3>Alexander Martinez, Age 37</h3><p><strong>Date of crash:</strong> September 25, 2012</p><p><strong>Neighborhood:</strong> Kew Gardens</p><p><strong>Intersection:</strong> Queens Blvd & Hoover Ave</p><a href='http://ghostbikes.org/new-york-city/alexander-martinez' target='_blank'>Learn more</a>");

const ramonR = L.marker([40.66807667326917, -73.82781823881123], {icon: bikeIcon}).addTo(nycMap);
ramonR.bindPopup("<h3>Ramon Russel, Age 37</h3><p><strong>Date of crash:</strong> December 7, 2012</p><p><strong>Neighborhood:</strong> South Ozone Park</p><p><strong>Intersection:</strong> 114 St & 150 Ave, Acqueduct Racetrack parking lot</p><a href='http://ghostbikes.org/new-york-city/ramon-russel' target='_blank'>Learn more</a>");

const garyZ = L.marker([40.65647090300787, -73.84782281607995], {icon: bikeIcon}).addTo(nycMap);
garyZ.bindPopup("<h3>Gary Zammett</h3><p><strong>Date of crash:</strong> August 23, 2013</p><p><strong>Neighborhood:</strong> Howard Beach</p><p><strong>Intersection:</strong> 160 Ave & 84 St</p><a href='http://ghostbikes.org/new-york-city/gary-zammett' target='_blank'>Learn more</a>");

const pedroL = L.marker([40.72740611285492, -73.9073843160777], {icon: bikeIcon}).addTo(nycMap);
pedroL.bindPopup("<h3>Pedro Lopez, Age 54</h3><p><strong>Date of crash:</strong> November 26, 2013</p><p><strong>Neighborhood:</strong> Maspeth</p><p><strong>Intersection:</strong> Maurice Ave & Borden Ave</p><a href='http://ghostbikes.org/new-york-city/pedro-lopez' target='_blank'>Learn more</a>");

const unnamedB = L.marker([40.6821470372058, -73.84976833142052], {icon: bikeIcon}).addTo(nycMap);
unnamedB.bindPopup("<h3>Unnamed, Age 40</h3><p><strong>Date of crash:</strong> May 11, 2014</p><p><strong>Neighborhood:</strong> Ozone Park</p><p><strong>Intersection:</strong> Rockaway Blvd & 90 St</p><a href='http://ghostbikes.org/new-york-city/unnamed-11' target='_blank'>Learn more</a>");

const williamF = L.marker([40.68829492749594, -73.735673916079], {icon: bikeIcon}).addTo(nycMap);
williamF.bindPopup("<h3>William Faison, Age 53</h3><p><strong>Date of crash:</strong> May 23, 2014</p><p><strong>Neighborhood:</strong> Cambria Heights</p><p><strong>Intersection:</strong> 120 Ave & 228 St</p><a href='http://ghostbikes.org/new-york-city/william-faison' target='_blank'>Learn more</a>");

const wayneW = L.marker([40.666589053079456, -73.75174971607963], {icon: bikeIcon}).addTo(nycMap);
wayneW.bindPopup("<h3>Wayne White, Age 50</h3><p><strong>Date of crash:</strong> June 7, 2014</p><p><strong>Neighborhood:</strong> Laurelton</p><p><strong>Intersection:</strong> N Conduit Ave & 225 St</p><a href='http://ghostbikes.org/new-york-city/wayne-white' target='_blank'>Learn more</a>");

const unnamedC = L.marker([40.7538511230643, -73.8481961302601], {icon: bikeIcon}).addTo(nycMap);
unnamedC.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> June 10, 2014</p><p><strong>Neighborhood:</strong> Corona</p><p><strong>Intersection:</strong> Roosevelt Ave between 126 St & Shea Rd</p><a href='http://ghostbikes.org/new-york-city/unnamed-10' target='_blank'>Learn more</a>");

const unnamedD = L.marker([40.667125799842886, -73.79127624491504], {icon: bikeIcon}).addTo(nycMap);
unnamedD.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> July 28, 2014</p><p><strong>Neighborhood:</strong> South Jamaica</p><p><strong>Intersection:</strong> N Conduit Ave & 148 St</p><a href='http://ghostbikes.org/new-york-city/unnamed-13' target='_blank'>Learn more</a>");

const unnamedE = L.marker([40.76387600587387, -73.82302017374728], {icon: bikeIcon}).addTo(nycMap);
unnamedE.bindPopup("<h3>Unnamed, Age 60</h3><p><strong>Date of crash:</strong> August 13, 2014</p><p><strong>Neighborhood:</strong> Flushing</p><p><strong>Intersection:</strong> Parsons Blvd & 37 Ave</p><a href='http://ghostbikes.org/new-york-city/unnamed-14' target='_blank'>Learn more</a>");

const unnamedF = L.marker([40.725717263911434, -73.83835657374844], {icon: bikeIcon}).addTo(nycMap);
unnamedF.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> August 29, 2014</p><p><strong>Neighborhood:</strong> Forest Hills</p><p><strong>Intersection:</strong> Jewel Ave & Grand Central Pkwy</p><a href='http://ghostbikes.org/new-york-city/unnamed-18' target='_blank'>Learn more</a>");

const hoytJ = L.marker([40.7566829189993, -73.94722143141817], {icon: bikeIcon}).addTo(nycMap);
hoytJ.bindPopup("<h3>Hoyt Jacobs, Age 36</h3><p><strong>Date of crash:</strong> January 17, 2015</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> Vernon Blvd & 41st Ave</p><a href='http://ghostbikes.org/new-york-city/hoyt-jacobs' target='_blank'>Learn more</a>");

const mohammedA = L.marker([40.67506545535772, -73.80739951607939], {icon: bikeIcon}).addTo(nycMap);
mohammedA.bindPopup("<h3>Mohammed Ali, Age 88</h3><p><strong>Date of crash:</strong> April 16, 2015</p><p><strong>Neighborhood:</strong> South Ozone Park</p><p><strong>Intersection:</strong> 131 St & Rockaway Blvd</p><a href='http://ghostbikes.org/new-york-city/mohammed-ali' target='_blank'>Learn more</a>");

const kevinL = L.marker([40.75009389070812, -73.93781663141841], {icon: bikeIcon}).addTo(nycMap);
kevinL.bindPopup("<h3>Kevin Lopez, Age 28</h3><p><strong>Date of crash:</strong> July 28, 2015</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> Queens Plaza North & 29 St</p><a href='http://ghostbikes.org/new-york-city/kevin-lopez' target='_blank'>Learn more</a>");

const unnamedG = L.marker([40.60658852137934, -73.75177888909376], {icon: bikeIcon}).addTo(nycMap);
unnamedG.bindPopup("<h3>Unnamed, Age 61</h3><p><strong>Date of crash:</strong> August 20, 2015</p><p><strong>Neighborhood:</strong> Far Rockaway</p><p><strong>Intersection:</strong> Bayport Pl & Augustina Ave</p><a href='http://ghostbikes.org/new-york-city/unnamed-24' target='_blank'>Learn more</a>");

const anaR = L.marker([40.726305684231946, -73.92032085301416], {icon: bikeIcon}).addTo(nycMap);
anaR.bindPopup("<h3>Ana Rodriguez, Age 34</h3><p><strong>Date of crash:</strong> October 14, 2015</p><p><strong>Neighborhood:</strong> Maspeth</p><p><strong>Intersection:</strong> 56 Rd & 48 St</p><a href='http://ghostbikes.org/new-york-city/ana-rodriguez' target='_blank'>Learn more</a>");

const antonioF = L.marker([40.74416409223475, -73.88502094491248], {icon: bikeIcon}).addTo(nycMap);
antonioF.bindPopup("<h3>Antonio Flores, Age 59</h3><p><strong>Date of crash:</strong> July 7, 2016</p><p><strong>Neighborhood:</strong> Elmhurst</p><p><strong>Intersection:</strong> Broadway & Baxter Ave</p><a href='http://ghostbikes.org/new-york-city/antonio-flores' target='_blank'>Learn more</a>");

const michaelS = L.marker([40.762220458093346, -73.75851213141802], {icon: bikeIcon}).addTo(nycMap);
michaelS.bindPopup("<h3>Michael Schenkman, Age 78</h3><p><strong>Date of crash:</strong> August 24, 2016</p><p><strong>Neighborhood:</strong> Bayside</p><p><strong>Intersection:</strong> 223 St & Northern Blvd</p><a href='http://ghostbikes.org/new-york-city/michael-schenkman' target='_blank'>Learn more</a>");

const unnamedH = L.marker([40.76003182445667, -73.85872510506886], {icon: bikeIcon}).addTo(nycMap);
unnamedH.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> September 5, 2016</p><p><strong>Neighborhood:</strong> East Elmhurst</p><p><strong>Intersection:</strong> Grand Central Pkwy Access Rd near 111 St</p><a href='http://ghostbikes.org/new-york-city/unnamed-22' target='_blank'>Learn more</a>");

const unnamedI = L.marker([40.75207872317349, -73.82425024491234], {icon: bikeIcon}).addTo(nycMap);
unnamedI.bindPopup("<h3>Unnamed, Age 76</h3><p><strong>Date of crash:</strong> March 3, 2017</p><p><strong>Neighborhood:</strong> Flushing</p><p><strong>Intersection:</strong> Colden St & Elder Ave</p><a href='http://ghostbikes.org/new-york-city/unnamed-25' target='_blank'>Learn more</a>");

const gelacioRR = L.marker([40.74578170390995, -73.92602568249532], {icon: bikeIcon}).addTo(nycMap);
gelacioRR.bindPopup("<h3>Gelacio Reyes Rosendo, Age 32</h3><p><strong>Date of crash:</strong> April 1, 2017</p><p><strong>Neighborhood:</strong> Sunnyside</p><p><strong>Intersection:</strong> 43 Ave & 39 St</p><a href='http://ghostbikes.org/new-york-city/gelacio-reyes-rosendo' target='_blank'>Learn more</a>");

const yautegF = L.marker([40.71971474086645, -73.85911827374865], {icon: bikeIcon}).addTo(nycMap);
yautegF.bindPopup("<h3>Yau-Teg Fung, Age 84</h3><p><strong>Date of crash:</strong> November 17, 2017</p><p><strong>Neighborhood:</strong> Rego Park</p><p><strong>Intersection:</strong> Alderton St & Fleet St</p><a href='http://ghostbikes.org/new-york-city/yau-teg-fung' target='_blank'>Learn more</a>");

const hugoR = L.marker([40.731403559294804, -73.91913776055202], {icon: bikeIcon}).addTo(nycMap);
hugoR.bindPopup("<h3>Hugo Ramirez, Age 23</h3><p><strong>Date of crash:</strong> December 18, 2017</p><p><strong>Neighborhood:</strong> Maspeth</p><p><strong>Intersection:</strong> 48 St & Long Island Expwy entrance</p><a href='http://ghostbikes.org/new-york-city/hugo-ramirez' target='_blank'>Learn more</a>");

const stevenM = L.marker([40.76869648530948, -73.88615593816475], {icon: bikeIcon}).addTo(nycMap);
stevenM.bindPopup("<h3>Steven Morales, Age 36</h3><p><strong>Date of crash:</strong> February 19, 2018</p><p><strong>Neighborhood:</strong> East Elmhurst</p><p><strong>Intersection:</strong> Marine Terminal Rd & Runway Dr</p><a href='http://ghostbikes.org/new-york-city/steven-morales' target='_blank'>Learn more</a>");

const aaronP = L.marker([40.74617322953174, -73.94808993141855], {icon: bikeIcon}).addTo(nycMap);
aaronP.bindPopup("<h3>Aaron Padwee, Age 45</h3><p><strong>Date of crash:</strong> May 29, 2018</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> 21 St & 46 Ave</p><a href='http://ghostbikes.org/new-york-city/aaron-padwee' target='_blank'>Learn more</a>");

const xelleaS = L.marker([40.77329810318842, -73.9110302872409], {icon: bikeIcon}).addTo(nycMap);
xelleaS.bindPopup("<h3>Xellea Samonte, Age 22</h3><p><strong>Date of crash:</strong> June 23, 2018</p><p><strong>Neighborhood:</strong> Astoria</p><p><strong>Intersection:</strong> 35 St & 23 Ave</p><a href='http://ghostbikes.org/new-york-city/xellea-samonte' target='_blank'>Learn more</a>");

const eucarioX = L.marker([40.702578919246186, -73.90696753141994], {icon: bikeIcon}).addTo(nycMap);
eucarioX.bindPopup("<h3>Eucario Xelo, Age 65</h3><p><strong>Date of crash:</strong> August 28, 2018</p><p><strong>Neighborhood:</strong> Ridgewod</p><p><strong>Intersection:</strong> Seneca Ave & Woodbine St</p><a href='https://gothamist.com/news/police-search-for-atv-rider-who-killed-queens-cyclist' target='_blank'>Learn more</a>");

const robertS = L.marker([40.74237484020938, -73.95890580258332], {icon: bikeIcon}).addTo(nycMap);
robertS.bindPopup("<h3>Robert Spencer, Age 53</h3><p><strong>Date of crash:</strong> March 20, 2019</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> Borden Ave & 2 St</p><a href='http://ghostbikes.org/new-york-city/robert-spencer' target='_blank'>Learn more</a>");

const marioV = L.marker([40.74109061491765, -73.95229113141873], {icon: bikeIcon}).addTo(nycMap);
marioV.bindPopup("<h3>Mario Valenzuela, Age 14</h3><p><strong>Date of crash:</strong> September 21, 2019</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> Borden Ave & 11 St</p><a href='http://ghostbikes.org/new-york-city/mario-valenzuela' target='_blank'>Learn more</a>");

const adaM = L.marker([40.58688721975388, -73.81716013142366], {icon: bikeIcon}).addTo(nycMap);
adaM.bindPopup("<h3>Ada Martinez, Age 66</h3><p><strong>Date of crash:</strong> September 27, 2019</p><p><strong>Neighborhood:</strong> Rockaway</p><p><strong>Intersection:</strong> Rockaway Fwy & Beach 94 St</p><a href='http://ghostbikes.org/new-york-city/ada-martinez' target='_blank'>Learn more</a>");

const bogdanD = L.marker([40.61388398978437, -73.82051740258746], {icon: bikeIcon}).addTo(nycMap);
bogdanD.bindPopup("<h3>Bogdan Darmetko</h3><p><strong>Date of crash:</strong> October 13, 2019</p><p><strong>Neighborhood:</strong> Broad Channel</p><p><strong>Intersection:</strong> Cross Bay Blvd & E 3 St</p><a href='http://ghostbikes.org/new-york-city/bogdan-darmetko' target='_blank'>Learn more</a>");

const salvadorCR = L.marker([40.75701976642659, -73.9080222302619], {icon: bikeIcon}).addTo(nycMap);
salvadorCR.bindPopup("<h3>Salvador Chairez-Rodriguez, Age 50</h3><p><strong>Date of crash:</strong> September 9, 2020</p><p><strong>Neighborhood:</strong> Woodside</p><p><strong>Intersection:</strong> 31 Ave & 51 St</p><a href='http://ghostbikes.org/new-york-city/salvador-chairez-rodriguez' target='_blank'>Learn more</a>");

const unnamedJ = L.marker([40.66638123664236, -73.83476450566219], {icon: bikeIcon}).addTo(nycMap);
unnamedJ.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> October 6, 2021</p><p><strong>Neighborhood:</strong> Ozone Park</p><p><strong>Intersection:</strong> Belt Pwky near Exit 18/Aqueduct Racetrack</p><a href='http://ghostbikes.org/new-york-city/unnamed-28' target='_blank'>Learn more</a>");

const thomasP = L.marker([40.75165685945268, -73.93169436470411], {icon: bikeIcon}).addTo(nycMap);
thomasP.bindPopup("<h3>Thomas Panto, Age 32</h3><p><strong>Date of crash:</strong> October 11, 2021</p><p><strong>Neighborhood:</strong> Long Island City</p><p><strong>Intersection:</strong> Honeywell St & Northern Blvd</p><a href='http://ghostbikes.org/new-york-city/thomas-panto' target='_blank'>Learn more</a>");

const qiangT = L.marker([40.74123481452996, -73.91818376025408], {icon: bikeIcon}).addTo(nycMap);
qiangT.bindPopup("<h3>Qiang Tu, Age 58</h3><p><strong>Date of crash:</strong> November 3, 2021</p><p><strong>Neighborhood:</strong> Woodside</p><p><strong>Intersection:</strong> 47 Ave & 47 St</p><a href='http://ghostbikes.org/new-york-city/quang-tu' target='_blank'>Learn more</a>");

const linwenC = L.marker([40.747601308620986, -73.87138329968481], {icon: bikeIcon}).addTo(nycMap);
linwenC.bindPopup("<h3>Lin-wen Chiang, Age 77</h3><p><strong>Date of crash:</strong> February 24, 2022</p><p><strong>Neighborhood:</strong> Elmhurst</p><p><strong>Intersection:</strong> 40 Dr between 94 & 95 Streets</p><a href='http://ghostbikes.org/new-york-city/lin-wen-chiang' target='_blank'>Learn more</a>");

const unnamedK = L.marker([40.68210521455362, -73.72875602321253], {icon: bikeIcon}).addTo(nycMap);
unnamedK.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> May 28, 2022</p><p><strong>Neighborhood:</strong> Laurelton</p><p><strong>Intersection:</strong> 128 Ave & 238 St</p><a href='http://ghostbikes.org/new-york-city/unnamed-29' target='_blank'>Learn more</a>");

const unnamedL = L.marker([40.69195059943371, -73.81097263292497], {icon: bikeIcon}).addTo(nycMap);
unnamedL.bindPopup("<h3>Unnamed, Age 53</h3><p><strong>Date of crash:</strong> November 23, 2022</p><p><strong>Neighborhood:</strong> South Richmond Hill</p><p><strong>Intersection:</strong> Liberty Ave & Van Wyck Expwy</p><a href='https://nypost.com/2022/11/25/cyclist-killed-in-nyc-after-being-dragged-by-tractor-trailer/' target='_blank'>Learn more</a>");

const tamaraCK = L.marker([40.77316119073674, -73.91638702301104], {icon: bikeIcon}).addTo(nycMap);
tamaraCK.bindPopup("<h3>Tamara Chuchi Kao, Age 62</h3><p><strong>Date of crash:</strong> January 5, 2023</p><p><strong>Neighborhood:</strong> Astoria</p><p><strong>Intersection:</strong> 24 Ave & 29 St</p><a href='http://ghostbikes.org/new-york-city/tamara-chuchi-kao' target='_blank'>Learn more</a>");

const goubinL = L.marker([40.77142912538201, -73.84381667524926], {icon: bikeIcon}).addTo(nycMap);
goubinL.bindPopup("<h3>Goubin Liu, Age 62</h3><p><strong>Date of crash:</strong> January 18, 2023</p><p><strong>Neighborhood:</strong> Flushing</p><p><strong>Intersection:</strong> College Point Blvd & 30 Ave</p><a href='http://ghostbikes.org/new-york-city/goubin-liu' target='_blank'>Learn more</a>");

const jaydanM = L.marker([40.782469295676115, -73.91461133292005], {icon: bikeIcon}).addTo(nycMap);
jaydanM.bindPopup("<h3>Jaydan McLaurin, Age 14</h3><p><strong>Date of crash:</strong> April 10, 2023</p><p><strong>Neighborhood:</strong> Astoria</p><p><strong>Intersection:</strong> 21 St & 21 Ave</p><a href='https://nyc.streetsblog.org/2023/05/03/cycling-advocate-killed-by-trucker-on-dangerous-brooklyn-street-last-words-from-mother-be-safe/' target='_blank'>Learn more</a>");

const azizbekS = L.marker([40.714084147373704, -73.80210960408806], {icon: bikeIcon}).addTo(nycMap);
azizbekS.bindPopup("<h3>Azizbek Soliev, Age 20</h3><p><strong>Date of crash:</strong> July 14, 2023</p><p><strong>Neighborhood:</strong> Jamaica</p><p><strong>Intersection:</strong> 164 St & Chapin Pkwy</p><a href='https://www.nydailynews.com/new-york/nyc-crime/ny-ebike-rider-killed-in-queens-crash-20230715-5tvm4j4w6je6bi4xeaazglqlpi-story.html' target='_blank'>Learn more</a>");

const unnamedM = L.marker([40.67262142821278, -73.84119513292605], {icon: bikeIcon}).addTo(nycMap);
unnamedM.bindPopup("<h3>Unnamed</h3><p><strong>Date of crash:</strong> September 20, 2023</p><p><strong>Neighborhood:</strong> Ozone Park</p><p><strong>Intersection:</strong> Pitkin Ave & 95 St</p><a href='https://pix11.com/news/local-news/suv-wanted-after-bicyclist-critically-injured-in-queens-hit-and-run-nypd/' target='_blank'>Learn more</a>");

const unnamedN = L.marker([40.7647734912768, -73.82344764641392], {icon: bikeIcon}).addTo(nycMap);
unnamedN.bindPopup("<h3>Unnamed, Age 82</h3><p><strong>Date of crash:</strong> December 28, 2023</p><p><strong>Neighborhood:</strong> Flushing</p><p><strong>Intersection:</strong> Northern Blvd & Parsons Blvd</p><a href='https://nyc.streetsblog.org/2023/12/28/another-cyclist-killed-in-the-deadliest-year-on-record' target='_blank'>Learn more</a>");

const jorgeG = L.marker([40.72866965787714, -73.90576277525163], {icon: bikeIcon}).addTo(nycMap);
jorgeG.bindPopup("<h3>Jorge Galicia, Age 47</h3><p><strong>Date of crash:</strong> February 22, 2024</p><p><strong>Neighborhood:</strong> Maspeth</p><p><strong>Intersection:</strong> Maurice Ave & 54 Ave</p><a href='https://qns.com/2024/02/corona-cyclist-killed-after-slamming-into-truck-on-northside-of-l-i-e-in-maspeth-nypd/' target='_blank'>Learn more</a>");

const unnamedO = L.marker([40.766221715986525, -73.91894178465724], {icon: bikeIcon}).addTo(nycMap);
unnamedO.bindPopup("<h3>Unnamed</h3><p><strong>Neighborhood:</strong> Astoria</p><p><strong>Intersection:</strong> 34 St & 34 Ave</p>");
