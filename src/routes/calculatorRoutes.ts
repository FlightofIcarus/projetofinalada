import express from 'express';
import { CalculatorController } from '../controllers/CalculatorController';

const router = express.Router();

router.get('/', CalculatorController.homePage);
router.post('/calcular-dividendos', CalculatorController.calcularDividendos);

export default router;