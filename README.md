**Project Title:**
Ghost Bikes of Queens

**Project Description:**
Traffic violence is an all too common, yet hidden, experience in New York City. After a crash site is cleaned up, the infrastructure resumes its seemingly neutral existence, and the streets continue to be dominated by cars. Ghost bikes—bikes painted white and placed near the site where a cyclist was killed—bring traffic violence to the foreground. They stand as monuments for those we’ve lost, but they also represent an act of love, looking toward a future with safer streets; they serve as both a grassroots memorial and a call to action. Ghost Bikes of Queens is a digital memory project that aims to serve as a virtual memorial and to further that call to action.
The project comprises three main parts: an interactive map of all ghost bikes in the borough, including pop-ups with the victims’ names and information about the crash sites; a written interview with a Ghost Bike Project volunteer detailing his experience traversing the city on bike and volunteering to create and install ghost bikes; and multiple visual/art activist components—a time-lapse video of a ghost bike at sunrise, a text animation of all the ghost bikers’ names, and a photo gallery.
This project is a master’s capstone submitted to the Graduate Faculty in Digital Humanities in partial fulfillment of the requirements for the degree of Master of Arts, The City University of New York.

**File Descriptions:**
21St_46Ave_5.jpg - image in photo gallery of ghost bike at 21 St and 46 Ave
31Ave_51St.jpg - image in photo gallery of ghost bike at 31 Ave and 51 St
34St_30Ave_2.jpg - image in photo gallery of ghost bike at 34 St and 30 Ave
35St_23Ave_5.jpg - image in photo gallery of ghost bike at 35 St and 23 Ave
48St_LIE.jpg - image in photo gallery of ghost bike at 48 St and Long Island Expwy entrance
BordenAve_2St_4.jpg - image in photo gallery of ghost bike at Borden Ave and 2 St
Broadway_BaxterAve_7.jpg - image in photo gallery of ghost bike at Broadway and Baxter Ave
Capstone_GhostBikesQueens.xlsx - Excel file of data about each ghost bike cyclist and crash site
Complete_with_DocuSign_ConsentReleaseForms_G.pdf - informed consent and release forms for interview
MauriceAve_BordenAve.jpg - image in photo gallery of ghost bike at Maurice Ave and Borden Ave
QueensPlazaNorth_29St_4.jpg - image in photo gallery of ghost bike at Queens Plaza North and 29 St
about.html - content for about page
bike.png - bike image used as pins on the map
gb-home.png - image on homepage
home.css - CSS for the homepage and top nav
home.js - JavaScript for homepage and top nav
index.html - content for homepage
interview.css - CSS for the interview page, as well as the workday subpage and the about page
interview.html - content for the interview page
map.css - CSS for the map page
map.html - content for the map page
map.js - JavaScript for the map page
names.css - CSS for the names page
names.html - content for the names page
photos.css - CSS for the photos page
photos.html - content for the photos page
time-lapse-sunrise-com1.mp4 - first segment of the time-lapse video
time-lapse-sunrise-com2.mp4 - second segment of the time-lapse video
time-lapse-sunrise-com3.mp4 - third segment of the time-lapse video
time-lapse-sunrise-com4.mp4 - fourth segment of the time-lapse video
time-lapse-sunrise-com5.mp4 - fifth segment of the time-lapse video
time-lapse-sunrise-com6.mp4 - sixth segment of the time-lapse video
time-lapse-sunrise-com7.mp4 - seventh segment of the time-lapse video
time-lapse-sunrise-com8.mp4 - eighth segment of the time-lapse video
video.html - content for video page
workday.html - content for workday page

**Note About Video Files:**
Currently GitHub repositories put a file-size limit of 25 MB on uploads. The file for my time-lapse video is 110 MB, and currently stored on the CUNY Academic Commons (https://briannacaszatt.commons.gc.cuny.edu/wp-content/blogs.dir/18156/files/2024/04/time-lapse-sunrise-compressed.mp4). I also wanted to include the video in some way in my repository, so I split it into 8 smaller files that could be hosted there (mp4 files named time-lapse-sunrise-com1 through 8).

If there is an issue with the video at its hosted location, here is code that will loop the eight files back to back, albeit with a small interruption for loading in between. It can be added directly to the video.html file:
<script type='text/javascript'>
     var count=1;
     var player=document.getElementById('myVideo');
     var mp4Vid = document.getElementById('mp4Source');
     player.addEventListener('ended',myHandler,false);

     function myHandler(e)
     {
        if(!e) 
        {
           e = window.event; 
        }
        count++;
        mp4Vid.setAttribute("src","time-lapse-sunrise-com"+count+".mp4");
        player.load();
        player.play();
     }
 </script>


**Licsense:**
This project is freely available for others to use.
