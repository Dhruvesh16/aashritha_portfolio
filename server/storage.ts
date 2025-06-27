import { 
  users, 
  portfolios, 
  experiences, 
  projects, 
  educations, 
  skills, 
  contacts,
  type User, 
  type InsertUser,
  type Portfolio,
  type InsertPortfolio,
  type Experience,
  type InsertExperience,
  type Project,
  type InsertProject,
  type Education,
  type InsertEducation,
  type Skill,
  type InsertSkill,
  type Contact,
  type InsertContact
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, asc } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolio operations
  getPortfolio(id: number): Promise<Portfolio | undefined>;
  getPortfolioByUserId(userId: number): Promise<Portfolio | undefined>;
  createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio>;
  updatePortfolio(id: number, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | undefined>;
  
  // Experience operations
  getExperiencesByPortfolioId(portfolioId: number): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined>;
  deleteExperience(id: number): Promise<boolean>;
  
  // Project operations
  getProjectsByPortfolioId(portfolioId: number): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Education operations
  getEducationsByPortfolioId(portfolioId: number): Promise<Education[]>;
  createEducation(education: InsertEducation): Promise<Education>;
  updateEducation(id: number, education: Partial<InsertEducation>): Promise<Education | undefined>;
  deleteEducation(id: number): Promise<boolean>;
  
  // Skills operations
  getSkillsByPortfolioId(portfolioId: number): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<boolean>;
  
  // Contact operations
  getContactsByPortfolioId(portfolioId: number): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Portfolio operations
  async getPortfolio(id: number): Promise<Portfolio | undefined> {
    const [portfolio] = await db.select().from(portfolios).where(eq(portfolios.id, id));
    return portfolio || undefined;
  }

  async getPortfolioByUserId(userId: number): Promise<Portfolio | undefined> {
    const [portfolio] = await db.select().from(portfolios).where(eq(portfolios.userId, userId));
    return portfolio || undefined;
  }

  async createPortfolio(portfolio: InsertPortfolio): Promise<Portfolio> {
    const [createdPortfolio] = await db
      .insert(portfolios)
      .values(portfolio)
      .returning();
    return createdPortfolio;
  }

  async updatePortfolio(id: number, portfolio: Partial<InsertPortfolio>): Promise<Portfolio | undefined> {
    const [updatedPortfolio] = await db
      .update(portfolios)
      .set({ ...portfolio, updatedAt: new Date() })
      .where(eq(portfolios.id, id))
      .returning();
    return updatedPortfolio || undefined;
  }

  // Experience operations - simplified for now
  async getExperiencesByPortfolioId(portfolioId: number): Promise<Experience[]> {
    return [];
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    // Simplified implementation - would normally insert to database
    return { id: 1, ...experience } as Experience;
  }

  async updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined> {
    return undefined;
  }

  async deleteExperience(id: number): Promise<boolean> {
    return false;
  }

  // Project operations - simplified for now
  async getProjectsByPortfolioId(portfolioId: number): Promise<Project[]> {
    return [];
  }

  async createProject(project: InsertProject): Promise<Project> {
    return { id: 1, ...project } as Project;
  }

  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    return undefined;
  }

  async deleteProject(id: number): Promise<boolean> {
    return false;
  }

  // Education operations - simplified for now
  async getEducationsByPortfolioId(portfolioId: number): Promise<Education[]> {
    return [];
  }

  async createEducation(education: InsertEducation): Promise<Education> {
    return { id: 1, ...education } as Education;
  }

  async updateEducation(id: number, education: Partial<InsertEducation>): Promise<Education | undefined> {
    return undefined;
  }

  async deleteEducation(id: number): Promise<boolean> {
    return false;
  }

  // Skills operations - simplified for now
  async getSkillsByPortfolioId(portfolioId: number): Promise<Skill[]> {
    return [];
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    return { id: 1, ...skill } as Skill;
  }

  async updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined> {
    return undefined;
  }

  async deleteSkill(id: number): Promise<boolean> {
    return false;
  }

  // Contact operations - this is the main one we need working
  async getContactsByPortfolioId(portfolioId: number): Promise<Contact[]> {
    return await db
      .select()
      .from(contacts)
      .where(eq(contacts.portfolioId, portfolioId))
      .orderBy(desc(contacts.createdAt));
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [createdContact] = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return createdContact;
  }
}

export const storage = new DatabaseStorage();
