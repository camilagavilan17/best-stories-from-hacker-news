import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryI } from 'src/app/models/story.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://hacker-news.firebaseio.com/v0/"

  constructor(private http:HttpClient) { }
  
  getBestStories():Observable<number[]> {
    let address = this.url + "beststories.json";
    return this.http.get<number[]>(address);
  }

  getStory(id: number):Observable<StoryI> {
    let address = this.url + "item/" + id + ".json";
    return this.http.get<StoryI>(address);
  }

  getTopStories():Observable<number[]> {
    let address = this.url + "topstories.json";
    return this.http.get<number[]>(address);
  }
}
