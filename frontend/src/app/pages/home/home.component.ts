import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/partials/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  introText:string = "    Väskinde Marknad är en av Gotlands mest populära marknader och bjuder traditionsenligt även i år in till två dagar, julafton och nyåar av glädje med utställare av allehanda varor och produkter, så som exempelvis hantverk, smink, smycken, örter, träskor och andra marknadstypiska varor, till försäljning. Dessutom utrustar man marknadsområdet med ett mindre nöjesfält för de yngsta besökarna."
  julmarknadText:string = "Vår julmarknad går ända tllbaka till 1632. Då bönder och tjänare stod sida vid sida med herrskap och kungligheter för umgås kring julen. Idag är Julmarknaden ett treevlig sätt att träffas och kanske hitta något spännande att te med hem och lägga under granen till nära och kära På marknaden hitta ni allt från leksaker tillverkade med kärlek till mat och godsaker gjorde med omsorg och äkta gotländska råvaror. Det finns något för alla."
  newyearText:string ="Nyårsmarknaden är något nytt där vi försökt modernisera och utveckla tänkandet kring marknaden. Här kan du alljämnt hitta klassiska saker från julmarknaden men även saker så som teknik och nya idéer. Det kan vara modenr mat men anknytning till väskinde socken men det kan också vara mat influerad från resten av världen. Du hittar så väl presenter som kläder och annat från hela världen!"


}
