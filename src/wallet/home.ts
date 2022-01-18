import { get } from "@aex/core";

export class Wallet {

  @get("/wallet/home")
  public async home() {
    const [, res,] = arguments;
    res.end("Hello Wallet!");
  }

}