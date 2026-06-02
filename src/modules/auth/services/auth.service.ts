import bcrypt from "bcrypt";
import { UserRepository } from "../../user/respositories/user.repository.js";
import { generateToken } from "../utils/jwt.js";

export class AuthService {

  private userRepository = new UserRepository();

  async register(data: any) {

    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword
    });

    return user;
  }

  async login(email: string, password: string) {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id,  
      role_id: user.role_id
    });

    return {
      user,
      token
    };
  }
}