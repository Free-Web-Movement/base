import { Aex, GetTextWithAex } from '@aex/core';
import { IAexServerInfo, IWebServer, Wallet } from '../../src/index';

test('Should have', () => {
  expect(Wallet).toBeTruthy();
});


test('Should create and stop Server', async () => {
  const info: IAexServerInfo = {
    framework: new Aex(),
    port: 19800,
    ip: 'localhost'
  }

  const server = new IWebServer(info);

  await server.push(Wallet);
  await server.start();

  await GetTextWithAex(info.framework, "Hello Wallet!", "/wallet/home");
});
