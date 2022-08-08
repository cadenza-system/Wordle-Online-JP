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
        this.socket.emit('join-room', {
            roomId: roomId,
            sender: createUuid(),
            nickname: nickname
        })

        State.roomId(roomId)
        State.playerId(nickname)
    }

    onSyncRoom(update) {
        this.socket.on('sync-room', (data) => {
            State.playerList(data.room.playerList)
            update()
        })
    }
}