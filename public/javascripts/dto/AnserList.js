class AnserList {
    list = []

    constructor(value) {
        for (const anser of value) {
            this.list.push(
                new Anser(
                    anser.sender,
                    anser.anser
                )
            )
        }
    }
}