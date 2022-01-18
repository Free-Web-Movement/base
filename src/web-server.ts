import { Aex } from "@aex/core";
import { Server } from "http";

export interface IAexServerInfo {
  framework: Aex,
  server?: Server,
  port: number,
  ip: string,
}

export class IWebServer {
  private info: IAexServerInfo;
  constructor(info: IAexServerInfo) {
    this.info = info;
  }
  public async start() {
    this.info.server = await this.info.framework!.start(this.info.port, this.info.ip, true);
    console.log("IWebServer operatorational.")
  }

  public async push(aClass: any) {
    this.info.framework.push(aClass);
  }

  public async stop() {
    if (this.info.server) {
      this.info.server.close();
    }
    this.info.server = undefined;
  }
}
