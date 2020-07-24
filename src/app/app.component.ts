import { Component , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng4-complete-guide';  
  serverArray=[{name:"Server A",type:"server",content:"Test Server!!!!!!!"}];
  
  
  onServerAdded(serverData:{serverDataname:string,serverDatacontent:string}){
   //console.log("Check Creation"+serverData.serverDataname);
    this.serverArray.push({name:serverData.serverDataname,content:serverData.serverDatacontent,type:'server'});
   }
   onBlueprintServerAdded(blueprintServerData:{serverDataname:string,serverDatacontent:string}){
    //console.log("Check blueprintServerData Creation"+blueprintServerData.serverDataname);
     this.serverArray.push({name:blueprintServerData.serverDataname,content:blueprintServerData.serverDatacontent,type:'serverBluePrint'});
   }
 
 
}
