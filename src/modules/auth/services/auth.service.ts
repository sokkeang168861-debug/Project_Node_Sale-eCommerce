import bcrypt from "bcrypt";
import { UserRepository } from "../../user/respositories/user.repository.js";
import { generateToken } from "../utils/jwt.js";

export class AuthService {

  private userRepository = new UserRepository();

  async register(data: any) {
    // 1. Strict Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || data.email.trim() === "") {
      throw new Error("Email cannot be empty");
    }
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
    }

    // 2. Business rule / role check
    const allowedRoles = ["admin", "manager", "staff"] as const;
    if (!allowedRoles.includes(data.role)) {
      throw new Error("Invalid role");
    }

    // 3. Check unique email (Assuming userRepository is injected here)
    const existingEmail = await this.userRepository.findByEmail(data.email);
    if (existingEmail) {
      throw new Error("Email already exists");
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // 5. Create user with default fallback for is_active
    return this.userRepository.create({
      ...data,
      password: hashedPassword,
      is_active: data.is_active ?? true
    });
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
      role: user.role
    });

    return {
      user,
      token
    };
  }
}