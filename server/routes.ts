import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio is a static frontend application
  // No backend routes needed for this implementation
  
  const httpServer = createServer(app);
  return httpServer;
}
