#!/usr/bin/env node
/**
 * vercel-api · HTTP proxy for Vercel
 * Sovereign estate wrapper for Vercel · Serverless
 * Docs: https://vercel.com/docs/rest-api
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Vercel' }));
  res.end(JSON.stringify({ name: 'vercel-api', wraps: 'Vercel', docs: 'https://vercel.com/docs/rest-api' }));
}).listen(PORT, () => console.log('vercel-api on', PORT));
