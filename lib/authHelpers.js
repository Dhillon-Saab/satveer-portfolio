import { compare, hash } from "bcryptjs";
import { supabase } from "./supabase";

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
    const {data, error} = await supabase.from('users').select().eq('email', email)

    const verified = comparePass(password, data[0].password);

    if (verified) {
      return data[0];
    }
  } catch (error) {
    throw new Error(error);
  }
}
