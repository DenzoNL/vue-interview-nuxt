// Import the SHA256 encryption library.
import SHA256 from "crypto-js/sha256"

export const state = () => ({
    items: []
})

export const mutations = {
    add(state, item) {
        state.items.push({
            name: item,
            hash: SHA256(item).toString()
        })
    },
    remove(state, { item }) {
        state.items.splice(state.items.indexOf(item), 1)


    },
}