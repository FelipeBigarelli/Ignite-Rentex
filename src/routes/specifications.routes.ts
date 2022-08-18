import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
