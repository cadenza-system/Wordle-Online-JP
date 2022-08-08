class Socket {
    constructor() {
        if (!this.socket) {
            this.socket = io()
        }
        this.reconnectRoom()
    }

    reconnectRoom() {
        let roomId = sessionStorage.getItem('room-id')
        let playerId = sessionStorage.getItem('player-id')
        if (!roomId) {
            return
        }
        this.socket.emit('reconnect-room', {
            roomId: roomId,
            sender: playerId
        })
    }

    emitCreateRoom(nickname) {
        this.socket.emit('create-room', {
            roomId: createUuid(),
            sender: {
                id: createUuid(),
                nickname: nickname
            }
        })
    }

    onCreateRoom(to) {
        this.socket.on('create-room', (data) => {
            State.roomId(data.room.roomId)
            State.playerId(data.sender)
            State.playerList(data.room.playerList)
            to()
        });
    }

    emitRoomJoin(roomId, nickname) {
        let senderId = createUuid()
        this.socket.emit('join-room', {
            roomId: roomId,
            sender: senderId,
            nickname: nickname
        })

        State.roomId(roomId)
        State.playerId(senderId)
    }

    onSyncRoom(update) {
        this.socket.on('sync-room', (data) => {
            State.playerList(data.room.playerList)
            State.anserList(data.room.anserList)
            update()
        })
    }

    emitAnser(roomId, sender, anser) {
        this.socket.emit('anser', {
            roomId: roomId,
            sender: sender,
            anser: anser
        })
    }

    onSyncAnser(update) {
        this.socket.on('sync-anser', (data) => {
            State.anserList(data.room.anserList)
            update()
        })
    }
}