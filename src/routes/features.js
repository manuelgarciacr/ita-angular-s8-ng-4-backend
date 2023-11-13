const { Router } = require("express");
const router = Router();
const features = require("../models/Feature");

router.get("/features", (req, res, next) => {
    const query = req.query;
    console.log("QUERY FFFF", req.query);
    features
        .find(query)
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((data) =>
            res.send({
                status: 200,
                message: "Features retrieved",
                data,
            })
        )
        .catch((err) => next(err));
});

router.put("/features", (req, res, next) => {
    console.log("PPUUTT", req.body, res.body);
    features
        .findByIdAndUpdate(req.body._id, req.body)
        .then((data) =>
            res.send({
                status: 200,
                message: "Feature updated",
                data,
            })
        )
        .catch((err) => next(err));
}); // one user

router.post("/features", (req, res, next) => {
    console.log("PPOOSSTT FFFF", req.body, res.body);
    features
        .create(req.body)
        .then((data) =>
            res.send({
                status: 200,
                message: "Feature added",
                data,
            })
        )
        .catch((err) => next(err));
}); // one user

router.delete("/features/:id", (req, res, next) => {
    console.log("DDEELLEETTEE", req.body, res.body);
    features
        .deleteOne({ _id: req.params.id })
        .then((data) =>
            res.send({
                status: 200,
                message: "Feature deleted",
                data,
            })
        )
        .catch((err) => next(err));
}); // one user

module.exports = router;
