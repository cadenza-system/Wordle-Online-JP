class Socket {
    constructor() {
        if (!this.socket) {
            this.socket = io()
        }
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
}