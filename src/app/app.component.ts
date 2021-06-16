import { Component } from '@angular/core';

  export interface Post {
    title: string
    text: string
    id?: number
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular'
  posts: Post[] = [
    {title: 'RRRRRRRRRRRRRRRRRRRR', text: 'BBBBBBBBBBBBBBBB', id: 1},
    {title: 'QQQQQQQQQQQQQQQQQQQQQ', text: 'EEEEEEEEEEEEEEEE', id: 2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post', post)
  }




  // *************************************************************************************************
  // toggle = true

  // cards: Card[] = [
  //   {title: 'Card 1', text: 'This is card number 1'},
  //   {title: 'Card 2', text: 'This is card number 2'},
  //   {title: 'Card 3', text: 'This is card number 3'}
  // ]

  // toggleCards() {
  //   this.toggle = !this.toggle
  // }
}
