async function profile(ctx) {
    await ctx.render('index', {
        title: '123'
    })
}

module.exports = {
    profile
}