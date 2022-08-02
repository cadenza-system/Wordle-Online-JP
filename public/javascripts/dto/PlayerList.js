class PlayerList {
    list = []

    constructor(value) {
        for (const player of value) {
            this.list.push(
                new Player(
                    player.id,
                    player.color,
                    player.nickname,
                    player.score,
                    player.isHost
                )
            )
        }
    }

    getPlayer(id) {
        for (player in this.list) {
            if (player.isMatch(id)) {
                return player
            }
        }
    }
}