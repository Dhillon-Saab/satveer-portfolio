import { compare, hash } from "bcryptjs";
import prisma from "./prisma";

export const saltAndHashPassword = async (rawPass) => {
  const salt = 10;
  const hashedPassword = await hash(rawPass, salt);

  return hashedPassword;
};

export const comparePass = async (rawPass, hashedPassword) => {
  const isMatched = await compare(rawPass, hashedPassword);
  if (isMatched) {
    return true;
  }
  return false;
};

export async function getUserForAuth(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const verified = comparePass(password, user.password);

    if (verified) {
      return user;
    }
  } catch (error) {
    throw new Error(error);
  }
}
