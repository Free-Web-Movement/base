import { Aex } from "@aex/core";
import { Server } from "http";

export class VIGServer {
  private port: number;
  private ip: string;

  private aex = new Aex();

  private instance: Server | undefined;

  constructor(ip: string = 'localhost', port: number = 19800) {
    this.ip = ip;
    this.port = port;
  }

  public async start() {
    this.instance = await this.aex.start(this.port, this.ip);
    console.log("VIG Coin Server operatorational.")
  }

  public async stop() {
    if (this.instance) {
      this.instance.close();
    }
    this.instance = undefined;
  }
}
