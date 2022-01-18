import { Aex } from '@aex/core';
import { IWebServer, IAexServerInfo } from '../src/index';

test('Should have Server available', () => {
  expect(IWebServer).toBeTruthy();
});


test('Should create and stop Server', async () => {
  const info: IAexServerInfo = {
    framework: new Aex(),
    port: 19800,
    ip: 'localhost'
  }

  const server = new IWebServer(info);
  await server.start();
  await server.stop();
  await server.stop();
});
