import { Component, Input } from '@angular/core';

@Component({  
	selector: 'project-theme', 	
	templateUrl: './project-theme.component.html',        
})

export class ProjectThemeComponent {          
    @Input() apiResponse: any;
    @Input() redirectPage: string;

    themes: any[] = [];
    js:any[] =[];
    bbd:any[] =[];
    ccd:any[] =[];
    ddd:any[] =[];

	constructor() { }
        
	ngOnChanges() {	              
        if (this.apiResponse != undefined) {
            this.themes.push(this.apiResponse);
       
           }
    }          
}