const state1 = {username: 'john', point: 100, loading: true}
const state2 = {state1, point: 75, loading: false, success: true}
for (let [key, value] of Object.entries(state1)) {
    console.log(key, value);
}
for (let [key, value] of Object.entries(state2)) {
    console.log(key, value);
}