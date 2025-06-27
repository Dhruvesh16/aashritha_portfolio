import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const portfolios = pgTable("portfolios", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  name: text("name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  location: text("location"),
  linkedinUrl: text("linkedin_url"),
  summary: text("summary"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  portfolioId: integer("portfolio_id").references(() => portfolios.id),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location"),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  achievements: jsonb("achievements").$type<string[]>(),
  sortOrder: integer("sort_order").default(0),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  portfolioId: integer("portfolio_id").references(() => portfolios.id),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  period: text("period").notNull(),
  achievements: jsonb("achievements").$type<string[]>(),
  tags: jsonb("tags").$type<string[]>(),
  highlights: jsonb("highlights").$type<string[]>(),
  sortOrder: integer("sort_order").default(0),
});

export const educations = pgTable("educations", {
  id: serial("id").primaryKey(),
  portfolioId: integer("portfolio_id").references(() => portfolios.id),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  gpa: text("gpa"),
  coursework: jsonb("coursework").$type<string[]>(),
  sortOrder: integer("sort_order").default(0),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  portfolioId: integer("portfolio_id").references(() => portfolios.id),
  category: text("category").notNull(),
  skillsList: jsonb("skills_list").$type<string[]>(),
  sortOrder: integer("sort_order").default(0),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  portfolioId: integer("portfolio_id").references(() => portfolios.id),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  portfolios: many(portfolios),
}));

export const portfoliosRelations = relations(portfolios, ({ one, many }) => ({
  user: one(users, {
    fields: [portfolios.userId],
    references: [users.id],
  }),
  experiences: many(experiences),
  projects: many(projects),
  educations: many(educations),
  skills: many(skills),
  contacts: many(contacts),
}));

export const experiencesRelations = relations(experiences, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [experiences.portfolioId],
    references: [portfolios.id],
  }),
}));

export const projectsRelations = relations(projects, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [projects.portfolioId],
    references: [portfolios.id],
  }),
}));

export const educationsRelations = relations(educations, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [educations.portfolioId],
    references: [portfolios.id],
  }),
}));

export const skillsRelations = relations(skills, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [skills.portfolioId],
    references: [portfolios.id],
  }),
}));

export const contactsRelations = relations(contacts, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [contacts.portfolioId],
    references: [portfolios.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPortfolioSchema = createInsertSchema(portfolios).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertEducationSchema = createInsertSchema(educations).omit({
  id: true,
});

export const insertSkillSchema = createInsertSchema(skills).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>;
export type Portfolio = typeof portfolios.$inferSelect;

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiences.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof educations.$inferSelect;

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
