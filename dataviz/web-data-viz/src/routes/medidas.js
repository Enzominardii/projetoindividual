var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/quiz/:idQuiz", function (req, res) {
    medidaController.buscarPontuacoesPorQuiz(req, res);
});

module.exports = router;
