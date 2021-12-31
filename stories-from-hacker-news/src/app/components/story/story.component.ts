import { Component, OnInit, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StoryI } from 'src/app/models/story.interface';

//Services
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: StoryI = { by: '', descendants: 0, id: 0, kids: [], score: 0, time: 0, title: "", type: "", url: "" };

  constructor(private api:ApiService) { }

  @Input() id=0

  ngOnInit(): void {
    this.api.getStory(this.id).subscribe(data => {
      this.story = data;
    })
  }

  isStoryEmpty(): boolean {
    return this.story.by === "" && this.story.descendants == 0 && this.story.id == 0 && this.story.kids.length == 0 
           && this.story.score == 0 && this.story.time == 0 && this.story.title === "" && this.story.type === "" 
           && this.story.url === "";
  }

}
