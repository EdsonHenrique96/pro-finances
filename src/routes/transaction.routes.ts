import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, type, value } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    const transactionCreated = createTransaction.execute({
      title,
      type,
      value,
    });

    return response.status(201).json(transactionCreated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;