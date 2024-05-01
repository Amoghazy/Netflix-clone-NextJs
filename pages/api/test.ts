import { DB } from "@/lib/db";
import User from "@/lib/models/users";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handelr(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  DB.connect();

  const user = new User({
    email: "test@test",
    password: "test",
    provider: "test",
  });
  await user.save();

  res.status(200).json({
    message: "user created successfully",
  });
}
