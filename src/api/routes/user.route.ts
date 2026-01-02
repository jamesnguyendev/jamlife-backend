import express from 'express';

export const userRouter = express.Router();

userRouter.post('/', (req, res) => {
    console.log('user check is successful !!!', req, res);
});
