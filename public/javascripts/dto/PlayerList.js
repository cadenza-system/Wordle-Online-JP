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

        this.setColor()
    }

    getPlayer(id) {
        for (let player of this.list) {
            if (player.isMatch(id)) {
                return player
            }
        }
    }

    setColor() {
        let colorList = [
            'red',
            'blue',
            'yellow',
            'green',
            'pink',
            'purple'
        ]

        for (let i = 0; i < this.list.length; i++) {
            this.list[i].color = colorList[i]
        }
    }
}