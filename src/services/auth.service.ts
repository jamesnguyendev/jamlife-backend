import bcrypt from 'bcrypt';

import { prisma } from '../libs/db/prismaClient';

const SALT_ROUNDS = 10;

export const registerUser = async (
    name: string,
    email: string,
    password: string,
) => {
    const existingContact = await prisma.contact.findUnique({
        where: { email },
    });

    if (existingContact) {
        throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
        data: {
            name,
            password: hashedPassword,
            contact: {
                create: {
                    email,
                },
            },
        },
        include: {
            contact: true,
        },
    });

    return {
        id: user.id,
        name: user.name,
        email: user.contact?.email,
    };
};
