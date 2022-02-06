export class Quote {
  upvote: number;
  downvote:number;
  showDetails: boolean;
  constructor(public id: number, public authorName: string, public quote:string, public submittedBy: string, public dateCreated: Date){
      this.upvote = 0
      this.downvote = 0
      this.showDetails = false
  }
}