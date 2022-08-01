class PlayerList {
    list = []

    constructor(id, color, nickname) {
        this.list.push(new Player(id, color, nickname, true, true))
    }
}