import { Component, Input } from '@angular/core';

@Component({  
	selector: 'project-sector', 	
	templateUrl: './project-sector.component.html',        
})

export class ProjectSectorComponent {          
    @Input() apiResponse: any;
    @Input() redirectPage: string;
    @Input() locale: string;
    @Input() sourceType: string;
   
    sectors: any[] = [];
    minorSectors: any[] = [];
    secVal:any[]= [];
    secObj:any[]=[];
    secArr:any[]=[];
    secSel:any[] = [];
	constructor() { }
        
	ngOnChanges() {	
        let secSel;          

        if (this.apiResponse != undefined) {
            let sectors = this.apiResponse.sectors;
            let minorSectors = this.apiResponse.minorSectors;

            sectors.sort(function(a, b) {
                var x = a['englishsectorName']; var y = b['englishsectorName'];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            minorSectors.sort(function(a, b) {
                var x = a['englishLongName']; var y = b['englishLongName'];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            this.sectors = sectors;
            this.minorSectors =  minorSectors;

         }  
         
        
         if(this.locale == 'ENG'){
            secSel = "Select";
            this.secSel = secSel;
        }
         else if(this.locale == 'POR'){
            secSel = "Selecione";
            this.secSel = secSel;
         }
         else if(this.locale == 'RUS'){
            secSel = "Выбрать";
            this.secSel = secSel;
        }
        else if(this.locale == 'SPA'){
            secSel = "Selecciona";
            this.secSel = secSel;
        }
        else if(this.locale == 'CHI'){
            secSel = "選擇";
            this.secSel = secSel;
        }
        else if(this.locale == 'FRE'){
            secSel = "Sélectionnez";
            this.secSel = secSel;
        }
        else if(this.locale == 'ARA'){
            secSel = "تحديد" ;
            this.secSel = secSel;
        }



    }          
}