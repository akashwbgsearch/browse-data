import { Component, Input } from '@angular/core';

@Component({  
	selector: 'project-country', 	
	templateUrl: './project-country.component.html',        
})

export class ProjectCountryComponent {          
    @Input() apiResponse: any;
    @Input() redirectPage: string;
    @Input() locale: string;
    @Input() sourceType: string;

    regions: any[] = [];
    countries: any[] = [];
    conSel:any[] = []; 
   
	constructor() {  }
        
	ngOnChanges() {	  
        let conSel;      
        if (this.apiResponse != undefined) {
            let regions = this.apiResponse.region;
            let countries = this.apiResponse.countries;
            
            regions.sort(function(a, b) {
                var x = a['englishCtyName']; var y = b['englishCtyName'];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
            let otherRegion = {};
            regions.forEach((region, index) => {
                if(region.regionName == 'Other') {
                    otherRegion = region;
                    regions.splice(index, 1);
                }
            });
            regions.push(otherRegion);

            countries.sort(function(a, b) {
                var x = a['englishCtyName']; var y = b['englishCtyName'];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
            this.regions = regions;
            this.countries =  countries;
        }
    
        if(this.locale == 'ENG'){
            conSel = "Select";
            this.conSel = conSel;
        }
         else if(this.locale == 'POR'){
            conSel = "Selecione";
            this.conSel = conSel;
         }
         else if(this.locale == 'RUS'){
            conSel = "Выбрать";
            this.conSel = conSel;
        }
        else if(this.locale == 'SPA'){
            conSel = "Selecciona";
            this.conSel = conSel;
        }
        else if(this.locale == 'CHI'){
            conSel = "選擇";
            this.conSel = conSel;
        }
        else if(this.locale == 'FRE'){
            conSel = "Sélectionnez";
            this.conSel = conSel;
        }
        else if(this.locale == 'ARA'){
            conSel = "تحديد" ;
            this.conSel = conSel;
        }

    }          
} 