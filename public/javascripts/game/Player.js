class Player {
    color
    nickname
    score
    isHost
    isCiantOwner

    constructor(id, color, nickname, isHost, isCiantOwner) {
        this.id = id
        this.color = color
        this.nickname = nickname
        this.score = 0
        this.isHost = isHost
        this.isCiantOwner = isCiantOwner
    }

    color() {
        return this.color
    }

    nickname() {
        return this.nickname
    }

    score() {
        return this.score
    }

    isHost() {
        return this.isHost
    }

    isCiantOwner() {
        return this.isCiantOwner
    }
}