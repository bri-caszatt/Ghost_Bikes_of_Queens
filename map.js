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
andreA.bindPopup("<h3>Andre Anderson, Age 14</h3><p><strong>Date of crash:</strong> September 24, 2005</p><p><strong>Neighborhood:</strong> Rockaway</p><a href='http://ghostbikes.org/new-york-city/andre-anderson'>Learn more</a>");

const angelQ = L.marker([40.762677373141436, -73.83241924759768], {icon: bikeIcon}).addTo(nycMap);
angelQ.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const frankCS = L.marker([40.69271689817377, -73.77547908465854], {icon: bikeIcon}).addTo(nycMap);
frankCS.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const carolinaH = L.marker([40.73688313216144, -73.86580024491278], {icon: bikeIcon}).addTo(nycMap);
carolinaH.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const elijahAW = L.marker([40.68575779229157, -73.7501828737498], {icon: bikeIcon}).addTo(nycMap);
elijahAW.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const habianR = L.marker([40.74196675654468, -73.82526357374799], {icon: bikeIcon}).addTo(nycMap);
habianR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const asifR = L.marker([40.73517088272295, -73.87552357374818], {icon: bikeIcon}).addTo(nycMap);
asifR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const arturoF = L.marker([40.77622254503105, -73.915251560253], {icon: bikeIcon}).addTo(nycMap);
arturoF.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const stephenH = L.marker([40.700189458741804, -73.83090064491401], {icon: bikeIcon}).addTo(nycMap);
stephenH.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const pabloP = L.marker([40.76159121817533, -73.93536584491201], {icon: bikeIcon}).addTo(nycMap);
pabloP.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const jamesL = L.marker([40.74047565862054, -73.8958615314187], {icon: bikeIcon}).addTo(nycMap);
jamesL.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const andrzeiW = L.marker([40.58774857008132, -73.81899483395466], {icon: bikeIcon}).addTo(nycMap);
andrzeiW.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedA = L.marker([40.737292048956384, -73.93082477374816], {icon: bikeIcon}).addTo(nycMap);
unnamedA.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const mireyaG = L.marker([40.755423776374265, -73.84337600258289], {icon: bikeIcon}).addTo(nycMap);
mireyaG.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const tchakaC = L.marker([40.72653980936065, -73.79000200014217], {icon: bikeIcon}).addTo(nycMap);
tchakaC.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const rogerH = L.marker([40.738954609806605, -73.92666702604866], {icon: bikeIcon}).addTo(nycMap);
rogerH.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const alexanderM = L.marker([40.71201575671654, -73.82559843816664], {icon: bikeIcon}).addTo(nycMap);
alexanderM.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const ramonR = L.marker([40.66807667326917, -73.82781823881123], {icon: bikeIcon}).addTo(nycMap);
ramonR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const garyZ = L.marker([40.65647090300787, -73.84782281607995], {icon: bikeIcon}).addTo(nycMap);
garyZ.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const pedroL = L.marker([40.72740611285492, -73.9073843160777], {icon: bikeIcon}).addTo(nycMap);
pedroL.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedB = L.marker([40.6821470372058, -73.84976833142052], {icon: bikeIcon}).addTo(nycMap);
unnamedB.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const williamF = L.marker([40.68829492749594, -73.735673916079], {icon: bikeIcon}).addTo(nycMap);
williamF.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const wayneW = L.marker([40.666589053079456, -73.75174971607963], {icon: bikeIcon}).addTo(nycMap);
wayneW.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedC = L.marker([40.7538511230643, -73.8481961302601], {icon: bikeIcon}).addTo(nycMap);
unnamedC.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedD = L.marker([40.667125799842886, -73.79127624491504], {icon: bikeIcon}).addTo(nycMap);
unnamedD.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedE = L.marker([40.76387600587387, -73.82302017374728], {icon: bikeIcon}).addTo(nycMap);
unnamedE.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedF = L.marker([40.725717263911434, -73.83835657374844], {icon: bikeIcon}).addTo(nycMap);
unnamedF.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const hoytJ = L.marker([40.7566829189993, -73.94722143141817], {icon: bikeIcon}).addTo(nycMap);
hoytJ.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const mohammedA = L.marker([40.67506545535772, -73.80739951607939], {icon: bikeIcon}).addTo(nycMap);
mohammedA.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const kevinL = L.marker([40.75009389070812, -73.93781663141841], {icon: bikeIcon}).addTo(nycMap);
kevinL.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedG = L.marker([40.60658852137934, -73.75177888909376], {icon: bikeIcon}).addTo(nycMap);
unnamedG.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const anaR = L.marker([40.726305684231946, -73.92032085301416], {icon: bikeIcon}).addTo(nycMap);
anaR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const antonioR = L.marker([40.74416409223475, -73.88502094491248], {icon: bikeIcon}).addTo(nycMap);
antonioR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const michaelS = L.marker([40.762220458093346, -73.75851213141802], {icon: bikeIcon}).addTo(nycMap);
michaelS.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedH = L.marker([40.76003182445667, -73.85872510506886], {icon: bikeIcon}).addTo(nycMap);
unnamedH.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedI = L.marker([40.75207872317349, -73.82425024491234], {icon: bikeIcon}).addTo(nycMap);
unnamedI.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const gelacioRR = L.marker([40.74578170390995, -73.92602568249532], {icon: bikeIcon}).addTo(nycMap);
gelacioRR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const yautegF = L.marker([40.71971474086645, -73.85911827374865], {icon: bikeIcon}).addTo(nycMap);
yautegF.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const hugoR = L.marker([40.731403559294804, -73.91913776055202], {icon: bikeIcon}).addTo(nycMap);
hugoR.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const stevenM = L.marker([40.76869648530948, -73.88615593816475], {icon: bikeIcon}).addTo(nycMap);
stevenM.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const aaronP = L.marker([40.74617322953174, -73.94808993141855], {icon: bikeIcon}).addTo(nycMap);
aaronP.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const xelleaS = L.marker([40.77329810318842, -73.9110302872409], {icon: bikeIcon}).addTo(nycMap);
xelleaS.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const eucarioX = L.marker([40.702578919246186, -73.90696753141994], {icon: bikeIcon}).addTo(nycMap);
eucarioX.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const robertS = L.marker([40.74237484020938, -73.95890580258332], {icon: bikeIcon}).addTo(nycMap);
robertS.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const marioV = L.marker([40.74109061491765, -73.95229113141873], {icon: bikeIcon}).addTo(nycMap);
marioV.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const adaM = L.marker([40.58688721975388, -73.81716013142366], {icon: bikeIcon}).addTo(nycMap);
adaM.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const bogdanD = L.marker([40.61388398978437, -73.82051740258746], {icon: bikeIcon}).addTo(nycMap);
bogdanD.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const salvadorCR = L.marker([40.75701976642659, -73.9080222302619], {icon: bikeIcon}).addTo(nycMap);
salvadorCR.bindPopup("<h3>Salvador Chairez-Rodriguez, Age 50</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedJ = L.marker([40.66638123664236, -73.83476450566219], {icon: bikeIcon}).addTo(nycMap);
unnamedJ.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const thomasP = L.marker([40.75165685945268, -73.93169436470411], {icon: bikeIcon}).addTo(nycMap);
thomasP.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const qiangT = L.marker([40.74123481452996, -73.91818376025408], {icon: bikeIcon}).addTo(nycMap);
qiangT.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const linwenC = L.marker([40.747601308620986, -73.87138329968481], {icon: bikeIcon}).addTo(nycMap);
linwenC.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedK = L.marker([40.68210521455362, -73.72875602321253], {icon: bikeIcon}).addTo(nycMap);
unnamedK.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedL = L.marker([40.69195059943371, -73.81097263292497], {icon: bikeIcon}).addTo(nycMap);
unnamedL.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const tamaraCK = L.marker([40.77316119073674, -73.91638702301104], {icon: bikeIcon}).addTo(nycMap);
tamaraCK.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const goubinL = L.marker([40.77142912538201, -73.84381667524926], {icon: bikeIcon}).addTo(nycMap);
goubinL.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const jaydanM = L.marker([40.782469295676115, -73.91461133292005], {icon: bikeIcon}).addTo(nycMap);
jaydanM.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const azizbekS = L.marker([40.714084147373704, -73.80210960408806], {icon: bikeIcon}).addTo(nycMap);
azizbekS.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedM = L.marker([40.67262142821278, -73.84119513292605], {icon: bikeIcon}).addTo(nycMap);
unnamedM.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const unnamedN = L.marker([40.7647734912768, -73.82344764641392], {icon: bikeIcon}).addTo(nycMap);
unnamedN.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

const jorgeG = L.marker([40.72866965787714, -73.90576277525163], {icon: bikeIcon}).addTo(nycMap);
jorgeG.bindPopup("<h3>Name, Age X</h3><p><strong>Date of crash:</strong> Month X, 2XXX</p><p><strong>Neighborhood:</strong> X</p><a href=''>Learn more</a>");

//add title
L.Control.textbox = L.Control.extend({
    onAdd: function(map) {
        
    let titleText = L.DomUtil.create('div');
    titleText.id = "info_text";
    titleText.innerHTML = "<strong>Ghost Bikes of Queens</strong>"
    return titleText;
    },

    onRemove: function(map) {
    }
});
L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'bottomleft' }).addTo(nycMap);