import { Router } from "express";

const router = Router();

router.use(function(req, res, next) {
  console.log("Time:", Date.now());
  next();
});

router.get("/rota", (req, res) => {
  return res.send("rota");
});

export default router;
