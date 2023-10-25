const { Router } = require("express");
const router = Router();
const users = require("../models/User");

router.get("/users", (req, res, next) => {
    const query = req.query;
    console.log("QUERY", req.query);
    users
        .find(query)
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((data) =>
            res.send({
                status: 200,
                message: "Users retrieved",
                data,
            })
        )
        .catch((err) => next(err));
});

router.put("/users", (req, res, next) => {
    console.log("PPUUTT", req.body, res.body);
    users
        .findByIdAndUpdate(req.body._id, req.body)
        .then((data) =>
            res.send({
                status: 200,
                message: "User updated",
                data,
            })
        )
        .catch((err) => next(err));
}); // one user

router.post("/users", (req, res, next) => {
    console.log("PPOOSSTT", req.body, res.body);
    users
        .create(req.body)
        .then((data) =>
            res.send({
                status: 200,
                message: "User added",
                data,
            })
        )
        .catch((err) => next(err));
}); // one user

router.delete("/users/:id", (req, res, next) => {
    console.log("DDEELLEETTEE", req.body, res.body);
    users
        .deleteOne({ _id: req.params.id })
        .then((data) =>
            res.send({
                status: 200,
                message: "User deleted",
                data,
            })
        )
        .catch((err) => next(err));
}); // one user

module.exports = router;
