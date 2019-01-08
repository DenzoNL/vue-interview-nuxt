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
    remove(state, { itemToBeRemoved }) {
        state.items = state.items.filter(item => item !== itemToBeRemoved);

    },
}