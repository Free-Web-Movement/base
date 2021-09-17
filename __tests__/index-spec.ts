import { VIGServer } from '../src/index';

test('Should have Server available', () => {
  expect(VIGServer).toBeTruthy();
});


test('Should create and stop Server', async () => {

  const server = new VIGServer();

  await server.start();
  await server.stop();
  await server.stop();

});
