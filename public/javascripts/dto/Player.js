class Player {
    id
    color
    nickname
    score
    isHost

    constructor(id, color, nickname, score, isHost) {
        this.id = id
        this.color = color
        this.nickname = nickname
        this.score = score
        this.isHost = isHost
    }

    isMatch(id) {
        return id === this.id
    }
}