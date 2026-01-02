import { Request, Response } from 'express';
import * as authService from '../../services/auth.service';
// import { ApiResponse } from '../../utils/apiResponse';

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        await authService.registerUser(name, email, password);
        res.status(201).json({ message: 'Successfully registered' });
        // return ApiResponse.success(res, 'Successfully registered');
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
