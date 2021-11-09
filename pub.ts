export default class Pub {
  // info: Info; // informação a ser publicada na próxima aula vamos definir esse formato
  // topics: string[]; //topicos de informações
  // history: Info[]; 
  subscribers: string[] = [];
  publish(){
    for ( const subscriber of this.subscribers ) {
//      subscriber...
    }
  }
  accept(subscriber: string) {
    this.subscribers.push(subscriber);
  }
}
