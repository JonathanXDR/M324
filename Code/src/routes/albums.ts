import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'list of albums!' });
});

export default router;