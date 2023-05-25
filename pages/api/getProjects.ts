import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const allProjects = await prisma.project.findMany();
      // console.log(allProjects);
      return res.status(200).json(allProjects);
    } catch (error) {
      console.log(error);
    }
  }
}
