import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/Services/teams.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  TeamsData:any[]=[]
getAllDataTeams:any
heading:any = "Team"
  constructor(private teamsService:TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllRecord().subscribe(data =>{
      console.log('The teams data is::',data)
      this.getAllDataTeams=data.TeamsData
      console.table(this.getAllDataTeams)
    })

  }

}
