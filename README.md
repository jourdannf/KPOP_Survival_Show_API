# K-Pop Survival Show API #

## Project Overview ##

This project implements an API filled with data about K-pop survival shows, the contestants from each show, and their performances from each show. To start off, navigate to the localhostserver route "/shows".

Users can add a survival show to the database as long as it's under on the main Korean broadcasting networks: KBS, MBC, SBS, KakaoTV, Mnet, or JTBC. Users must provide an image of the poster from show to be displayed on the screen. Users can choose which gender category the contestants of the show fall under and must also give the name of the show, when the show started and ended, the amount of contestants, the amount of winners, the amount of numbers, who the MC is, and the name of the soloist or group who won or debuted in the end.

Users can enter this information about the survival show they want to add by clicking the link at the bottom of the survival shows screen to navigate to a form.

If a user deletes a survival show from the database, all of the performances from that survival show is deleted along with every contestant whose only appearance was on that show (appearances are based on the list of shows that are currently in the database).

A user can also update the name of the survival show in the database, by making a patch request to the following route: ":/id/update"

If you'd like to start off with a clean slate of data, you can travel to the following routes to refresh the database:
"/shows/seed"
"/contestants/seed"
"/performances/see"

## Languages Used ##

* ExpressJS
* PugJS
* NodeJS 
* MongoDB                                            