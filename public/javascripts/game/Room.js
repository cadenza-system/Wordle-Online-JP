class Room {
    roomId
    playerList

    constructor(roomId, playerList) {
        this.roomId = roomId
        this.playerList = playerList
    }

    roomId() {
        return this.roomId.value()
    }
}