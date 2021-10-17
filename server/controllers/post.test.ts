import * as post from "./post"
// @ponicode
describe("post.default.create", () => {
    test("0", async () => {
        await post.default.create({}, undefined)
    })
})

// @ponicode
describe("post.default.destroy", () => {
    test("0", async () => {
        await post.default.destroy(NaN, undefined)
    })
})

// @ponicode
describe("post.default.retrieve", () => {
    test("0", async () => {
        await post.default.retrieve(Infinity, undefined)
    })
})

// @ponicode
describe("post.default.update", () => {
    test("0", async () => {
        await post.default.update(-Infinity, {}, undefined)
    })
})

// @ponicode
describe("post.default.addImage", () => {
    test("0", async () => {
        await post.default.addImage({}, undefined)
    })
})
