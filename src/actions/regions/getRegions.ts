"use server";

import prisma from "@/lib/prisma";

export async function getRegions() {
  try {
    const regions = await prisma.region.findMany();
    return {
      ok: true,
      regions,
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error fetching regions",
    };
  }
}
