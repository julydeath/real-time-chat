type userId = string;

export interface Chat {
  userId: userId;
  name: string;
  message: string;
  upvotes: userId[];
}

export abstract class Store {
  constructor() {}

  initRoom(roomId: string) {}

  getChat(room: string, offset: number, limit: number) {}

  addChat(room: string, offset: number, limit: number) {}

  upvote(chatId: string) {}
}
