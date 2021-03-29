const router = require("express").Router();


router.get("/", (req, res) => {
    //ürünleri getir SELECT
})

router.post("/", (req, res) => {
    //gönderilen veriyi ekle INSERT
})

router.get("/:id", (req, res) => {
    //id ile eşleşen ürünü getir SELECT
});

router.post("/:id", (req, res) => {
    //id ile eşleşen ürünü güncelle UPDATE
})

module.exports = router;