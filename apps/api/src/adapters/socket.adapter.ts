import {IoAdapter} from '@nestjs/platform-socket.io'
import {ServerOptions} from 'http';

export class SocketAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions) {
    const server = super.createIOServer(port, { ...options, cors: true});
    return server
  }

}