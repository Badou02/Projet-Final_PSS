const express = require('express');
const router = express.Router();
const rendezVousController = require('../Controllers/rendezVousControllers');

router.post('/new-rendezVous', rendezVousController.createRendezVous);
router.get('/All-rendezVous', rendezVousController.getAllRendezVous);
router.get('/:id', rendezVousController.getRendezVousById);
router.put('/:id', rendezVousController.updateRendezVous);
router.delete('/:id', rendezVousController.deleteRendezVous);

module.exports = router;
