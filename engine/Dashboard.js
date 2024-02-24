import prisma from "@/engine/Prisma";

export async function getTotalCollectionRequests() {
  const totalRequests = await prisma.pickupRequest.count();
  return totalRequests;
}
