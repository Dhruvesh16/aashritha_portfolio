import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // For now, use a default portfolio ID of 1
      // In a real application, this would be dynamic based on the portfolio being viewed
      const contact = await storage.createContact({
        ...contactData,
        portfolioId: 1
      });
      
      res.status(201).json({ success: true, contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to save contact" 
      });
    }
  });

  // Get all contacts for a portfolio (admin endpoint)
  app.get("/api/portfolios/:portfolioId/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const portfolioId = parseInt(req.params.portfolioId);
      const contacts = await storage.getContactsByPortfolioId(portfolioId);
      res.json({ contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch contacts" 
      });
    }
  });
  
  const httpServer = createServer(app);
  return httpServer;
}
