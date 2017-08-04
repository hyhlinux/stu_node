var req = {
    session: {
        user: {
            name: "hyh",
            sex: "man"
        }
    }
}

with(req.session.user) {
    console.log('name:', req.session.user.name, 'sex:', req.session.user.sex);
}
