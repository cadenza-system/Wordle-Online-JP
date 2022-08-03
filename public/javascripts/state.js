class State {
    static socket = new Socket()

    static roomId(id) {
        if (id) {
            sessionStorage.removeItem('room-id')
            sessionStorage.setItem('room-id', id)
        } else {
            return sessionStorage.getItem('room-id')
        }
    }

    static playerList(list) {
        if (list) {
            sessionStorage.removeItem('player-list')
            sessionStorage.setItem('player-list', JSON.stringify(list))
        } else {
            console.log(JSON.parse(sessionStorage.getItem('player-list')))
            return new PlayerList(JSON.parse(sessionStorage.getItem('player-list')))
        }
    }

    static playerId(id) {
        if (id) {
            sessionStorage.removeItem('player-id')
            sessionStorage.setItem('player-id', id)
        } else {
            return sessionStorage.getItem('player-id')
        }
    }
}