class RoomBuilder {
    build(hostNickname) {
        // TODO サーバーからRoomIDプレイヤーID、プレイヤーカラーを取得
        let roomId = new UUID('')
        let playerId = new UUID('')
        let color = ''

        return new Room (
            roomId,
            new PlayerList(playerId, color, hostNickname)
        )
    }
}