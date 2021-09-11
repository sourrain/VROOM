import { Server } from '@hocuspocus/server'
import { RocksDB } from '@hocuspocus/extension-rocksdb'

const server = Server.configure({
    port: 1234,
    extensions: [
        new RocksDB({ path: './database' }),
    ],
})

server.listen()