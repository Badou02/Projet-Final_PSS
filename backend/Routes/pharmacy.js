const express = require('express');
const router = express.Router();
const pharmacyController = require('../Controllers/pharmacyController');

router.post('/new-pharmacy', pharmacyController.createpharma);
router.get('/all-pharmacy', pharmacyController.getAllPharmacies);
router.get('/:id', pharmacyController.getPharmacyById);
router.put('/:id', pharmacyController.updatepharmacy);
router.delete('/:id', pharmacyController.deletePharmacy);


module.exports = router;