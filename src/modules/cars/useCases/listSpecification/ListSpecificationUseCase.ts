import { Specification } from '../../model/Specification';
import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}

export { ListSpecificationUseCase };
