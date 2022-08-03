class Socket {
    constructor() {
        if (!this.socket) {
            this.socket = io()
        }
    }

    emitCreateRoom(nickname) {
        this.socket.emit('create-room', {
            roomId: createUuid(),
            hostPlayer: {
                id: createUuid(),
                nickname: nickname
            }
        })
    }

    onCreateRoom(to) {
        this.socket.on('create-room', (data) => {
            State.roomId(data.roomId)
            State.playerId(data.sender)
            State.playerList(data.playerList)
            to()
        });
    }
}